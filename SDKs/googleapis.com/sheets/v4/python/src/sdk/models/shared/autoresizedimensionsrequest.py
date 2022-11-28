from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AutoResizeDimensionsRequest:
    r"""AutoResizeDimensionsRequest
    Automatically resizes one or more dimensions based on the contents of the cells in that dimension.
    """
    
    data_source_sheet_dimensions: Optional[DataSourceSheetDimensionRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceSheetDimensions') }})
    dimensions: Optional[DimensionRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    
