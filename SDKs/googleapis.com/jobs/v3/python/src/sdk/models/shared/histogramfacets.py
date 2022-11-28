from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class HistogramFacetsSimpleHistogramFacetsEnum(str, Enum):
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
class HistogramFacets:
    r"""HistogramFacets
    Input only. Histogram facets to be specified in SearchJobsRequest.
    """
    
    compensation_histogram_facets: Optional[List[CompensationHistogramRequest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compensationHistogramFacets') }})
    custom_attribute_histogram_facets: Optional[List[CustomAttributeHistogramRequest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customAttributeHistogramFacets') }})
    simple_histogram_facets: Optional[List[HistogramFacetsSimpleHistogramFacetsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('simpleHistogramFacets') }})
    
