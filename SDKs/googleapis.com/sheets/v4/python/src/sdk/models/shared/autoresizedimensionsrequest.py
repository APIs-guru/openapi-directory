from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import datasourcesheetdimensionrange
from . import dimensionrange


@dataclass_json
@dataclass
class AutoResizeDimensionsRequest:
    data_source_sheet_dimensions: Optional[datasourcesheetdimensionrange.DataSourceSheetDimensionRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSourceSheetDimensions' }})
    dimensions: Optional[dimensionrange.DimensionRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensions' }})
    
