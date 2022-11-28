from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostAutomationV4ActionsAppIDCreatePathParams:
    app_id: int = field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAutomationV4ActionsAppIDCreateSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class PostAutomationV4ActionsAppIDCreateRequest:
    path_params: PostAutomationV4ActionsAppIDCreatePathParams = field()
    request: shared.ExtensionActionDefinitionInput = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostAutomationV4ActionsAppIDCreateSecurity = field()
    

@dataclass
class PostAutomationV4ActionsAppIDCreateResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    extension_action_definition: Optional[shared.ExtensionActionDefinition] = field(default=None)
    
