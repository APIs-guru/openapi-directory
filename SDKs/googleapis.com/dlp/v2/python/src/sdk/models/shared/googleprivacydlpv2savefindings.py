from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2outputstorageconfig


@dataclass_json
@dataclass
class GooglePrivacyDlpV2SaveFindings:
    output_config: Optional[googleprivacydlpv2outputstorageconfig.GooglePrivacyDlpV2OutputStorageConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputConfig' }})
    
