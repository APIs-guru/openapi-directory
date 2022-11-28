from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionTypeFunctionTypeEnum(str, Enum):
    PRE_ACTION_EXECUTION = "PRE_ACTION_EXECUTION"
    PRE_FETCH_OPTIONS = "PRE_FETCH_OPTIONS"
    POST_FETCH_OPTIONS = "POST_FETCH_OPTIONS"


@dataclass
class GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionTypePathParams:
    app_id: int = field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    definition_id: str = field(metadata={'path_param': { 'field_name': 'definitionId', 'style': 'simple', 'explode': False }})
    function_type: GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionTypeFunctionTypeEnum = field(metadata={'path_param': { 'field_name': 'functionType', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionTypeSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionTypeRequest:
    path_params: GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionTypePathParams = field()
    security: GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionTypeSecurity = field()
    

@dataclass
class GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionTypeResponse:
    content_type: str = field()
    status_code: int = field()
    action_function: Optional[shared.ActionFunction] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
