from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import gpsdatagapfailuredetails
from . import imudatagapfailuredetails
from . import insufficientgpsfailuredetails
from . import notoutdoorsfailuredetails


@dataclass_json
@dataclass
class ProcessingFailureDetails:
    gps_data_gap_details: Optional[gpsdatagapfailuredetails.GpsDataGapFailureDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gpsDataGapDetails' }})
    imu_data_gap_details: Optional[imudatagapfailuredetails.ImuDataGapFailureDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imuDataGapDetails' }})
    insufficient_gps_details: Optional[insufficientgpsfailuredetails.InsufficientGpsFailureDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insufficientGpsDetails' }})
    not_outdoors_details: Optional[notoutdoorsfailuredetails.NotOutdoorsFailureDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notOutdoorsDetails' }})
    
