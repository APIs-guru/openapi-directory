from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import timespan
from . import builtimage
from . import uploadedmavenartifact
from . import uploadedpythonpackage


@dataclass_json
@dataclass
class Results:
    artifact_manifest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artifactManifest' }})
    artifact_timing: Optional[timespan.TimeSpan] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artifactTiming' }})
    build_step_images: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildStepImages' }})
    build_step_outputs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildStepOutputs' }})
    images: Optional[List[builtimage.BuiltImage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'images' }})
    maven_artifacts: Optional[List[uploadedmavenartifact.UploadedMavenArtifact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mavenArtifacts' }})
    num_artifacts: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numArtifacts' }})
    python_packages: Optional[List[uploadedpythonpackage.UploadedPythonPackage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pythonPackages' }})
    
