from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class JobConfig:
    r"""JobConfig
    Job configuration
    """
    
    ad_breaks: Optional[List[AdBreak]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adBreaks') }})
    edit_list: Optional[List[EditAtom]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('editList') }})
    elementary_streams: Optional[List[ElementaryStream]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elementaryStreams') }})
    inputs: Optional[List[Input]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputs') }})
    manifests: Optional[List[Manifest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manifests') }})
    mux_streams: Optional[List[MuxStream]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('muxStreams') }})
    output: Optional[Output] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('output') }})
    overlays: Optional[List[Overlay]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overlays') }})
    pubsub_destination: Optional[PubsubDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pubsubDestination') }})
    sprite_sheets: Optional[List[SpriteSheet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spriteSheets') }})
    
