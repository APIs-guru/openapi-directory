from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GooglePlayAnalytics:
    gclid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gclid' }})
    utm_campaign: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'utmCampaign' }})
    utm_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'utmContent' }})
    utm_medium: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'utmMedium' }})
    utm_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'utmSource' }})
    utm_term: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'utmTerm' }})
    
