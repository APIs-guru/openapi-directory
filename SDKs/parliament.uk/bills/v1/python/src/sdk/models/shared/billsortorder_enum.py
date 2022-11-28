from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class BillSortOrderEnum(str, Enum):
    TITLE_ASCENDING = "TitleAscending"
    TITLE_DESCENDING = "TitleDescending"
    DATE_UPDATED_ASCENDING = "DateUpdatedAscending"
    DATE_UPDATED_DESCENDING = "DateUpdatedDescending"

