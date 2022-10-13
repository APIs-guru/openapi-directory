from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum

class MeasOrderEnum(str, Enum):
    CITY = "city"
    COUNTRY = "country"
    LOCATION = "location"
    DATETIME = "datetime"

