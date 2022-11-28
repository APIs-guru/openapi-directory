from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2StoredInfoType:
    r"""GooglePrivacyDlpV2StoredInfoType
    StoredInfoType resource message that contains information about the current version and any pending updates.
    """
    
    current_version: Optional[GooglePrivacyDlpV2StoredInfoTypeVersion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentVersion') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pending_versions: Optional[List[GooglePrivacyDlpV2StoredInfoTypeVersion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pendingVersions') }})
    
