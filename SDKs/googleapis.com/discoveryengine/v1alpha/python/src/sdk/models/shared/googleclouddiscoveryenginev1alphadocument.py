from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDiscoveryengineV1alphaDocument:
    r"""GoogleCloudDiscoveryengineV1alphaDocument
    Document captures all raw metadata information of items to be recommended or searched.
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    json_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jsonData') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_document_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentDocumentId') }})
    schema_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaId') }})
    struct_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('structData') }})
    
