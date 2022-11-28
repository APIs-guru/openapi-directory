from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class CountriesOrderEnum(str, Enum):
    COUNTRY = "country"
    FIRST_UPDATED = "firstUpdated"
    LAST_UPDATED = "lastUpdated"
    LOCATIONS = "locations"
    COUNT = "count"

