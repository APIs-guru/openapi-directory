from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationModeOperationTypeEnum(str, Enum):
    OPERATION_TYPE_UNSPECIFIED = "OPERATION_TYPE_UNSPECIFIED"
    UNION = "UNION"
    JOIN = "JOIN"


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationMode:
    r"""GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationMode
    Operation between 2 query
    """
    
    join_config: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('joinConfig') }})
    operation_type: Optional[GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationModeOperationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationType') }})
    union_config: Optional[GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationModeUnionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unionConfig') }})
    
