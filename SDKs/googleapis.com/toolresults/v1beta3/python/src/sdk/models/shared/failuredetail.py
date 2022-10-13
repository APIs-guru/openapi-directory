from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FailureDetail:
    crashed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'crashed' }})
    device_out_of_memory: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceOutOfMemory' }})
    failed_roboscript: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failedRoboscript' }})
    not_installed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notInstalled' }})
    other_native_crash: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'otherNativeCrash' }})
    timed_out: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timedOut' }})
    unable_to_crawl: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unableToCrawl' }})
    
