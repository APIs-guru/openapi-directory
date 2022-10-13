from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlechromepolicyv1networksetting


@dataclass_json
@dataclass
class GoogleChromePolicyV1DefineCertificateResponse:
    network_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkId' }})
    settings: Optional[List[googlechromepolicyv1networksetting.GoogleChromePolicyV1NetworkSetting]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    target_resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetResource' }})
    
