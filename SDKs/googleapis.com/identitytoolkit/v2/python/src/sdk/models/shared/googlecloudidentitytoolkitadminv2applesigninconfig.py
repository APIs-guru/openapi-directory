from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudidentitytoolkitadminv2codeflowconfig


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig:
    bundle_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bundleIds' }})
    code_flow_config: Optional[googlecloudidentitytoolkitadminv2codeflowconfig.GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'codeFlowConfig' }})
    
