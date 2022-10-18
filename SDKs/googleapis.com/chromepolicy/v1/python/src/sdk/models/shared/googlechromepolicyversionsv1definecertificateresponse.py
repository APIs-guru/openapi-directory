from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlechromepolicyversionsv1networksetting


@dataclass_json
@dataclass
class GoogleChromePolicyVersionsV1DefineCertificateResponse:
    network_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkId' }})
    settings: Optional[List[googlechromepolicyversionsv1networksetting.GoogleChromePolicyVersionsV1NetworkSetting]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    target_resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetResource' }})
    
