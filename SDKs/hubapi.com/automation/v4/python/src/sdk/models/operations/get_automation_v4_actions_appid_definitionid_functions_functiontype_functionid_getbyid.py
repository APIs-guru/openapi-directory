from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDGetByIDFunctionTypeEnum(str, Enum):
    PRE_ACTION_EXECUTION = "PRE_ACTION_EXECUTION"
    PRE_FETCH_OPTIONS = "PRE_FETCH_OPTIONS"
    POST_FETCH_OPTIONS = "POST_FETCH_OPTIONS"


@dataclass
class GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDGetByIDPathParams:
    app_id: int = field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    definition_id: str = field(metadata={'path_param': { 'field_name': 'definitionId', 'style': 'simple', 'explode': False }})
    function_id: str = field(metadata={'path_param': { 'field_name': 'functionId', 'style': 'simple', 'explode': False }})
    function_type: GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDGetByIDFunctionTypeEnum = field(metadata={'path_param': { 'field_name': 'functionType', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDGetByIDSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDGetByIDRequest:
    path_params: GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDGetByIDPathParams = field()
    security: GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDGetByIDSecurity = field()
    

@dataclass
class GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDGetByIDResponse:
    content_type: str = field()
    status_code: int = field()
    action_function: Optional[shared.ActionFunction] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
