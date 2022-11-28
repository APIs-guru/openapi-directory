from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DiscoveryclustersClustersBannerWithContentContainer:
    fill_color_argb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fillColorArgb') }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageUrl') }})
    mask_color_argb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maskColorArgb') }})
    more_button_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moreButtonText') }})
    more_button_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moreButtonUrl') }})
    text_color_argb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textColorArgb') }})
    

@dataclass_json
@dataclass
class DiscoveryclustersClusters:
    banner_with_content_container: Optional[DiscoveryclustersClustersBannerWithContentContainer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('banner_with_content_container') }})
    sub_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subTitle') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    total_volumes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalVolumes') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    volumes: Optional[List[Volume]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    

@dataclass_json
@dataclass
class Discoveryclusters:
    clusters: Optional[List[DiscoveryclustersClusters]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusters') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    total_clusters: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalClusters') }})
    
