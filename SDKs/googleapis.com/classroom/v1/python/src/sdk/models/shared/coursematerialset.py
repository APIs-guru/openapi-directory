from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CourseMaterialSet:
    r"""CourseMaterialSet
    A set of materials that appears on the \"About\" page of the course. These materials might include a syllabus, schedule, or other background information relating to the course as a whole.
    """
    
    materials: Optional[List[CourseMaterial]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('materials') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
