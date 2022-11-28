from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Response:
    r"""Response
    A single response from an update.
    """
    
    create_image: Optional[CreateImageResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createImage') }})
    create_line: Optional[CreateLineResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createLine') }})
    create_shape: Optional[CreateShapeResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createShape') }})
    create_sheets_chart: Optional[CreateSheetsChartResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createSheetsChart') }})
    create_slide: Optional[CreateSlideResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createSlide') }})
    create_table: Optional[CreateTableResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTable') }})
    create_video: Optional[CreateVideoResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createVideo') }})
    duplicate_object: Optional[DuplicateObjectResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duplicateObject') }})
    group_objects: Optional[GroupObjectsResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupObjects') }})
    replace_all_shapes_with_image: Optional[ReplaceAllShapesWithImageResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replaceAllShapesWithImage') }})
    replace_all_shapes_with_sheets_chart: Optional[ReplaceAllShapesWithSheetsChartResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replaceAllShapesWithSheetsChart') }})
    replace_all_text: Optional[ReplaceAllTextResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replaceAllText') }})
    
