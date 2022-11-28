from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Conversion:
    r"""Conversion
    A Conversion represents when a user successfully performs a desired action after seeing an ad.
    """
    
    child_directed_treatment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('childDirectedTreatment') }})
    custom_variables: Optional[List[CustomFloodlightVariable]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customVariables') }})
    dclid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dclid') }})
    encrypted_user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptedUserId') }})
    encrypted_user_id_candidates: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptedUserIdCandidates') }})
    floodlight_activity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floodlightActivityId') }})
    floodlight_configuration_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floodlightConfigurationId') }})
    gclid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gclid') }})
    impression_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('impressionId') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    limit_ad_tracking: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitAdTracking') }})
    match_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchId') }})
    mobile_device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileDeviceId') }})
    non_personalized_ad: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonPersonalizedAd') }})
    ordinal: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ordinal') }})
    quantity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    timestamp_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestampMicros') }})
    treatment_for_underage: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('treatmentForUnderage') }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
