from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmfrontendseventbusprotoeventexecutioninfo
from . import googlecloudintegrationsv1alphaexecution


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaListExecutionsResponse:
    execution_infos: Optional[List[enterprisecrmfrontendseventbusprotoeventexecutioninfo.EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionInfos' }})
    executions: Optional[List[googlecloudintegrationsv1alphaexecution.GoogleCloudIntegrationsV1alphaExecution]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executions' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
