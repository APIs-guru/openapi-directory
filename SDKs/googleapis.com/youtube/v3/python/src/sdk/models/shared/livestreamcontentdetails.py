from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LiveStreamContentDetails:
    closed_captions_ingestion_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closedCaptionsIngestionUrl' }})
    is_reusable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isReusable' }})
    
