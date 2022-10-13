from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googlecloudintegrationsv1alphamonitorexecutionstatsrequestmashquery

class GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestResponseTemplateEnum(str, Enum):
    DATA_FORMAT_UNSPECIFIED = "DATA_FORMAT_UNSPECIFIED"
    TABLE_CONFIG = "TABLE_CONFIG"
    APLOSE_SERIES_LIST_CONFIG = "APLOSE_SERIES_LIST_CONFIG"


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequest:
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    mash_query: Optional[googlecloudintegrationsv1alphamonitorexecutionstatsrequestmashquery.GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQuery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mashQuery' }})
    metric_field_table: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricFieldTable' }})
    output_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputPeriod' }})
    response_template: Optional[GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestResponseTemplateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseTemplate' }})
    
