from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateDimensionPropertiesRequest:
    r"""UpdateDimensionPropertiesRequest
    Updates properties of dimensions within the specified range.
    """
    
    data_source_sheet_range: Optional[DataSourceSheetDimensionRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceSheetRange') }})
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    properties: Optional[DimensionProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    range: Optional[DimensionRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    
