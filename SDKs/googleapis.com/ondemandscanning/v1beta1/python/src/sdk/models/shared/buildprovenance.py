from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BuildProvenance:
    r"""BuildProvenance
    Provenance of a build. Contains all information needed to verify the full details about the build from source to completion.
    """
    
    build_options: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildOptions') }})
    builder_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('builderVersion') }})
    built_artifacts: Optional[List[Artifact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('builtArtifacts') }})
    commands: Optional[List[Command]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commands') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    creator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creator') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    logs_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logsUri') }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    source_provenance: Optional[Source] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceProvenance') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    trigger_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerId') }})
    
