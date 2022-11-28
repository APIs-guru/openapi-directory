from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class OrgChartSpecNodeSizeEnum(str, Enum):
    ORG_CHART_LABEL_SIZE_UNSPECIFIED = "ORG_CHART_LABEL_SIZE_UNSPECIFIED"
    SMALL = "SMALL"
    MEDIUM = "MEDIUM"
    LARGE = "LARGE"


@dataclass_json
@dataclass
class OrgChartSpec:
    r"""OrgChartSpec
    An org chart. Org charts require a unique set of labels in labels and may optionally include parent_labels and tooltips. parent_labels contain, for each node, the label identifying the parent node. tooltips contain, for each node, an optional tooltip. For example, to describe an OrgChart with Alice as the CEO, Bob as the President (reporting to Alice) and Cathy as VP of Sales (also reporting to Alice), have labels contain \"Alice\", \"Bob\", \"Cathy\", parent_labels contain \"\", \"Alice\", \"Alice\" and tooltips contain \"CEO\", \"President\", \"VP Sales\".
    """
    
    labels: Optional[ChartData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    node_color: Optional[Color] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeColor') }})
    node_color_style: Optional[ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeColorStyle') }})
    node_size: Optional[OrgChartSpecNodeSizeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeSize') }})
    parent_labels: Optional[ChartData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentLabels') }})
    selected_node_color: Optional[Color] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectedNodeColor') }})
    selected_node_color_style: Optional[ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectedNodeColorStyle') }})
    tooltips: Optional[ChartData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tooltips') }})
    
