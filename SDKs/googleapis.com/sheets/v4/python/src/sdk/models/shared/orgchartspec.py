from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import chartdata
from . import color
from . import colorstyle
from . import chartdata
from . import color
from . import colorstyle
from . import chartdata

class OrgChartSpecNodeSizeEnum(str, Enum):
    ORG_CHART_LABEL_SIZE_UNSPECIFIED = "ORG_CHART_LABEL_SIZE_UNSPECIFIED"
    SMALL = "SMALL"
    MEDIUM = "MEDIUM"
    LARGE = "LARGE"


@dataclass_json
@dataclass
class OrgChartSpec:
    labels: Optional[chartdata.ChartData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    node_color: Optional[color.Color] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeColor' }})
    node_color_style: Optional[colorstyle.ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeColorStyle' }})
    node_size: Optional[OrgChartSpecNodeSizeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeSize' }})
    parent_labels: Optional[chartdata.ChartData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentLabels' }})
    selected_node_color: Optional[color.Color] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selectedNodeColor' }})
    selected_node_color_style: Optional[colorstyle.ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selectedNodeColorStyle' }})
    tooltips: Optional[chartdata.ChartData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tooltips' }})
    
