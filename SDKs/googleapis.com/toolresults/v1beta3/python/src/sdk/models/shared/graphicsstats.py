from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GraphicsStats:
    r"""GraphicsStats
    Graphics statistics for the App. The information is collected from 'adb shell dumpsys graphicsstats'. For more info see: https://developer.android.com/training/testing/performance.html Statistics will only be present for API 23+.
    """
    
    buckets: Optional[List[GraphicsStatsBucket]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buckets') }})
    high_input_latency_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('highInputLatencyCount') }})
    janky_frames: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jankyFrames') }})
    missed_vsync_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('missedVsyncCount') }})
    p50_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('p50Millis') }})
    p90_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('p90Millis') }})
    p95_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('p95Millis') }})
    p99_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('p99Millis') }})
    slow_bitmap_upload_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slowBitmapUploadCount') }})
    slow_draw_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slowDrawCount') }})
    slow_ui_thread_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slowUiThreadCount') }})
    total_frames: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalFrames') }})
    
