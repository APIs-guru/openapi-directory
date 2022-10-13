from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import lastmodifiedinfo

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
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserId' }})
    audience_age_group: Optional[ProjectAudienceAgeGroupEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audienceAgeGroup' }})
    audience_gender: Optional[ProjectAudienceGenderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audienceGender' }})
    budget: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'budget' }})
    client_billing_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientBillingCode' }})
    client_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientName' }})
    end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    last_modified_info: Optional[lastmodifiedinfo.LastModifiedInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedInfo' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    overview: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overview' }})
    start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    subaccount_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subaccountId' }})
    target_clicks: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetClicks' }})
    target_conversions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetConversions' }})
    target_cpa_nanos: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetCpaNanos' }})
    target_cpc_nanos: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetCpcNanos' }})
    target_cpm_active_view_nanos: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetCpmActiveViewNanos' }})
    target_cpm_nanos: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetCpmNanos' }})
    target_impressions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetImpressions' }})
    
