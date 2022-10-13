from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1webhookgenericwebservice
from . import googleclouddialogflowcxv3beta1webhookservicedirectoryconfig


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1Webhook:
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabled' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    generic_web_service: Optional[googleclouddialogflowcxv3beta1webhookgenericwebservice.GoogleCloudDialogflowCxV3beta1WebhookGenericWebService] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'genericWebService' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    service_directory: Optional[googleclouddialogflowcxv3beta1webhookservicedirectoryconfig.GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceDirectory' }})
    timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout' }})
    
