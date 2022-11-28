from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAutomationV4ActionsAppIDDefinitionIDGetByIDPathParams:
    app_id: int = field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    definition_id: str = field(metadata={'path_param': { 'field_name': 'definitionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAutomationV4ActionsAppIDDefinitionIDGetByIDQueryParams:
    archived: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'archived', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAutomationV4ActionsAppIDDefinitionIDGetByIDSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetAutomationV4ActionsAppIDDefinitionIDGetByIDRequest:
    path_params: GetAutomationV4ActionsAppIDDefinitionIDGetByIDPathParams = field()
    query_params: GetAutomationV4ActionsAppIDDefinitionIDGetByIDQueryParams = field()
    security: GetAutomationV4ActionsAppIDDefinitionIDGetByIDSecurity = field()
    

@dataclass
class GetAutomationV4ActionsAppIDDefinitionIDGetByIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    extension_action_definition: Optional[shared.ExtensionActionDefinition] = field(default=None)
    
