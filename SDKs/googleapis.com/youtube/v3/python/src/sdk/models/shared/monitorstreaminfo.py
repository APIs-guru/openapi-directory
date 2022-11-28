from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MonitorStreamInfo:
    r"""MonitorStreamInfo
    Settings and Info of the monitor stream
    """
    
    broadcast_stream_delay_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('broadcastStreamDelayMs') }})
    embed_html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embedHtml') }})
    enable_monitor_stream: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableMonitorStream') }})
    
