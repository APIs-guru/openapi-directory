from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CompatibleFields:
    r"""CompatibleFields
    Represents a response to the queryCompatibleFields method.
    """
    
    cross_dimension_reach_report_compatible_fields: Optional[CrossDimensionReachReportCompatibleFields] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crossDimensionReachReportCompatibleFields') }})
    floodlight_report_compatible_fields: Optional[FloodlightReportCompatibleFields] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floodlightReportCompatibleFields') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    path_to_conversion_report_compatible_fields: Optional[PathToConversionReportCompatibleFields] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pathToConversionReportCompatibleFields') }})
    reach_report_compatible_fields: Optional[ReachReportCompatibleFields] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reachReportCompatibleFields') }})
    report_compatible_fields: Optional[ReportCompatibleFields] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportCompatibleFields') }})
    
