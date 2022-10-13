from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AdvertiserCreativeConfig:
    dynamic_creative_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dynamicCreativeEnabled' }})
    ias_client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iasClientId' }})
    oba_compliance_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'obaComplianceDisabled' }})
    video_creative_data_sharing_authorized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoCreativeDataSharingAuthorized' }})
    
