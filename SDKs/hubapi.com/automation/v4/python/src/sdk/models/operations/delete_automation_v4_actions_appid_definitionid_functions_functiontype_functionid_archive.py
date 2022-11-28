from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDArchiveFunctionTypeEnum(str, Enum):
    PRE_ACTION_EXECUTION = "PRE_ACTION_EXECUTION"
    PRE_FETCH_OPTIONS = "PRE_FETCH_OPTIONS"
    POST_FETCH_OPTIONS = "POST_FETCH_OPTIONS"


@dataclass
class DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDArchivePathParams:
    app_id: int = field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    definition_id: str = field(metadata={'path_param': { 'field_name': 'definitionId', 'style': 'simple', 'explode': False }})
    function_id: str = field(metadata={'path_param': { 'field_name': 'functionId', 'style': 'simple', 'explode': False }})
    function_type: DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDArchiveFunctionTypeEnum = field(metadata={'path_param': { 'field_name': 'functionType', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDArchiveSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDArchiveRequest:
    path_params: DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDArchivePathParams = field()
    security: DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDArchiveSecurity = field()
    

@dataclass
class DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDArchiveResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
