from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlesecuritysafebrowsingv4threatentrymetadatametadataentry


@dataclass_json
@dataclass
class GoogleSecuritySafebrowsingV4ThreatEntryMetadata:
    entries: Optional[List[googlesecuritysafebrowsingv4threatentrymetadatametadataentry.GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entries' }})
    
