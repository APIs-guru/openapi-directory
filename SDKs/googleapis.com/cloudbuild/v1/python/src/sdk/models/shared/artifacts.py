from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Artifacts:
    r"""Artifacts
    Artifacts produced by a build that should be uploaded upon successful completion of all build steps.
    """
    
    images: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    maven_artifacts: Optional[List[MavenArtifact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mavenArtifacts') }})
    objects: Optional[ArtifactObjects] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objects') }})
    python_packages: Optional[List[PythonPackage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pythonPackages') }})
    
