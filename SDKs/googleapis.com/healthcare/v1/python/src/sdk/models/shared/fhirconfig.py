from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import fieldmetadata


@dataclass_json
@dataclass
class FhirConfig:
    default_keep_extensions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultKeepExtensions' }})
    field_metadata_list: Optional[List[fieldmetadata.FieldMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldMetadataList' }})
    
