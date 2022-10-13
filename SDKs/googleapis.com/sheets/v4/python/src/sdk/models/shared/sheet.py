from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import bandedrange
from . import basicfilter
from . import embeddedchart
from . import dimensiongroup
from . import conditionalformatrule
from . import griddata
from . import developermetadata
from . import filterview
from . import gridrange
from . import sheetproperties
from . import protectedrange
from . import dimensiongroup
from . import slicer


@dataclass_json
@dataclass
class Sheet:
    banded_ranges: Optional[List[bandedrange.BandedRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bandedRanges' }})
    basic_filter: Optional[basicfilter.BasicFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basicFilter' }})
    charts: Optional[List[embeddedchart.EmbeddedChart]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'charts' }})
    column_groups: Optional[List[dimensiongroup.DimensionGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnGroups' }})
    conditional_formats: Optional[List[conditionalformatrule.ConditionalFormatRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conditionalFormats' }})
    data: Optional[List[griddata.GridData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    developer_metadata: Optional[List[developermetadata.DeveloperMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'developerMetadata' }})
    filter_views: Optional[List[filterview.FilterView]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterViews' }})
    merges: Optional[List[gridrange.GridRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merges' }})
    properties: Optional[sheetproperties.SheetProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    protected_ranges: Optional[List[protectedrange.ProtectedRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protectedRanges' }})
    row_groups: Optional[List[dimensiongroup.DimensionGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowGroups' }})
    slicers: Optional[List[slicer.Slicer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slicers' }})
    
