from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ProjectAudienceAgeGroupEnum(str, Enum):
    PLANNING_AUDIENCE_AGE_18_24 = "PLANNING_AUDIENCE_AGE_18_24"
    PLANNING_AUDIENCE_AGE_25_34 = "PLANNING_AUDIENCE_AGE_25_34"
    PLANNING_AUDIENCE_AGE_35_44 = "PLANNING_AUDIENCE_AGE_35_44"
    PLANNING_AUDIENCE_AGE_45_54 = "PLANNING_AUDIENCE_AGE_45_54"
    PLANNING_AUDIENCE_AGE_55_64 = "PLANNING_AUDIENCE_AGE_55_64"
    PLANNING_AUDIENCE_AGE_65_OR_MORE = "PLANNING_AUDIENCE_AGE_65_OR_MORE"
    PLANNING_AUDIENCE_AGE_UNKNOWN = "PLANNING_AUDIENCE_AGE_UNKNOWN"

class ProjectAudienceGenderEnum(str, Enum):
    PLANNING_AUDIENCE_GENDER_MALE = "PLANNING_AUDIENCE_GENDER_MALE"
    PLANNING_AUDIENCE_GENDER_FEMALE = "PLANNING_AUDIENCE_GENDER_FEMALE"


@dataclass_json
@dataclass
class Project:
    r"""Project
    Contains properties of a Planning project.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    audience_age_group: Optional[ProjectAudienceAgeGroupEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audienceAgeGroup') }})
    audience_gender: Optional[ProjectAudienceGenderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audienceGender') }})
    budget: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('budget') }})
    client_billing_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientBillingCode') }})
    client_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientName') }})
    end_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    last_modified_info: Optional[LastModifiedInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedInfo') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    overview: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overview') }})
    start_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    subaccount_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subaccountId') }})
    target_clicks: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetClicks') }})
    target_conversions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetConversions') }})
    target_cpa_nanos: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetCpaNanos') }})
    target_cpc_nanos: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetCpcNanos') }})
    target_cpm_active_view_nanos: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetCpmActiveViewNanos') }})
    target_cpm_nanos: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetCpmNanos') }})
    target_impressions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetImpressions') }})
    
