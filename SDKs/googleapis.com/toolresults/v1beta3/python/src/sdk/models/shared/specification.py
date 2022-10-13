from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import androidtest
from . import iostest


@dataclass_json
@dataclass
class Specification:
    android_test: Optional[androidtest.AndroidTest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'androidTest' }})
    ios_test: Optional[iostest.IosTest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iosTest' }})
    
