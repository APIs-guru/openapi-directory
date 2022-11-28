from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CounterMetadataKindEnum(str, Enum):
    INVALID = "INVALID"
    SUM = "SUM"
    MAX = "MAX"
    MIN = "MIN"
    MEAN = "MEAN"
    OR = "OR"
    AND = "AND"
    SET = "SET"
    DISTRIBUTION = "DISTRIBUTION"
    LATEST_VALUE = "LATEST_VALUE"

class CounterMetadataStandardUnitsEnum(str, Enum):
    BYTES = "BYTES"
    BYTES_PER_SEC = "BYTES_PER_SEC"
    MILLISECONDS = "MILLISECONDS"
    MICROSECONDS = "MICROSECONDS"
    NANOSECONDS = "NANOSECONDS"
    TIMESTAMP_MSEC = "TIMESTAMP_MSEC"
    TIMESTAMP_USEC = "TIMESTAMP_USEC"
    TIMESTAMP_NSEC = "TIMESTAMP_NSEC"


@dataclass_json
@dataclass
class CounterMetadata:
    r"""CounterMetadata
    CounterMetadata includes all static non-name non-value counter attributes.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    kind: Optional[CounterMetadataKindEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    other_units: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otherUnits') }})
    standard_units: Optional[CounterMetadataStandardUnitsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('standardUnits') }})
    
