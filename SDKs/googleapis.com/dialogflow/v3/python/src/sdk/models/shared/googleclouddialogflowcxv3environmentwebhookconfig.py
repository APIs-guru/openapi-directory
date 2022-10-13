from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3webhook


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3EnvironmentWebhookConfig:
    webhook_overrides: Optional[List[googleclouddialogflowcxv3webhook.GoogleCloudDialogflowCxV3Webhook]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhookOverrides' }})
    
