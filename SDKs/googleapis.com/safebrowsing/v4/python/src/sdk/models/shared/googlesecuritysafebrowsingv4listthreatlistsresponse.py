from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlesecuritysafebrowsingv4threatlistdescriptor


@dataclass_json
@dataclass
class GoogleSecuritySafebrowsingV4ListThreatListsResponse:
    threat_lists: Optional[List[googlesecuritysafebrowsingv4threatlistdescriptor.GoogleSecuritySafebrowsingV4ThreatListDescriptor]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'threatLists' }})
    
