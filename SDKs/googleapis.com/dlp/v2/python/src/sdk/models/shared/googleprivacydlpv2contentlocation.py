from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2documentlocation
from . import googleprivacydlpv2imagelocation
from . import googleprivacydlpv2metadatalocation
from . import googleprivacydlpv2recordlocation


@dataclass_json
@dataclass
class GooglePrivacyDlpV2ContentLocation:
    container_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerName' }})
    container_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerTimestamp' }})
    container_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerVersion' }})
    document_location: Optional[googleprivacydlpv2documentlocation.GooglePrivacyDlpV2DocumentLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentLocation' }})
    image_location: Optional[googleprivacydlpv2imagelocation.GooglePrivacyDlpV2ImageLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageLocation' }})
    metadata_location: Optional[googleprivacydlpv2metadatalocation.GooglePrivacyDlpV2MetadataLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadataLocation' }})
    record_location: Optional[googleprivacydlpv2recordlocation.GooglePrivacyDlpV2RecordLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recordLocation' }})
    
