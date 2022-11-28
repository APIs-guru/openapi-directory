from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""DataSource
    Definition of a unique source of sensor data. Data sources can expose raw data coming from hardware sensors on local or companion devices. They can also expose derived data, created by transforming or merging other data sources. Multiple data sources can exist for the same data type. Every data point inserted into or read from this service has an associated data source. The data source contains enough information to uniquely identify its data, including the hardware device and the application that collected and/or transformed the data. It also holds useful metadata, such as the hardware and application versions, and the device type. Each data source produces a unique stream of data, with a unique identifier. Not all changes to data source affect the stream identifier, so that data collected by updated versions of the same application/device can still be considered to belong to the same data stream.
    """
    
    application: Optional[Application] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('application') }})
    data_quality_standard: Optional[List[DataSourceDataQualityStandardEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataQualityStandard') }})
    data_stream_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataStreamId') }})
    data_stream_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataStreamName') }})
    data_type: Optional[DataType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataType') }})
    device: Optional[Device] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[DataSourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
