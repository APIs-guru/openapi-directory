from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AccessDeniedPageSettings:
    r"""AccessDeniedPageSettings
    Custom content configuration for access denied page. IAP allows customers to define a custom URI to use as the error page when access is denied to users. If IAP prevents access to this page, the default IAP error page will be displayed instead.
    """
    
    access_denied_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessDeniedPageUri') }})
    generate_troubleshooting_uri: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('generateTroubleshootingUri') }})
    remediation_token_generation_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remediationTokenGenerationEnabled') }})
    
