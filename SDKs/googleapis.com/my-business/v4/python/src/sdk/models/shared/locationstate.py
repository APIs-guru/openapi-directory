from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LocationState:
    can_delete: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canDelete' }})
    can_have_food_menus: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canHaveFoodMenus' }})
    can_modify_service_list: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canModifyServiceList' }})
    can_operate_health_data: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canOperateHealthData' }})
    can_operate_lodging_data: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canOperateLodgingData' }})
    can_update: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canUpdate' }})
    has_pending_edits: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasPendingEdits' }})
    has_pending_verification: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasPendingVerification' }})
    is_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isDisabled' }})
    is_disconnected: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isDisconnected' }})
    is_duplicate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isDuplicate' }})
    is_google_updated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isGoogleUpdated' }})
    is_local_post_api_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isLocalPostApiDisabled' }})
    is_pending_review: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isPendingReview' }})
    is_published: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isPublished' }})
    is_suspended: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isSuspended' }})
    is_verified: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isVerified' }})
    needs_reverification: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'needsReverification' }})
    
