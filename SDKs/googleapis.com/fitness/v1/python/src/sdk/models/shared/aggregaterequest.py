from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""AggregateRequest
    Next id: 10
    """
    
    aggregate_by: Optional[List[AggregateBy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregateBy') }})
    bucket_by_activity_segment: Optional[BucketByActivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketByActivitySegment') }})
    bucket_by_activity_type: Optional[BucketByActivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketByActivityType') }})
    bucket_by_session: Optional[BucketBySession] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketBySession') }})
    bucket_by_time: Optional[BucketByTime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketByTime') }})
    end_time_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTimeMillis') }})
    filtered_data_quality_standard: Optional[List[AggregateRequestFilteredDataQualityStandardEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filteredDataQualityStandard') }})
    start_time_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTimeMillis') }})
    
