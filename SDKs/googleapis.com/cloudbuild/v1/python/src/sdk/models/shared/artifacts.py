from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import mavenartifact
from . import artifactobjects
from . import pythonpackage


@dataclass_json
@dataclass
class Artifacts:
    images: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'images' }})
    maven_artifacts: Optional[List[mavenartifact.MavenArtifact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mavenArtifacts' }})
    objects: Optional[artifactobjects.ArtifactObjects] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objects' }})
    python_packages: Optional[List[pythonpackage.PythonPackage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pythonPackages' }})
    
