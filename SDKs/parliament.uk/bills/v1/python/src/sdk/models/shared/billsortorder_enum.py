from dataclasses import dataclass, field
from typing import Enum

class BillSortOrderEnum(str, Enum):
    TITLE_ASCENDING = "TitleAscending"
    TITLE_DESCENDING = "TitleDescending"
    DATE_UPDATED_ASCENDING = "DateUpdatedAscending"
    DATE_UPDATED_DESCENDING = "DateUpdatedDescending"

