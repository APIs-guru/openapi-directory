from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleAdsHomeservicesLocalservicesV1PhoneLead:
    charged_call_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chargedCallTimestamp' }})
    charged_connected_call_duration_seconds: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chargedConnectedCallDurationSeconds' }})
    consumer_phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumerPhoneNumber' }})
    
