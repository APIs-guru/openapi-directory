from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import datasourcesheetdimensionrange
from . import dimensionproperties
from . import dimensionrange


@dataclass_json
@dataclass
class UpdateDimensionPropertiesRequest:
    data_source_sheet_range: Optional[datasourcesheetdimensionrange.DataSourceSheetDimensionRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSourceSheetRange' }})
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    properties: Optional[dimensionproperties.DimensionProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    range: Optional[dimensionrange.DimensionRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range' }})
    
