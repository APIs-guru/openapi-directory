from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2infotype


@dataclass_json
@dataclass
class GooglePrivacyDlpV2SelectedInfoTypes:
    info_types: Optional[List[googleprivacydlpv2infotype.GooglePrivacyDlpV2InfoType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'infoTypes' }})
    
