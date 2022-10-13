from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import googlecloudintegrationsv1alphamonitorexecutionstatsrequestmashqueryoperationmodeunionconfig

class GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationModeOperationTypeEnum(str, Enum):
    OPERATION_TYPE_UNSPECIFIED = "OPERATION_TYPE_UNSPECIFIED"
    UNION = "UNION"
    JOIN = "JOIN"


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationMode:
    join_config: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'joinConfig' }})
    operation_type: Optional[GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationModeOperationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationType' }})
    union_config: Optional[googlecloudintegrationsv1alphamonitorexecutionstatsrequestmashqueryoperationmodeunionconfig.GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationModeUnionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unionConfig' }})
    
