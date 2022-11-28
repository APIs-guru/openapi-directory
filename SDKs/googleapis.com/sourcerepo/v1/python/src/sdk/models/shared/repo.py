from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Repo:
    r"""Repo
    A repository (or repo) is a Git repository storing versioned source content.
    """
    
    mirror_config: Optional[MirrorConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mirrorConfig') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pubsub_configs: Optional[dict[str, PubsubConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pubsubConfigs') }})
    size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
