from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    kind: Optional[CounterMetadataKindEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    other_units: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'otherUnits' }})
    standard_units: Optional[CounterMetadataStandardUnitsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'standardUnits' }})
    
