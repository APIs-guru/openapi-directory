from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAutomationV4ActionsAppIDDefinitionIDGetByIDPathParams:
    app_id: int = field(default=None, metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    definition_id: str = field(default=None, metadata={'path_param': { 'field_name': 'definitionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAutomationV4ActionsAppIDDefinitionIDGetByIDQueryParams:
    archived: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'archived', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAutomationV4ActionsAppIDDefinitionIDGetByIDSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetAutomationV4ActionsAppIDDefinitionIDGetByIDRequest:
    path_params: GetAutomationV4ActionsAppIDDefinitionIDGetByIDPathParams = field(default=None)
    query_params: GetAutomationV4ActionsAppIDDefinitionIDGetByIDQueryParams = field(default=None)
    security: GetAutomationV4ActionsAppIDDefinitionIDGetByIDSecurity = field(default=None)
    

@dataclass
class GetAutomationV4ActionsAppIDDefinitionIDGetByIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    extension_action_definition: Optional[shared.ExtensionActionDefinition] = field(default=None)
    status_code: int = field(default=None)
    
