from dataclasses import dataclass, field
from enum import Enum

class AmendmentTypeEnum(str, Enum):
    EDIT_LONG_TITLE = "EditLongTitle"
    EDIT_BILL_BODY = "EditBillBody"
    ADD_CLAUSE_OR_SCHEDULE = "AddClauseOrSchedule"
    DELETE_CLAUSE_OR_SCHEDULE = "DeleteClauseOrSchedule"

