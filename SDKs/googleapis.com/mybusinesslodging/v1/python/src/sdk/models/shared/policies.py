from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import timeofday
from . import timeofday
from . import paymentoptions

class PoliciesAllInclusiveAvailableExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class PoliciesAllInclusiveOnlyExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class PoliciesCheckinTimeExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class PoliciesCheckoutTimeExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class PoliciesKidsStayFreeExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class PoliciesMaxChildAgeExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class PoliciesMaxKidsStayFreeCountExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class PoliciesSmokeFreePropertyExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"


@dataclass_json
@dataclass
class Policies:
    all_inclusive_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allInclusiveAvailable' }})
    all_inclusive_available_exception: Optional[PoliciesAllInclusiveAvailableExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allInclusiveAvailableException' }})
    all_inclusive_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allInclusiveOnly' }})
    all_inclusive_only_exception: Optional[PoliciesAllInclusiveOnlyExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allInclusiveOnlyException' }})
    checkin_time: Optional[timeofday.TimeOfDay] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checkinTime' }})
    checkin_time_exception: Optional[PoliciesCheckinTimeExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checkinTimeException' }})
    checkout_time: Optional[timeofday.TimeOfDay] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checkoutTime' }})
    checkout_time_exception: Optional[PoliciesCheckoutTimeExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checkoutTimeException' }})
    kids_stay_free: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kidsStayFree' }})
    kids_stay_free_exception: Optional[PoliciesKidsStayFreeExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kidsStayFreeException' }})
    max_child_age: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxChildAge' }})
    max_child_age_exception: Optional[PoliciesMaxChildAgeExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxChildAgeException' }})
    max_kids_stay_free_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxKidsStayFreeCount' }})
    max_kids_stay_free_count_exception: Optional[PoliciesMaxKidsStayFreeCountExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxKidsStayFreeCountException' }})
    payment_options: Optional[paymentoptions.PaymentOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentOptions' }})
    smoke_free_property: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smokeFreeProperty' }})
    smoke_free_property_exception: Optional[PoliciesSmokeFreePropertyExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smokeFreePropertyException' }})
    
