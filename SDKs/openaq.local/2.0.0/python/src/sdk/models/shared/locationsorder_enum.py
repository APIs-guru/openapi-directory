from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class LocationsOrderEnum(str, Enum):
    CITY = "city"
    COUNTRY = "country"
    LOCATION = "location"
    SOURCE_NAME = "sourceName"
    FIRST_UPDATED = "firstUpdated"
    LAST_UPDATED = "lastUpdated"
    COUNT = "count"
    RANDOM = "random"

