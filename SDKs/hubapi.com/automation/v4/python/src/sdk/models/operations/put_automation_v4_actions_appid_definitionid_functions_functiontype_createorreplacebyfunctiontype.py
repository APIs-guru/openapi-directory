from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeCreateOrReplaceByFunctionTypeFunctionTypeEnum(str, Enum):
    PRE_ACTION_EXECUTION = "PRE_ACTION_EXECUTION"
    PRE_FETCH_OPTIONS = "PRE_FETCH_OPTIONS"
    POST_FETCH_OPTIONS = "POST_FETCH_OPTIONS"


@dataclass
class PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeCreateOrReplaceByFunctionTypePathParams:
    app_id: int = field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    definition_id: str = field(metadata={'path_param': { 'field_name': 'definitionId', 'style': 'simple', 'explode': False }})
    function_type: PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeCreateOrReplaceByFunctionTypeFunctionTypeEnum = field(metadata={'path_param': { 'field_name': 'functionType', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeCreateOrReplaceByFunctionTypeSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeCreateOrReplaceByFunctionTypeRequest:
    path_params: PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeCreateOrReplaceByFunctionTypePathParams = field()
    request: str = field(metadata={'request': { 'media_type': 'text/plain' }})
    security: PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeCreateOrReplaceByFunctionTypeSecurity = field()
    

@dataclass
class PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeCreateOrReplaceByFunctionTypeResponse:
    content_type: str = field()
    status_code: int = field()
    action_function_identifier: Optional[shared.ActionFunctionIdentifier] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
