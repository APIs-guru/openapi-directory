from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2infotypedescription


@dataclass_json
@dataclass
class GooglePrivacyDlpV2ListInfoTypesResponse:
    info_types: Optional[List[googleprivacydlpv2infotypedescription.GooglePrivacyDlpV2InfoTypeDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'infoTypes' }})
    
