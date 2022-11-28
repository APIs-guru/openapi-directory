from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ObMerchantDetails1:
    r"""ObMerchantDetails1
    Details of the merchant involved in the transaction.
    """
    
    merchant_category_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MerchantCategoryCode') }})
    merchant_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MerchantName') }})
    
