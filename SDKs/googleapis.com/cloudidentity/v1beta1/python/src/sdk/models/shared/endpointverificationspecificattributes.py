from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import certificateattributes


@dataclass_json
@dataclass
class EndpointVerificationSpecificAttributes:
    certificate_attributes: Optional[List[certificateattributes.CertificateAttributes]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateAttributes' }})
    
