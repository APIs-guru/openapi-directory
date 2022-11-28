from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleSecuritySafebrowsingV4ThreatEntryMetadata:
    r"""GoogleSecuritySafebrowsingV4ThreatEntryMetadata
    The metadata associated with a specific threat entry. The client is expected to know the metadata key/value pairs associated with each threat type.
    """
    
    entries: Optional[List[GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entries') }})
    
