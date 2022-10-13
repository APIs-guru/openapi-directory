from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2jobtrigger


@dataclass_json
@dataclass
class GooglePrivacyDlpV2CreateJobTriggerRequest:
    job_trigger: Optional[googleprivacydlpv2jobtrigger.GooglePrivacyDlpV2JobTrigger] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobTrigger' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationId' }})
    trigger_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerId' }})
    
