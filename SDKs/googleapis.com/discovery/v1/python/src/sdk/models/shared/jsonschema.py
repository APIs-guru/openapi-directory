from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import jsonschema
from . import jsonschema
from . import jsonschema


@dataclass_json
@dataclass
class JSONSchemaAnnotations:
    required: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'required' }})
    

@dataclass_json
@dataclass
class JSONSchemaVariantMap:
    dollar_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '$ref' }})
    type_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type_value' }})
    

@dataclass_json
@dataclass
class JSONSchemaVariant:
    discriminant: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discriminant' }})
    map: Optional[List[JSONSchemaVariantMap]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'map' }})
    

@dataclass_json
@dataclass
class JSONSchema:
    dollar_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '$ref' }})
    additional_properties: Optional[jsonschema.JSONSchema] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalProperties' }})
    annotations: Optional[JSONSchemaAnnotations] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotations' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    enum: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enum' }})
    enum_descriptions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enumDescriptions' }})
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    items: Optional[jsonschema.JSONSchema] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    maximum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximum' }})
    minimum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimum' }})
    pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pattern' }})
    properties: Optional[dict[str, jsonschema.JSONSchema]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    read_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readOnly' }})
    repeated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repeated' }})
    required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'required' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    variant: Optional[JSONSchemaVariant] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variant' }})
    
