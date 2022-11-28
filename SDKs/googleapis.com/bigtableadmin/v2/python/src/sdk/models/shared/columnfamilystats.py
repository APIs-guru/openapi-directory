from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ColumnFamilyStats:
    r"""ColumnFamilyStats
    Approximate statistics related to a single column family within a table. This information may change rapidly, interpreting these values at a point in time may already preset out-of-date information. Everything below is approximate, unless otherwise specified.
    """
    
    average_cells_per_column: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('averageCellsPerColumn') }})
    average_columns_per_row: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('averageColumnsPerRow') }})
    logical_data_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logicalDataBytes') }})
    
