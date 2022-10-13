from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAutomationV4ActionsAppIDDefinitionIDFunctionsGetPagePathParams:
    app_id: int = field(default=None, metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    definition_id: str = field(default=None, metadata={'path_param': { 'field_name': 'definitionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAutomationV4ActionsAppIDDefinitionIDFunctionsGetPageSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetAutomationV4ActionsAppIDDefinitionIDFunctionsGetPageRequest:
    path_params: GetAutomationV4ActionsAppIDDefinitionIDFunctionsGetPagePathParams = field(default=None)
    security: GetAutomationV4ActionsAppIDDefinitionIDFunctionsGetPageSecurity = field(default=None)
    

@dataclass
class GetAutomationV4ActionsAppIDDefinitionIDFunctionsGetPageResponse:
    body: bytes = field(default=None)
    collection_response_action_function_identifier_no_paging: Optional[shared.CollectionResponseActionFunctionIdentifierNoPaging] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
