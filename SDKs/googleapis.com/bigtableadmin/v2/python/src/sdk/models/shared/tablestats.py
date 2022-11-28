from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TableStats:
    r"""TableStats
    Approximate statistics related to a table. These statistics are calculated infrequently, while simultaneously, data in the table can change rapidly. Thus the values reported here (e.g. row count) are very likely out-of date, even the instant they are received in this API. Thus, only treat these values as approximate. IMPORTANT: Everything below is approximate, unless otherwise specified.
    """
    
    average_cells_per_column: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('averageCellsPerColumn') }})
    average_columns_per_row: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('averageColumnsPerRow') }})
    logical_data_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logicalDataBytes') }})
    row_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowCount') }})
    
