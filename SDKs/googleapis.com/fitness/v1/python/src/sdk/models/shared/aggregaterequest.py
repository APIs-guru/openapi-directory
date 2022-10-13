from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import aggregateby
from . import bucketbyactivity
from . import bucketbyactivity
from . import bucketbysession
from . import bucketbytime

class AggregateRequestFilteredDataQualityStandardEnum(str, Enum):
    DATA_QUALITY_UNKNOWN = "dataQualityUnknown"
    DATA_QUALITY_BLOOD_PRESSURE_ESH2002 = "dataQualityBloodPressureEsh2002"
    DATA_QUALITY_BLOOD_PRESSURE_ESH2010 = "dataQualityBloodPressureEsh2010"
    DATA_QUALITY_BLOOD_PRESSURE_AAMI = "dataQualityBloodPressureAami"
    DATA_QUALITY_BLOOD_PRESSURE_BHS_AA = "dataQualityBloodPressureBhsAA"
    DATA_QUALITY_BLOOD_PRESSURE_BHS_AB = "dataQualityBloodPressureBhsAB"
    DATA_QUALITY_BLOOD_PRESSURE_BHS_BA = "dataQualityBloodPressureBhsBA"
    DATA_QUALITY_BLOOD_PRESSURE_BHS_BB = "dataQualityBloodPressureBhsBB"
    DATA_QUALITY_BLOOD_GLUCOSE_ISO151972003 = "dataQualityBloodGlucoseIso151972003"
    DATA_QUALITY_BLOOD_GLUCOSE_ISO151972013 = "dataQualityBloodGlucoseIso151972013"


@dataclass_json
@dataclass
class AggregateRequest:
    aggregate_by: Optional[List[aggregateby.AggregateBy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aggregateBy' }})
    bucket_by_activity_segment: Optional[bucketbyactivity.BucketByActivity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketByActivitySegment' }})
    bucket_by_activity_type: Optional[bucketbyactivity.BucketByActivity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketByActivityType' }})
    bucket_by_session: Optional[bucketbysession.BucketBySession] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketBySession' }})
    bucket_by_time: Optional[bucketbytime.BucketByTime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketByTime' }})
    end_time_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTimeMillis' }})
    filtered_data_quality_standard: Optional[List[AggregateRequestFilteredDataQualityStandardEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filteredDataQualityStandard' }})
    start_time_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTimeMillis' }})
    
