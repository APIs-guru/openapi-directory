from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import softwarerecipeartifactgcs
from . import softwarerecipeartifactremote


@dataclass_json
@dataclass
class SoftwareRecipeArtifact:
    allow_insecure: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowInsecure' }})
    gcs: Optional[softwarerecipeartifactgcs.SoftwareRecipeArtifactGcs] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcs' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    remote: Optional[softwarerecipeartifactremote.SoftwareRecipeArtifactRemote] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remote' }})
    
