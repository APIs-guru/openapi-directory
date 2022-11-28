from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Metadata:
    r"""Metadata
    Additional non-user-editable information about the location.
    """
    
    can_delete: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canDelete') }})
    can_have_business_calls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canHaveBusinessCalls') }})
    can_have_food_menus: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canHaveFoodMenus') }})
    can_modify_service_list: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canModifyServiceList') }})
    can_operate_health_data: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canOperateHealthData') }})
    can_operate_local_post: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canOperateLocalPost') }})
    can_operate_lodging_data: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canOperateLodgingData') }})
    duplicate_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duplicateLocation') }})
    has_google_updated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasGoogleUpdated') }})
    has_pending_edits: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasPendingEdits') }})
    has_voice_of_merchant: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasVoiceOfMerchant') }})
    maps_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mapsUri') }})
    new_review_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newReviewUri') }})
    place_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placeId') }})
    
