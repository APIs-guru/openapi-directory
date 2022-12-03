from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ProductV1ProductLineEnum(str, Enum):
    GENERAL_LIABILITY = "general_liability"
    WORKERS_COMPENSATION = "workers_compensation"
    BUSINESS_OWNERS_POLICY = "business_owners_policy"


@dataclass_json
@dataclass
class ProductV1:
    r"""ProductV1
    A [product](https://www.heraldapi.com/docs/products) refers to a specific type of insurance policy provided by an institution. 
    """
    
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    institution_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('institution_id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    product_line: ProductV1ProductLineEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('product_line') }})
    
