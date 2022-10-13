from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import biddingstrategy
from . import insertionorderbudget
from . import frequencycap
from . import integrationdetails
from . import pacing
from . import partnercost
from . import performancegoal

class InsertionOrderBillableOutcomeEnum(str, Enum):
    BILLABLE_OUTCOME_UNSPECIFIED = "BILLABLE_OUTCOME_UNSPECIFIED"
    BILLABLE_OUTCOME_PAY_PER_IMPRESSION = "BILLABLE_OUTCOME_PAY_PER_IMPRESSION"
    BILLABLE_OUTCOME_PAY_PER_CLICK = "BILLABLE_OUTCOME_PAY_PER_CLICK"
    BILLABLE_OUTCOME_PAY_PER_VIEWABLE_IMPRESSION = "BILLABLE_OUTCOME_PAY_PER_VIEWABLE_IMPRESSION"

class InsertionOrderEntityStatusEnum(str, Enum):
    ENTITY_STATUS_UNSPECIFIED = "ENTITY_STATUS_UNSPECIFIED"
    ENTITY_STATUS_ACTIVE = "ENTITY_STATUS_ACTIVE"
    ENTITY_STATUS_ARCHIVED = "ENTITY_STATUS_ARCHIVED"
    ENTITY_STATUS_DRAFT = "ENTITY_STATUS_DRAFT"
    ENTITY_STATUS_PAUSED = "ENTITY_STATUS_PAUSED"
    ENTITY_STATUS_SCHEDULED_FOR_DELETION = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"

class InsertionOrderInsertionOrderTypeEnum(str, Enum):
    INSERTION_ORDER_TYPE_UNSPECIFIED = "INSERTION_ORDER_TYPE_UNSPECIFIED"
    RTB = "RTB"
    OVER_THE_TOP = "OVER_THE_TOP"

class InsertionOrderReservationTypeEnum(str, Enum):
    RESERVATION_TYPE_UNSPECIFIED = "RESERVATION_TYPE_UNSPECIFIED"
    RESERVATION_TYPE_NOT_GUARANTEED = "RESERVATION_TYPE_NOT_GUARANTEED"
    RESERVATION_TYPE_PROGRAMMATIC_GUARANTEED = "RESERVATION_TYPE_PROGRAMMATIC_GUARANTEED"
    RESERVATION_TYPE_TAG_GUARANTEED = "RESERVATION_TYPE_TAG_GUARANTEED"


@dataclass_json
@dataclass
class InsertionOrder:
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserId' }})
    bid_strategy: Optional[biddingstrategy.BiddingStrategy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bidStrategy' }})
    billable_outcome: Optional[InsertionOrderBillableOutcomeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billableOutcome' }})
    budget: Optional[insertionorderbudget.InsertionOrderBudget] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'budget' }})
    campaign_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'campaignId' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    entity_status: Optional[InsertionOrderEntityStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityStatus' }})
    frequency_cap: Optional[frequencycap.FrequencyCap] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frequencyCap' }})
    insertion_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insertionOrderId' }})
    insertion_order_type: Optional[InsertionOrderInsertionOrderTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insertionOrderType' }})
    integration_details: Optional[integrationdetails.IntegrationDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integrationDetails' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pacing: Optional[pacing.Pacing] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pacing' }})
    partner_costs: Optional[List[partnercost.PartnerCost]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partnerCosts' }})
    performance_goal: Optional[performancegoal.PerformanceGoal] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'performanceGoal' }})
    reservation_type: Optional[InsertionOrderReservationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reservationType' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
