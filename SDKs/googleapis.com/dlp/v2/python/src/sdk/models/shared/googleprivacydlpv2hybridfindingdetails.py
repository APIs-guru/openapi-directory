from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2container
from . import googleprivacydlpv2tableoptions


@dataclass_json
@dataclass
class GooglePrivacyDlpV2HybridFindingDetails:
    container_details: Optional[googleprivacydlpv2container.GooglePrivacyDlpV2Container] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerDetails' }})
    file_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileOffset' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    row_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowOffset' }})
    table_options: Optional[googleprivacydlpv2tableoptions.GooglePrivacyDlpV2TableOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableOptions' }})
    
