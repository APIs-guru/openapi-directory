from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import adbreak
from . import editatom
from . import elementarystream
from . import input
from . import manifest
from . import muxstream
from . import output
from . import overlay
from . import pubsubdestination
from . import spritesheet


@dataclass_json
@dataclass
class JobConfig:
    ad_breaks: Optional[List[adbreak.AdBreak]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adBreaks' }})
    edit_list: Optional[List[editatom.EditAtom]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'editList' }})
    elementary_streams: Optional[List[elementarystream.ElementaryStream]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'elementaryStreams' }})
    inputs: Optional[List[input.Input]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputs' }})
    manifests: Optional[List[manifest.Manifest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manifests' }})
    mux_streams: Optional[List[muxstream.MuxStream]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'muxStreams' }})
    output: Optional[output.Output] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'output' }})
    overlays: Optional[List[overlay.Overlay]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overlays' }})
    pubsub_destination: Optional[pubsubdestination.PubsubDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pubsubDestination' }})
    sprite_sheets: Optional[List[spritesheet.SpriteSheet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spriteSheets' }})
    
