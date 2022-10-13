from dataclasses import dataclass, field
from typing import Enum

class OutageStrategyEnum(str, Enum):
    ONE_SERVICE_PER_GROUP = "OneServicePerGroup"
    ALL_SERVICES_PER_GROUP = "AllServicesPerGroup"

