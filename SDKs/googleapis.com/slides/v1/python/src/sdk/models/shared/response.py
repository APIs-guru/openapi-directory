from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import createimageresponse
from . import createlineresponse
from . import createshaperesponse
from . import createsheetschartresponse
from . import createslideresponse
from . import createtableresponse
from . import createvideoresponse
from . import duplicateobjectresponse
from . import groupobjectsresponse
from . import replaceallshapeswithimageresponse
from . import replaceallshapeswithsheetschartresponse
from . import replacealltextresponse


@dataclass_json
@dataclass
class Response:
    create_image: Optional[createimageresponse.CreateImageResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createImage' }})
    create_line: Optional[createlineresponse.CreateLineResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createLine' }})
    create_shape: Optional[createshaperesponse.CreateShapeResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createShape' }})
    create_sheets_chart: Optional[createsheetschartresponse.CreateSheetsChartResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createSheetsChart' }})
    create_slide: Optional[createslideresponse.CreateSlideResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createSlide' }})
    create_table: Optional[createtableresponse.CreateTableResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTable' }})
    create_video: Optional[createvideoresponse.CreateVideoResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createVideo' }})
    duplicate_object: Optional[duplicateobjectresponse.DuplicateObjectResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duplicateObject' }})
    group_objects: Optional[groupobjectsresponse.GroupObjectsResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupObjects' }})
    replace_all_shapes_with_image: Optional[replaceallshapeswithimageresponse.ReplaceAllShapesWithImageResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replaceAllShapesWithImage' }})
    replace_all_shapes_with_sheets_chart: Optional[replaceallshapeswithsheetschartresponse.ReplaceAllShapesWithSheetsChartResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replaceAllShapesWithSheetsChart' }})
    replace_all_text: Optional[replacealltextresponse.ReplaceAllTextResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replaceAllText' }})
    
