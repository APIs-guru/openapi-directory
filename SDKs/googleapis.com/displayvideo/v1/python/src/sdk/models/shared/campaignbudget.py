from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import daterange
from . import prismaconfig

class CampaignBudgetBudgetUnitEnum(str, Enum):
    BUDGET_UNIT_UNSPECIFIED = "BUDGET_UNIT_UNSPECIFIED"
    BUDGET_UNIT_CURRENCY = "BUDGET_UNIT_CURRENCY"
    BUDGET_UNIT_IMPRESSIONS = "BUDGET_UNIT_IMPRESSIONS"

class CampaignBudgetExternalBudgetSourceEnum(str, Enum):
    EXTERNAL_BUDGET_SOURCE_UNSPECIFIED = "EXTERNAL_BUDGET_SOURCE_UNSPECIFIED"
    EXTERNAL_BUDGET_SOURCE_NONE = "EXTERNAL_BUDGET_SOURCE_NONE"
    EXTERNAL_BUDGET_SOURCE_MEDIA_OCEAN = "EXTERNAL_BUDGET_SOURCE_MEDIA_OCEAN"


@dataclass_json
@dataclass
class CampaignBudget:
    budget_amount_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'budgetAmountMicros' }})
    budget_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'budgetId' }})
    budget_unit: Optional[CampaignBudgetBudgetUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'budgetUnit' }})
    date_range: Optional[daterange.DateRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateRange' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    external_budget_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalBudgetId' }})
    external_budget_source: Optional[CampaignBudgetExternalBudgetSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalBudgetSource' }})
    invoice_grouping_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invoiceGroupingId' }})
    prisma_config: Optional[prismaconfig.PrismaConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prismaConfig' }})
    
