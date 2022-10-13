from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1webhookgenericwebservice


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig:
    generic_web_service: Optional[googleclouddialogflowcxv3beta1webhookgenericwebservice.GoogleCloudDialogflowCxV3beta1WebhookGenericWebService] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'genericWebService' }})
    service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service' }})
    
