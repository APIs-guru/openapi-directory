from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SoftwareRecipeStepExtractArchiveTypeEnum(str, Enum):
    ARCHIVE_TYPE_UNSPECIFIED = "ARCHIVE_TYPE_UNSPECIFIED"
    TAR = "TAR"
    TAR_GZIP = "TAR_GZIP"
    TAR_BZIP = "TAR_BZIP"
    TAR_LZMA = "TAR_LZMA"
    TAR_XZ = "TAR_XZ"
    ZIP = "ZIP"


@dataclass_json
@dataclass
class SoftwareRecipeStepExtractArchive:
    artifact_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artifactId' }})
    destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    type: Optional[SoftwareRecipeStepExtractArchiveTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
