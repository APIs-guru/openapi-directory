from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TileCoordinates:
    r"""TileCoordinates
    Global tile coordinates. Global tile coordinates reference a specific tile on the map at a specific zoom level. The origin of this coordinate system is always at the northwest corner of the map, with x values increasing from west to east and y values increasing from north to south. Tiles are indexed using x, y coordinates from that origin. The zoom level containing the entire world in a tile is 0, and it increases as you zoom in. Zoom level n + 1 will contain 4 times as many tiles as zoom level n. The zoom level controls the level of detail of the data that is returned. In particular, this affects the set of feature types returned, their density, and geometry simplification. The exact tile contents may change over time, but care will be taken to keep supporting the most important use cases. For example, zoom level 15 shows roads for orientation and planning in the local neighborhood and zoom level 17 shows buildings to give users on foot a sense of situational awareness.
    """
    
    x: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('x') }})
    y: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('y') }})
    zoom: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zoom') }})
    
