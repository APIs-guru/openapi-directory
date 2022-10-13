from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkTrafficAnalysisPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum(str, Enum):
    HOST = "host"
    PORT = "port"
    IP_RANGE = "ipRange"


@dataclass_json
@dataclass
class UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
class UpdateNetworkTrafficAnalysisRequestBodyModeEnum(str, Enum):
    DISABLED = "disabled"
    BASIC = "basic"
    DETAILED = "detailed"


@dataclass_json
@dataclass
class UpdateNetworkTrafficAnalysisRequestBody:
    custom_pie_chart_items: Optional[List[UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customPieChartItems' }})
    mode: Optional[UpdateNetworkTrafficAnalysisRequestBodyModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    

@dataclass
class UpdateNetworkTrafficAnalysisRequest:
    path_params: UpdateNetworkTrafficAnalysisPathParams = field(default=None)
    request: Optional[UpdateNetworkTrafficAnalysisRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkTrafficAnalysisResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_traffic_analysis_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
