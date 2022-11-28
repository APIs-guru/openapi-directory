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
class Request:
    r"""Request
    A single kind of update to apply to a presentation.
    """
    
    create_image: Optional[CreateImageRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createImage') }})
    create_line: Optional[CreateLineRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createLine') }})
    create_paragraph_bullets: Optional[CreateParagraphBulletsRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createParagraphBullets') }})
    create_shape: Optional[CreateShapeRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createShape') }})
    create_sheets_chart: Optional[CreateSheetsChartRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createSheetsChart') }})
    create_slide: Optional[CreateSlideRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createSlide') }})
    create_table: Optional[CreateTableRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTable') }})
    create_video: Optional[CreateVideoRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createVideo') }})
    delete_object: Optional[DeleteObjectRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteObject') }})
    delete_paragraph_bullets: Optional[DeleteParagraphBulletsRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteParagraphBullets') }})
    delete_table_column: Optional[DeleteTableColumnRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteTableColumn') }})
    delete_table_row: Optional[DeleteTableRowRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteTableRow') }})
    delete_text: Optional[DeleteTextRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteText') }})
    duplicate_object: Optional[DuplicateObjectRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duplicateObject') }})
    group_objects: Optional[GroupObjectsRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupObjects') }})
    insert_table_columns: Optional[InsertTableColumnsRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertTableColumns') }})
    insert_table_rows: Optional[InsertTableRowsRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertTableRows') }})
    insert_text: Optional[InsertTextRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertText') }})
    merge_table_cells: Optional[MergeTableCellsRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mergeTableCells') }})
    refresh_sheets_chart: Optional[RefreshSheetsChartRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refreshSheetsChart') }})
    replace_all_shapes_with_image: Optional[ReplaceAllShapesWithImageRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replaceAllShapesWithImage') }})
    replace_all_shapes_with_sheets_chart: Optional[ReplaceAllShapesWithSheetsChartRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replaceAllShapesWithSheetsChart') }})
    replace_all_text: Optional[ReplaceAllTextRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replaceAllText') }})
    replace_image: Optional[ReplaceImageRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replaceImage') }})
    reroute_line: Optional[RerouteLineRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rerouteLine') }})
    ungroup_objects: Optional[UngroupObjectsRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ungroupObjects') }})
    unmerge_table_cells: Optional[UnmergeTableCellsRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unmergeTableCells') }})
    update_image_properties: Optional[UpdateImagePropertiesRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateImageProperties') }})
    update_line_category: Optional[UpdateLineCategoryRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateLineCategory') }})
    update_line_properties: Optional[UpdateLinePropertiesRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateLineProperties') }})
    update_page_element_alt_text: Optional[UpdatePageElementAltTextRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatePageElementAltText') }})
    update_page_element_transform: Optional[UpdatePageElementTransformRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatePageElementTransform') }})
    update_page_elements_z_order: Optional[UpdatePageElementsZOrderRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatePageElementsZOrder') }})
    update_page_properties: Optional[UpdatePagePropertiesRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatePageProperties') }})
    update_paragraph_style: Optional[UpdateParagraphStyleRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateParagraphStyle') }})
    update_shape_properties: Optional[UpdateShapePropertiesRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateShapeProperties') }})
    update_slide_properties: Optional[UpdateSlidePropertiesRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateSlideProperties') }})
    update_slides_position: Optional[UpdateSlidesPositionRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateSlidesPosition') }})
    update_table_border_properties: Optional[UpdateTableBorderPropertiesRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTableBorderProperties') }})
    update_table_cell_properties: Optional[UpdateTableCellPropertiesRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTableCellProperties') }})
    update_table_column_properties: Optional[UpdateTableColumnPropertiesRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTableColumnProperties') }})
    update_table_row_properties: Optional[UpdateTableRowPropertiesRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTableRowProperties') }})
    update_text_style: Optional[UpdateTextStyleRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTextStyle') }})
    update_video_properties: Optional[UpdateVideoPropertiesRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateVideoProperties') }})
    
