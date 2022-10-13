from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MonitorStreamInfo:
    broadcast_stream_delay_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'broadcastStreamDelayMs' }})
    embed_html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'embedHtml' }})
    enable_monitor_stream: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableMonitorStream' }})
    
