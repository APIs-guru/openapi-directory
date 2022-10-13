from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import ob_feecategory1code_enum


@dataclass_json
@dataclass
class ObOtherFeeChargeDetailType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    fee_category: ob_feecategory1code_enum.ObFeeCategory1CodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCategory' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
