from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import beaconattachment


@dataclass_json
@dataclass
class ListBeaconAttachmentsResponse:
    attachments: Optional[List[beaconattachment.BeaconAttachment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachments' }})
    
