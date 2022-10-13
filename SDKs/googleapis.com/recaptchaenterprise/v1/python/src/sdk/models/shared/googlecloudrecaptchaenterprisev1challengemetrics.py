from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudRecaptchaenterpriseV1ChallengeMetrics:
    failed_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failedCount' }})
    nocaptcha_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nocaptchaCount' }})
    pageload_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageloadCount' }})
    passed_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passedCount' }})
    
