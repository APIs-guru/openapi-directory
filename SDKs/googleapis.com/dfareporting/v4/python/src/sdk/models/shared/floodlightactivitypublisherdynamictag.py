from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import floodlightactivitydynamictag
from . import dimensionvalue


@dataclass_json
@dataclass
class FloodlightActivityPublisherDynamicTag:
    click_through: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clickThrough' }})
    directory_site_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directorySiteId' }})
    dynamic_tag: Optional[floodlightactivitydynamictag.FloodlightActivityDynamicTag] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dynamicTag' }})
    site_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'siteId' }})
    site_id_dimension_value: Optional[dimensionvalue.DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'siteIdDimensionValue' }})
    view_through: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'viewThrough' }})
    
