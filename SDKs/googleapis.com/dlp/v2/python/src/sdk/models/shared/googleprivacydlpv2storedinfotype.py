from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2storedinfotypeversion
from . import googleprivacydlpv2storedinfotypeversion


@dataclass_json
@dataclass
class GooglePrivacyDlpV2StoredInfoType:
    current_version: Optional[googleprivacydlpv2storedinfotypeversion.GooglePrivacyDlpV2StoredInfoTypeVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentVersion' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pending_versions: Optional[List[googleprivacydlpv2storedinfotypeversion.GooglePrivacyDlpV2StoredInfoTypeVersion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pendingVersions' }})
    
