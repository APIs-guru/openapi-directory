from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import crossdimensionreachreportcompatiblefields
from . import floodlightreportcompatiblefields
from . import pathreportcompatiblefields
from . import pathreportcompatiblefields
from . import pathtoconversionreportcompatiblefields
from . import reachreportcompatiblefields
from . import reportcompatiblefields


@dataclass_json
@dataclass
class CompatibleFields:
    cross_dimension_reach_report_compatible_fields: Optional[crossdimensionreachreportcompatiblefields.CrossDimensionReachReportCompatibleFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'crossDimensionReachReportCompatibleFields' }})
    floodlight_report_compatible_fields: Optional[floodlightreportcompatiblefields.FloodlightReportCompatibleFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floodlightReportCompatibleFields' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    path_attribution_report_compatible_fields: Optional[pathreportcompatiblefields.PathReportCompatibleFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pathAttributionReportCompatibleFields' }})
    path_report_compatible_fields: Optional[pathreportcompatiblefields.PathReportCompatibleFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pathReportCompatibleFields' }})
    path_to_conversion_report_compatible_fields: Optional[pathtoconversionreportcompatiblefields.PathToConversionReportCompatibleFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pathToConversionReportCompatibleFields' }})
    reach_report_compatible_fields: Optional[reachreportcompatiblefields.ReachReportCompatibleFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reachReportCompatibleFields' }})
    report_compatible_fields: Optional[reportcompatiblefields.ReportCompatibleFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportCompatibleFields' }})
    
