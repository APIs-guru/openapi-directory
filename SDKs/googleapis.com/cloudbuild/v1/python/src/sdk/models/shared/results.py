from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Results:
    r"""Results
    Artifacts created by the build pipeline.
    """
    
    artifact_manifest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifactManifest') }})
    artifact_timing: Optional[TimeSpan] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifactTiming') }})
    build_step_images: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildStepImages') }})
    build_step_outputs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildStepOutputs') }})
    images: Optional[List[BuiltImage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    maven_artifacts: Optional[List[UploadedMavenArtifact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mavenArtifacts') }})
    num_artifacts: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numArtifacts') }})
    python_packages: Optional[List[UploadedPythonPackage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pythonPackages') }})
    
