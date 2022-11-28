from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkTrafficAnalysisPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum(str, Enum):
    HOST = "host"
    PORT = "port"
    IP_RANGE = "ipRange"


@dataclass_json
@dataclass
class UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class UpdateNetworkTrafficAnalysisRequestBodyModeEnum(str, Enum):
    DISABLED = "disabled"
    BASIC = "basic"
    DETAILED = "detailed"


@dataclass_json
@dataclass
class UpdateNetworkTrafficAnalysisRequestBody:
    custom_pie_chart_items: Optional[List[UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customPieChartItems') }})
    mode: Optional[UpdateNetworkTrafficAnalysisRequestBodyModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    

@dataclass
class UpdateNetworkTrafficAnalysisRequest:
    path_params: UpdateNetworkTrafficAnalysisPathParams = field()
    request: Optional[UpdateNetworkTrafficAnalysisRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkTrafficAnalysisResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_traffic_analysis_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
