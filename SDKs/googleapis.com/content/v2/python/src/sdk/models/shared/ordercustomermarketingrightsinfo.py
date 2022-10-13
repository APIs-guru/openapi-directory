from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OrderCustomerMarketingRightsInfo:
    explicit_marketing_preference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'explicitMarketingPreference' }})
    last_updated_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedTimestamp' }})
    marketing_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marketingEmailAddress' }})
    
