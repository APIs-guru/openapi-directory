from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import courseworkmaterial


@dataclass_json
@dataclass
class ListCourseWorkMaterialResponse:
    course_work_material: Optional[List[courseworkmaterial.CourseWorkMaterial]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'courseWorkMaterial' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
