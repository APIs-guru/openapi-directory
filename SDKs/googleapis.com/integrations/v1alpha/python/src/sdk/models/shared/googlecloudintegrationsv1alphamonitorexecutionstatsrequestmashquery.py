from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudintegrationsv1alphamonitorexecutionstatsrequestmashquerycomponent
from . import googlecloudintegrationsv1alphamonitorexecutionstatsrequestmashqueryoperationmode
from . import googlecloudintegrationsv1alphamonitorexecutionstatsrequestmashquerycomponent


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQuery:
    first_query: Optional[googlecloudintegrationsv1alphamonitorexecutionstatsrequestmashquerycomponent.GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstQuery' }})
    operation_mode: Optional[googlecloudintegrationsv1alphamonitorexecutionstatsrequestmashqueryoperationmode.GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationMode] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationMode' }})
    second_query: Optional[googlecloudintegrationsv1alphamonitorexecutionstatsrequestmashquerycomponent.GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondQuery' }})
    
