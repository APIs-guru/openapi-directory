from dataclasses import dataclass, field
from typing import Enum

class BillSortOptionEnum(str, Enum):
    UPDATED_ASC = "updated_asc"
    UPDATED_DESC = "updated_desc"
    FIRST_ACTION_ASC = "first_action_asc"
    FIRST_ACTION_DESC = "first_action_desc"
    LATEST_ACTION_ASC = "latest_action_asc"
    LATEST_ACTION_DESC = "latest_action_desc"

