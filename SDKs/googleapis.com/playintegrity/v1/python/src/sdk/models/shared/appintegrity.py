from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class AppIntegrityAppRecognitionVerdictEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    PLAY_RECOGNIZED = "PLAY_RECOGNIZED"
    UNRECOGNIZED_VERSION = "UNRECOGNIZED_VERSION"
    UNEVALUATED = "UNEVALUATED"


@dataclass_json
@dataclass
class AppIntegrity:
    app_recognition_verdict: Optional[AppIntegrityAppRecognitionVerdictEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appRecognitionVerdict' }})
    certificate_sha256_digest: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateSha256Digest' }})
    package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageName' }})
    version_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionCode' }})
    
