from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostAutomationV4ActionsAppIDCreatePathParams:
    app_id: int = field(default=None, metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAutomationV4ActionsAppIDCreateSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class PostAutomationV4ActionsAppIDCreateRequest:
    path_params: PostAutomationV4ActionsAppIDCreatePathParams = field(default=None)
    request: shared.ExtensionActionDefinitionInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostAutomationV4ActionsAppIDCreateSecurity = field(default=None)
    

@dataclass
class PostAutomationV4ActionsAppIDCreateResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    extension_action_definition: Optional[shared.ExtensionActionDefinition] = field(default=None)
    status_code: int = field(default=None)
    
