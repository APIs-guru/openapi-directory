from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PartnerRevenueModelMarkupTypeEnum(str, Enum):
    PARTNER_REVENUE_MODEL_MARKUP_TYPE_UNSPECIFIED = "PARTNER_REVENUE_MODEL_MARKUP_TYPE_UNSPECIFIED"
    PARTNER_REVENUE_MODEL_MARKUP_TYPE_CPM = "PARTNER_REVENUE_MODEL_MARKUP_TYPE_CPM"
    PARTNER_REVENUE_MODEL_MARKUP_TYPE_MEDIA_COST_MARKUP = "PARTNER_REVENUE_MODEL_MARKUP_TYPE_MEDIA_COST_MARKUP"
    PARTNER_REVENUE_MODEL_MARKUP_TYPE_TOTAL_MEDIA_COST_MARKUP = "PARTNER_REVENUE_MODEL_MARKUP_TYPE_TOTAL_MEDIA_COST_MARKUP"


@dataclass_json
@dataclass
class PartnerRevenueModel:
    markup_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'markupAmount' }})
    markup_type: Optional[PartnerRevenueModelMarkupTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'markupType' }})
    
