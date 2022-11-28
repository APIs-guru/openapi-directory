from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class CitiesOrderEnum(str, Enum):
    CITY = "city"
    COUNTRY = "country"
    FIRST_UPDATED = "firstUpdated"
    LAST_UPDATED = "lastUpdated"

