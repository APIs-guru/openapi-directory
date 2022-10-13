from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class HistogramResultSearchTypeEnum(str, Enum):
    SEARCH_TYPE_UNSPECIFIED = "SEARCH_TYPE_UNSPECIFIED"
    COMPANY_ID = "COMPANY_ID"
    EMPLOYMENT_TYPE = "EMPLOYMENT_TYPE"
    COMPANY_SIZE = "COMPANY_SIZE"
    DATE_PUBLISHED = "DATE_PUBLISHED"
    EDUCATION_LEVEL = "EDUCATION_LEVEL"
    EXPERIENCE_LEVEL = "EXPERIENCE_LEVEL"
    ADMIN_1 = "ADMIN_1"
    COUNTRY = "COUNTRY"
    CITY = "CITY"
    LOCALE = "LOCALE"
    LANGUAGE = "LANGUAGE"
    CATEGORY = "CATEGORY"
    CITY_COORDINATE = "CITY_COORDINATE"
    ADMIN_1_COUNTRY = "ADMIN_1_COUNTRY"
    COMPANY_DISPLAY_NAME = "COMPANY_DISPLAY_NAME"
    BASE_COMPENSATION_UNIT = "BASE_COMPENSATION_UNIT"


@dataclass_json
@dataclass
class HistogramResult:
    search_type: Optional[HistogramResultSearchTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchType' }})
    values: Optional[dict[str, int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
