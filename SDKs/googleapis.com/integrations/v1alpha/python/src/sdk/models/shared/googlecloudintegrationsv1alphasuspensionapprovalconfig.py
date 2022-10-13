from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudintegrationsv1alphasuspensionapprovalexpiration


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig:
    custom_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customMessage' }})
    email_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailAddresses' }})
    expiration: Optional[googlecloudintegrationsv1alphasuspensionapprovalexpiration.GoogleCloudIntegrationsV1alphaSuspensionApprovalExpiration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiration' }})
    
