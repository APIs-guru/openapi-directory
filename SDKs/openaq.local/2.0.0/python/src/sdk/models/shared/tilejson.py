from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TileJSON:
    r"""TileJSON
    TileJSON model.
    Based on https://github.com/mapbox/tilejson-spec/tree/master/2.2.0
    """
    
    tiles: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tiles') }})
    attribution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribution') }})
    bounds: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bounds') }})
    data: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    grids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grids') }})
    legend: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legend') }})
    maxzoom: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxzoom') }})
    minzoom: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minzoom') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    scheme: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheme') }})
    template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template') }})
    tilejson: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tilejson') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
