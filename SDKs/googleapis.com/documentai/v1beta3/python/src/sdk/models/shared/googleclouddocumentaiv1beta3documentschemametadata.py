from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3DocumentSchemaMetadata:
    r"""GoogleCloudDocumentaiV1beta3DocumentSchemaMetadata
    Metadata for global schema behavior.
    """
    
    document_allow_multiple_labels: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentAllowMultipleLabels') }})
    document_splitter: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentSplitter') }})
    prefixed_naming_on_properties: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefixedNamingOnProperties') }})
    skip_naming_validation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipNamingValidation') }})
    
