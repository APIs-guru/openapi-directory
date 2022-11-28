from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PartnerRevenueModelMarkupTypeEnum(str, Enum):
    PARTNER_REVENUE_MODEL_MARKUP_TYPE_UNSPECIFIED = "PARTNER_REVENUE_MODEL_MARKUP_TYPE_UNSPECIFIED"
    PARTNER_REVENUE_MODEL_MARKUP_TYPE_CPM = "PARTNER_REVENUE_MODEL_MARKUP_TYPE_CPM"
    PARTNER_REVENUE_MODEL_MARKUP_TYPE_MEDIA_COST_MARKUP = "PARTNER_REVENUE_MODEL_MARKUP_TYPE_MEDIA_COST_MARKUP"
    PARTNER_REVENUE_MODEL_MARKUP_TYPE_TOTAL_MEDIA_COST_MARKUP = "PARTNER_REVENUE_MODEL_MARKUP_TYPE_TOTAL_MEDIA_COST_MARKUP"


@dataclass_json
@dataclass
class PartnerRevenueModel:
    r"""PartnerRevenueModel
    Settings that control how partner revenue is calculated.
    """
    
    markup_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('markupAmount') }})
    markup_type: Optional[PartnerRevenueModelMarkupTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('markupType') }})
    
