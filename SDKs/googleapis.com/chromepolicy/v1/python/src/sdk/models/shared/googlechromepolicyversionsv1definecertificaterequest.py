from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlechromepolicyversionsv1networksetting


@dataclass_json
@dataclass
class GoogleChromePolicyVersionsV1DefineCertificateRequest:
    ceritificate_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ceritificateName' }})
    certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificate' }})
    settings: Optional[List[googlechromepolicyversionsv1networksetting.GoogleChromePolicyVersionsV1NetworkSetting]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    target_resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetResource' }})
    
