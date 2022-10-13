from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class MeasurementPartnerWrappingDataLinkStatusEnum(str, Enum):
    MEASUREMENT_PARTNER_UNLINKED = "MEASUREMENT_PARTNER_UNLINKED"
    MEASUREMENT_PARTNER_LINKED = "MEASUREMENT_PARTNER_LINKED"
    MEASUREMENT_PARTNER_LINK_PENDING = "MEASUREMENT_PARTNER_LINK_PENDING"
    MEASUREMENT_PARTNER_LINK_FAILURE = "MEASUREMENT_PARTNER_LINK_FAILURE"
    MEASUREMENT_PARTNER_LINK_OPT_OUT = "MEASUREMENT_PARTNER_LINK_OPT_OUT"
    MEASUREMENT_PARTNER_LINK_OPT_OUT_PENDING = "MEASUREMENT_PARTNER_LINK_OPT_OUT_PENDING"
    MEASUREMENT_PARTNER_LINK_WRAPPING_PENDING = "MEASUREMENT_PARTNER_LINK_WRAPPING_PENDING"
    MEASUREMENT_PARTNER_MODE_CHANGE_PENDING = "MEASUREMENT_PARTNER_MODE_CHANGE_PENDING"

class MeasurementPartnerWrappingDataMeasurementPartnerEnum(str, Enum):
    NONE = "NONE"
    INTEGRAL_AD_SCIENCE = "INTEGRAL_AD_SCIENCE"
    DOUBLE_VERIFY = "DOUBLE_VERIFY"

class MeasurementPartnerWrappingDataTagWrappingModeEnum(str, Enum):
    NONE = "NONE"
    BLOCKING = "BLOCKING"
    MONITORING = "MONITORING"
    MONITORING_ONLY = "MONITORING_ONLY"
    VIDEO_PIXEL_MONITORING = "VIDEO_PIXEL_MONITORING"
    TRACKING = "TRACKING"
    VPAID_MONITORING = "VPAID_MONITORING"
    VPAID_BLOCKING = "VPAID_BLOCKING"
    NON_VPAID_MONITORING = "NON_VPAID_MONITORING"
    VPAID_ONLY_MONITORING = "VPAID_ONLY_MONITORING"
    VPAID_ONLY_BLOCKING = "VPAID_ONLY_BLOCKING"
    VPAID_ONLY_FILTERING = "VPAID_ONLY_FILTERING"
    VPAID_FILTERING = "VPAID_FILTERING"
    NON_VPAID_FILTERING = "NON_VPAID_FILTERING"


@dataclass_json
@dataclass
class MeasurementPartnerWrappingData:
    link_status: Optional[MeasurementPartnerWrappingDataLinkStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkStatus' }})
    measurement_partner: Optional[MeasurementPartnerWrappingDataMeasurementPartnerEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'measurementPartner' }})
    tag_wrapping_mode: Optional[MeasurementPartnerWrappingDataTagWrappingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagWrappingMode' }})
    wrapped_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wrappedTag' }})
    
