from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TestCaseReference:
    class_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'className' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    test_suite_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testSuiteName' }})
    
