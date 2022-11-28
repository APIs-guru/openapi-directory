from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum(str, Enum):
    CUSTOM_BIDDING_ALGORITHM_TYPE_UNSPECIFIED = "CUSTOM_BIDDING_ALGORITHM_TYPE_UNSPECIFIED"
    SCRIPT_BASED = "SCRIPT_BASED"
    ADS_DATA_HUB_BASED = "ADS_DATA_HUB_BASED"
    GOAL_BUILDER_BASED = "GOAL_BUILDER_BASED"

class CustomBiddingAlgorithmEntityStatusEnum(str, Enum):
    ENTITY_STATUS_UNSPECIFIED = "ENTITY_STATUS_UNSPECIFIED"
    ENTITY_STATUS_ACTIVE = "ENTITY_STATUS_ACTIVE"
    ENTITY_STATUS_ARCHIVED = "ENTITY_STATUS_ARCHIVED"
    ENTITY_STATUS_DRAFT = "ENTITY_STATUS_DRAFT"
    ENTITY_STATUS_PAUSED = "ENTITY_STATUS_PAUSED"
    ENTITY_STATUS_SCHEDULED_FOR_DELETION = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"


@dataclass_json
@dataclass
class CustomBiddingAlgorithmInput:
    r"""CustomBiddingAlgorithmInput
    A single custom bidding algorithm.
    """
    
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    custom_bidding_algorithm_type: Optional[CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customBiddingAlgorithmType') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    entity_status: Optional[CustomBiddingAlgorithmEntityStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityStatus') }})
    partner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partnerId') }})
    shared_advertiser_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sharedAdvertiserIds') }})
    

@dataclass_json
@dataclass
class CustomBiddingAlgorithm:
    r"""CustomBiddingAlgorithm
    A single custom bidding algorithm.
    """
    
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    custom_bidding_algorithm_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customBiddingAlgorithmId') }})
    custom_bidding_algorithm_type: Optional[CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customBiddingAlgorithmType') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    entity_status: Optional[CustomBiddingAlgorithmEntityStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityStatus') }})
    model_details: Optional[List[CustomBiddingModelDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelDetails') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    partner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partnerId') }})
    shared_advertiser_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sharedAdvertiserIds') }})
    
