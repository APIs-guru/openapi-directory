from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import duration
from . import filereference


@dataclass_json
@dataclass
class TestSuiteOverview:
    elapsed_time: Optional[duration.Duration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'elapsedTime' }})
    error_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorCount' }})
    failure_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureCount' }})
    flaky_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flakyCount' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    skipped_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skippedCount' }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalCount' }})
    xml_source: Optional[filereference.FileReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'xmlSource' }})
    
