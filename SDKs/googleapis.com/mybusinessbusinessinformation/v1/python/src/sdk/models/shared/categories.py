from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Categories:
    r"""Categories
    A collection of categories that describes the business. During updates, both fields must be set. Clients are prohibited from individually updating the primary or additional categories using the update mask.
    """
    
    additional_categories: Optional[List[Category]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalCategories') }})
    primary_category: Optional[Category] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryCategory') }})
    

@dataclass_json
@dataclass
class CategoriesInput:
    r"""CategoriesInput
    A collection of categories that describes the business. During updates, both fields must be set. Clients are prohibited from individually updating the primary or additional categories using the update mask.
    """
    
    additional_categories: Optional[List[CategoryInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalCategories') }})
    primary_category: Optional[CategoryInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryCategory') }})
    
