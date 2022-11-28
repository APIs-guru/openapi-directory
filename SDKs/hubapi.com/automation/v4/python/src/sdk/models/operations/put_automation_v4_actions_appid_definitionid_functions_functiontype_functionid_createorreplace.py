from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplaceFunctionTypeEnum(str, Enum):
    PRE_ACTION_EXECUTION = "PRE_ACTION_EXECUTION"
    PRE_FETCH_OPTIONS = "PRE_FETCH_OPTIONS"
    POST_FETCH_OPTIONS = "POST_FETCH_OPTIONS"


@dataclass
class PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplacePathParams:
    app_id: int = field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    definition_id: str = field(metadata={'path_param': { 'field_name': 'definitionId', 'style': 'simple', 'explode': False }})
    function_id: str = field(metadata={'path_param': { 'field_name': 'functionId', 'style': 'simple', 'explode': False }})
    function_type: PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplaceFunctionTypeEnum = field(metadata={'path_param': { 'field_name': 'functionType', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplaceSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplaceRequest:
    path_params: PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplacePathParams = field()
    request: str = field(metadata={'request': { 'media_type': 'text/plain' }})
    security: PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplaceSecurity = field()
    

@dataclass
class PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplaceResponse:
    content_type: str = field()
    status_code: int = field()
    action_function_identifier: Optional[shared.ActionFunctionIdentifier] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
