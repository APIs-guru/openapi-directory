from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import application
from . import datatype
from . import device

class DataSourceDataQualityStandardEnum(str, Enum):
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

class DataSourceTypeEnum(str, Enum):
    RAW = "raw"
    DERIVED = "derived"


@dataclass_json
@dataclass
class DataSource:
    application: Optional[application.Application] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'application' }})
    data_quality_standard: Optional[List[DataSourceDataQualityStandardEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataQualityStandard' }})
    data_stream_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataStreamId' }})
    data_stream_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataStreamName' }})
    data_type: Optional[datatype.DataType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataType' }})
    device: Optional[device.Device] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: Optional[DataSourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
