from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2bytecontentitem
from . import googleprivacydlpv2imageredactionconfig
from . import googleprivacydlpv2inspectconfig


@dataclass_json
@dataclass
class GooglePrivacyDlpV2RedactImageRequest:
    byte_item: Optional[googleprivacydlpv2bytecontentitem.GooglePrivacyDlpV2ByteContentItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'byteItem' }})
    image_redaction_configs: Optional[List[googleprivacydlpv2imageredactionconfig.GooglePrivacyDlpV2ImageRedactionConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageRedactionConfigs' }})
    include_findings: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeFindings' }})
    inspect_config: Optional[googleprivacydlpv2inspectconfig.GooglePrivacyDlpV2InspectConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inspectConfig' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationId' }})
    
