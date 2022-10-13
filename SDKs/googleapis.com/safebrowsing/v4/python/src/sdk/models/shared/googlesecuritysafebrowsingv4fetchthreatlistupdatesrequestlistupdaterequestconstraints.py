from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraintsSupportedCompressionsEnum(str, Enum):
    COMPRESSION_TYPE_UNSPECIFIED = "COMPRESSION_TYPE_UNSPECIFIED"
    RAW = "RAW"
    RICE = "RICE"


@dataclass_json
@dataclass
class GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints:
    device_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceLocation' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    max_database_entries: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxDatabaseEntries' }})
    max_update_entries: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxUpdateEntries' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    supported_compressions: Optional[List[GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraintsSupportedCompressionsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportedCompressions' }})
    
