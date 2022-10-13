from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import createimagerequest
from . import createlinerequest
from . import createparagraphbulletsrequest
from . import createshaperequest
from . import createsheetschartrequest
from . import createsliderequest
from . import createtablerequest
from . import createvideorequest
from . import deleteobjectrequest
from . import deleteparagraphbulletsrequest
from . import deletetablecolumnrequest
from . import deletetablerowrequest
from . import deletetextrequest
from . import duplicateobjectrequest
from . import groupobjectsrequest
from . import inserttablecolumnsrequest
from . import inserttablerowsrequest
from . import inserttextrequest
from . import mergetablecellsrequest
from . import refreshsheetschartrequest
from . import replaceallshapeswithimagerequest
from . import replaceallshapeswithsheetschartrequest
from . import replacealltextrequest
from . import replaceimagerequest
from . import reroutelinerequest
from . import ungroupobjectsrequest
from . import unmergetablecellsrequest
from . import updateimagepropertiesrequest
from . import updatelinecategoryrequest
from . import updatelinepropertiesrequest
from . import updatepageelementalttextrequest
from . import updatepageelementtransformrequest
from . import updatepageelementszorderrequest
from . import updatepagepropertiesrequest
from . import updateparagraphstylerequest
from . import updateshapepropertiesrequest
from . import updateslidepropertiesrequest
from . import updateslidespositionrequest
from . import updatetableborderpropertiesrequest
from . import updatetablecellpropertiesrequest
from . import updatetablecolumnpropertiesrequest
from . import updatetablerowpropertiesrequest
from . import updatetextstylerequest
from . import updatevideopropertiesrequest


@dataclass_json
@dataclass
class Request:
    create_image: Optional[createimagerequest.CreateImageRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createImage' }})
    create_line: Optional[createlinerequest.CreateLineRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createLine' }})
    create_paragraph_bullets: Optional[createparagraphbulletsrequest.CreateParagraphBulletsRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createParagraphBullets' }})
    create_shape: Optional[createshaperequest.CreateShapeRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createShape' }})
    create_sheets_chart: Optional[createsheetschartrequest.CreateSheetsChartRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createSheetsChart' }})
    create_slide: Optional[createsliderequest.CreateSlideRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createSlide' }})
    create_table: Optional[createtablerequest.CreateTableRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTable' }})
    create_video: Optional[createvideorequest.CreateVideoRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createVideo' }})
    delete_object: Optional[deleteobjectrequest.DeleteObjectRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteObject' }})
    delete_paragraph_bullets: Optional[deleteparagraphbulletsrequest.DeleteParagraphBulletsRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteParagraphBullets' }})
    delete_table_column: Optional[deletetablecolumnrequest.DeleteTableColumnRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteTableColumn' }})
    delete_table_row: Optional[deletetablerowrequest.DeleteTableRowRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteTableRow' }})
    delete_text: Optional[deletetextrequest.DeleteTextRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteText' }})
    duplicate_object: Optional[duplicateobjectrequest.DuplicateObjectRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duplicateObject' }})
    group_objects: Optional[groupobjectsrequest.GroupObjectsRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupObjects' }})
    insert_table_columns: Optional[inserttablecolumnsrequest.InsertTableColumnsRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insertTableColumns' }})
    insert_table_rows: Optional[inserttablerowsrequest.InsertTableRowsRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insertTableRows' }})
    insert_text: Optional[inserttextrequest.InsertTextRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insertText' }})
    merge_table_cells: Optional[mergetablecellsrequest.MergeTableCellsRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mergeTableCells' }})
    refresh_sheets_chart: Optional[refreshsheetschartrequest.RefreshSheetsChartRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refreshSheetsChart' }})
    replace_all_shapes_with_image: Optional[replaceallshapeswithimagerequest.ReplaceAllShapesWithImageRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replaceAllShapesWithImage' }})
    replace_all_shapes_with_sheets_chart: Optional[replaceallshapeswithsheetschartrequest.ReplaceAllShapesWithSheetsChartRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replaceAllShapesWithSheetsChart' }})
    replace_all_text: Optional[replacealltextrequest.ReplaceAllTextRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replaceAllText' }})
    replace_image: Optional[replaceimagerequest.ReplaceImageRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replaceImage' }})
    reroute_line: Optional[reroutelinerequest.RerouteLineRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rerouteLine' }})
    ungroup_objects: Optional[ungroupobjectsrequest.UngroupObjectsRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ungroupObjects' }})
    unmerge_table_cells: Optional[unmergetablecellsrequest.UnmergeTableCellsRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unmergeTableCells' }})
    update_image_properties: Optional[updateimagepropertiesrequest.UpdateImagePropertiesRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateImageProperties' }})
    update_line_category: Optional[updatelinecategoryrequest.UpdateLineCategoryRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateLineCategory' }})
    update_line_properties: Optional[updatelinepropertiesrequest.UpdateLinePropertiesRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateLineProperties' }})
    update_page_element_alt_text: Optional[updatepageelementalttextrequest.UpdatePageElementAltTextRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatePageElementAltText' }})
    update_page_element_transform: Optional[updatepageelementtransformrequest.UpdatePageElementTransformRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatePageElementTransform' }})
    update_page_elements_z_order: Optional[updatepageelementszorderrequest.UpdatePageElementsZOrderRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatePageElementsZOrder' }})
    update_page_properties: Optional[updatepagepropertiesrequest.UpdatePagePropertiesRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatePageProperties' }})
    update_paragraph_style: Optional[updateparagraphstylerequest.UpdateParagraphStyleRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateParagraphStyle' }})
    update_shape_properties: Optional[updateshapepropertiesrequest.UpdateShapePropertiesRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateShapeProperties' }})
    update_slide_properties: Optional[updateslidepropertiesrequest.UpdateSlidePropertiesRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateSlideProperties' }})
    update_slides_position: Optional[updateslidespositionrequest.UpdateSlidesPositionRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateSlidesPosition' }})
    update_table_border_properties: Optional[updatetableborderpropertiesrequest.UpdateTableBorderPropertiesRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTableBorderProperties' }})
    update_table_cell_properties: Optional[updatetablecellpropertiesrequest.UpdateTableCellPropertiesRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTableCellProperties' }})
    update_table_column_properties: Optional[updatetablecolumnpropertiesrequest.UpdateTableColumnPropertiesRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTableColumnProperties' }})
    update_table_row_properties: Optional[updatetablerowpropertiesrequest.UpdateTableRowPropertiesRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTableRowProperties' }})
    update_text_style: Optional[updatetextstylerequest.UpdateTextStyleRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTextStyle' }})
    update_video_properties: Optional[updatevideopropertiesrequest.UpdateVideoPropertiesRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateVideoProperties' }})
    
