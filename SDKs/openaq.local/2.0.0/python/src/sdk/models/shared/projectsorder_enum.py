from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class ProjectsOrderEnum(str, Enum):
    ID = "id"
    NAME = "name"
    SUBTITLE = "subtitle"
    FIRST_UPDATED = "firstUpdated"
    LAST_UPDATED = "lastUpdated"

