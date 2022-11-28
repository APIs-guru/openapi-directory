from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionTypeFunctionTypeEnum(str, Enum):
    PRE_ACTION_EXECUTION = "PRE_ACTION_EXECUTION"
    PRE_FETCH_OPTIONS = "PRE_FETCH_OPTIONS"
    POST_FETCH_OPTIONS = "POST_FETCH_OPTIONS"


@dataclass
class DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionTypePathParams:
    app_id: int = field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    definition_id: str = field(metadata={'path_param': { 'field_name': 'definitionId', 'style': 'simple', 'explode': False }})
    function_type: DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionTypeFunctionTypeEnum = field(metadata={'path_param': { 'field_name': 'functionType', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionTypeSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionTypeRequest:
    path_params: DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionTypePathParams = field()
    security: DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionTypeSecurity = field()
    

@dataclass
class DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionTypeResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
