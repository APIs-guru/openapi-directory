from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3DocumentSchemaMetadata:
    document_allow_multiple_labels: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentAllowMultipleLabels' }})
    document_splitter: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentSplitter' }})
    prefixed_naming_on_properties: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefixedNamingOnProperties' }})
    skip_naming_validation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skipNamingValidation' }})
    
