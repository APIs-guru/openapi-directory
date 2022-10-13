from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1webhook


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig:
    webhook_overrides: Optional[List[googleclouddialogflowcxv3beta1webhook.GoogleCloudDialogflowCxV3beta1Webhook]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhookOverrides' }})
    
