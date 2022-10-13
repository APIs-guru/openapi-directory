from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AccessDeniedPageSettings:
    access_denied_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessDeniedPageUri' }})
    generate_troubleshooting_uri: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'generateTroubleshootingUri' }})
    remediation_token_generation_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remediationTokenGenerationEnabled' }})
    
