from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2deidentifyconfig


@dataclass_json
@dataclass
class GooglePrivacyDlpV2DeidentifyTemplate:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    deidentify_config: Optional[googleprivacydlpv2deidentifyconfig.GooglePrivacyDlpV2DeidentifyConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deidentifyConfig' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
