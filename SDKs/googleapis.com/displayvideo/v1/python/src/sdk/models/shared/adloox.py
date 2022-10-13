from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class AdlooxExcludedAdlooxCategoriesEnum(str, Enum):
    ADLOOX_UNSPECIFIED = "ADLOOX_UNSPECIFIED"
    ADULT_CONTENT_HARD = "ADULT_CONTENT_HARD"
    ADULT_CONTENT_SOFT = "ADULT_CONTENT_SOFT"
    ILLEGAL_CONTENT = "ILLEGAL_CONTENT"
    BORDERLINE_CONTENT = "BORDERLINE_CONTENT"
    DISCRIMINATORY_CONTENT = "DISCRIMINATORY_CONTENT"
    VIOLENT_CONTENT_WEAPONS = "VIOLENT_CONTENT_WEAPONS"
    LOW_VIEWABILITY_DOMAINS = "LOW_VIEWABILITY_DOMAINS"
    FRAUD = "FRAUD"


@dataclass_json
@dataclass
class Adloox:
    excluded_adloox_categories: Optional[List[AdlooxExcludedAdlooxCategoriesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludedAdlooxCategories' }})
    
