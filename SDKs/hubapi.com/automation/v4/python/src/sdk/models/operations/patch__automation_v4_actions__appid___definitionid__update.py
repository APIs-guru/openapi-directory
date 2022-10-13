from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchAutomationV4ActionsAppIDDefinitionIDUpdatePathParams:
    app_id: int = field(default=None, metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    definition_id: str = field(default=None, metadata={'path_param': { 'field_name': 'definitionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchAutomationV4ActionsAppIDDefinitionIDUpdateSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class PatchAutomationV4ActionsAppIDDefinitionIDUpdateRequest:
    path_params: PatchAutomationV4ActionsAppIDDefinitionIDUpdatePathParams = field(default=None)
    request: shared.ExtensionActionDefinitionPatch = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PatchAutomationV4ActionsAppIDDefinitionIDUpdateSecurity = field(default=None)
    

@dataclass
class PatchAutomationV4ActionsAppIDDefinitionIDUpdateResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    extension_action_definition: Optional[shared.ExtensionActionDefinition] = field(default=None)
    status_code: int = field(default=None)
    
