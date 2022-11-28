from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Resource:
    r"""Resource
    A representation of a Google Cloud resource.
    """
    
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    discovery_document_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discoveryDocumentUri') }})
    discovery_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discoveryName') }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    resource_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceUrl') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
