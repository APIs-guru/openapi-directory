from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import apiclassifierout
from . import softwareversionout


@dataclass_json
@dataclass
class APIClassifiersStatusOut:
    classifiers: Optional[List[apiclassifierout.APIClassifierOut]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classifiers' }})
    software_version: Optional[softwareversionout.SoftwareVersionOut] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'softwareVersion' }})
    
