from dataclasses import dataclass, field
from typing import Enum

class CountriesOrderEnum(str, Enum):
    COUNTRY = "country"
    FIRST_UPDATED = "firstUpdated"
    LAST_UPDATED = "lastUpdated"
    LOCATIONS = "locations"
    COUNT = "count"

