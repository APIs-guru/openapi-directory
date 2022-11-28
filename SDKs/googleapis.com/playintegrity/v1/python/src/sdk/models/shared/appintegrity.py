from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AppIntegrityAppRecognitionVerdictEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    PLAY_RECOGNIZED = "PLAY_RECOGNIZED"
    UNRECOGNIZED_VERSION = "UNRECOGNIZED_VERSION"
    UNEVALUATED = "UNEVALUATED"


@dataclass_json
@dataclass
class AppIntegrity:
    r"""AppIntegrity
    Contains the application integrity information.
    """
    
    app_recognition_verdict: Optional[AppIntegrityAppRecognitionVerdictEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appRecognitionVerdict') }})
    certificate_sha256_digest: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateSha256Digest') }})
    package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageName') }})
    version_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionCode') }})
    
