from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ApkDetail:
    r"""ApkDetail
    Android application details based on application manifest and apk archive contents.
    """
    
    apk_manifest: Optional[ApkManifest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apkManifest') }})
    
