from dataclasses import dataclass, field
from typing import Enum

class CitiesOrderEnum(str, Enum):
    CITY = "city"
    COUNTRY = "country"
    FIRST_UPDATED = "firstUpdated"
    LAST_UPDATED = "lastUpdated"

