from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import source
from . import sourceprovenance


@dataclass_json
@dataclass
class BuildConfig:
    build: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'build' }})
    docker_repository: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dockerRepository' }})
    entry_point: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entryPoint' }})
    environment_variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentVariables' }})
    runtime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runtime' }})
    source: Optional[source.Source] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    source_provenance: Optional[sourceprovenance.SourceProvenance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceProvenance' }})
    worker_pool: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerPool' }})
    
