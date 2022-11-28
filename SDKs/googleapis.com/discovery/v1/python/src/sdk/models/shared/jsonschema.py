from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class JSONSchemaAnnotations:
    r"""JSONSchemaAnnotations
    Additional information about this property.
    """
    
    required: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    

@dataclass_json
@dataclass
class JSONSchemaVariantMap:
    dollar_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('$ref') }})
    type_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type_value') }})
    

@dataclass_json
@dataclass
class JSONSchemaVariant:
    r"""JSONSchemaVariant
    In a variant data type, the value of one property is used to determine how to interpret the entire entity. Its value must exist in a map of descriminant values to schema names.
    """
    
    discriminant: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discriminant') }})
    map: Optional[List[JSONSchemaVariantMap]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('map') }})
    

@dataclass_json
@dataclass
class JSONSchema:
    dollar_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('$ref') }})
    additional_properties: Optional[JSONSchema] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalProperties') }})
    annotations: Optional[JSONSchemaAnnotations] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    enum: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enum') }})
    enum_descriptions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enumDescriptions') }})
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    items: Optional[JSONSchema] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    maximum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximum') }})
    minimum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimum') }})
    pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pattern') }})
    properties: Optional[dict[str, JSONSchema]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    read_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readOnly') }})
    repeated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repeated') }})
    required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    variant: Optional[JSONSchemaVariant] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variant') }})
    
