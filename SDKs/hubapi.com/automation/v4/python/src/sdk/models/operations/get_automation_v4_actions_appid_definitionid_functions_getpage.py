from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAutomationV4ActionsAppIDDefinitionIDFunctionsGetPagePathParams:
    app_id: int = field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    definition_id: str = field(metadata={'path_param': { 'field_name': 'definitionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAutomationV4ActionsAppIDDefinitionIDFunctionsGetPageSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetAutomationV4ActionsAppIDDefinitionIDFunctionsGetPageRequest:
    path_params: GetAutomationV4ActionsAppIDDefinitionIDFunctionsGetPagePathParams = field()
    security: GetAutomationV4ActionsAppIDDefinitionIDFunctionsGetPageSecurity = field()
    

@dataclass
class GetAutomationV4ActionsAppIDDefinitionIDFunctionsGetPageResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    collection_response_action_function_identifier_no_paging: Optional[shared.CollectionResponseActionFunctionIdentifierNoPaging] = field(default=None)
    
