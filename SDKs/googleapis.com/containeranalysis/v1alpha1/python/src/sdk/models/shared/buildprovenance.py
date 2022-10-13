from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import artifact
from . import command
from . import source


@dataclass_json
@dataclass
class BuildProvenance:
    build_options: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildOptions' }})
    builder_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'builderVersion' }})
    built_artifacts: Optional[List[artifact.Artifact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'builtArtifacts' }})
    commands: Optional[List[command.Command]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commands' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    creator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creator' }})
    finish_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finishTime' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    logs_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logsBucket' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    source_provenance: Optional[source.Source] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceProvenance' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    trigger_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerId' }})
    
