from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import createfooterrequest
from . import createfootnoterequest
from . import createheaderrequest
from . import createnamedrangerequest
from . import createparagraphbulletsrequest
from . import deletecontentrangerequest
from . import deletefooterrequest
from . import deleteheaderrequest
from . import deletenamedrangerequest
from . import deleteparagraphbulletsrequest
from . import deletepositionedobjectrequest
from . import deletetablecolumnrequest
from . import deletetablerowrequest
from . import insertinlineimagerequest
from . import insertpagebreakrequest
from . import insertsectionbreakrequest
from . import inserttablerequest
from . import inserttablecolumnrequest
from . import inserttablerowrequest
from . import inserttextrequest
from . import mergetablecellsrequest
from . import pintableheaderrowsrequest
from . import replacealltextrequest
from . import replaceimagerequest
from . import replacenamedrangecontentrequest
from . import unmergetablecellsrequest
from . import updatedocumentstylerequest
from . import updateparagraphstylerequest
from . import updatesectionstylerequest
from . import updatetablecellstylerequest
from . import updatetablecolumnpropertiesrequest
from . import updatetablerowstylerequest
from . import updatetextstylerequest


@dataclass_json
@dataclass
class Request:
    create_footer: Optional[createfooterrequest.CreateFooterRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createFooter' }})
    create_footnote: Optional[createfootnoterequest.CreateFootnoteRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createFootnote' }})
    create_header: Optional[createheaderrequest.CreateHeaderRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createHeader' }})
    create_named_range: Optional[createnamedrangerequest.CreateNamedRangeRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createNamedRange' }})
    create_paragraph_bullets: Optional[createparagraphbulletsrequest.CreateParagraphBulletsRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createParagraphBullets' }})
    delete_content_range: Optional[deletecontentrangerequest.DeleteContentRangeRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteContentRange' }})
    delete_footer: Optional[deletefooterrequest.DeleteFooterRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteFooter' }})
    delete_header: Optional[deleteheaderrequest.DeleteHeaderRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteHeader' }})
    delete_named_range: Optional[deletenamedrangerequest.DeleteNamedRangeRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteNamedRange' }})
    delete_paragraph_bullets: Optional[deleteparagraphbulletsrequest.DeleteParagraphBulletsRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteParagraphBullets' }})
    delete_positioned_object: Optional[deletepositionedobjectrequest.DeletePositionedObjectRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deletePositionedObject' }})
    delete_table_column: Optional[deletetablecolumnrequest.DeleteTableColumnRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteTableColumn' }})
    delete_table_row: Optional[deletetablerowrequest.DeleteTableRowRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteTableRow' }})
    insert_inline_image: Optional[insertinlineimagerequest.InsertInlineImageRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insertInlineImage' }})
    insert_page_break: Optional[insertpagebreakrequest.InsertPageBreakRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insertPageBreak' }})
    insert_section_break: Optional[insertsectionbreakrequest.InsertSectionBreakRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insertSectionBreak' }})
    insert_table: Optional[inserttablerequest.InsertTableRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insertTable' }})
    insert_table_column: Optional[inserttablecolumnrequest.InsertTableColumnRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insertTableColumn' }})
    insert_table_row: Optional[inserttablerowrequest.InsertTableRowRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insertTableRow' }})
    insert_text: Optional[inserttextrequest.InsertTextRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insertText' }})
    merge_table_cells: Optional[mergetablecellsrequest.MergeTableCellsRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mergeTableCells' }})
    pin_table_header_rows: Optional[pintableheaderrowsrequest.PinTableHeaderRowsRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pinTableHeaderRows' }})
    replace_all_text: Optional[replacealltextrequest.ReplaceAllTextRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replaceAllText' }})
    replace_image: Optional[replaceimagerequest.ReplaceImageRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replaceImage' }})
    replace_named_range_content: Optional[replacenamedrangecontentrequest.ReplaceNamedRangeContentRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replaceNamedRangeContent' }})
    unmerge_table_cells: Optional[unmergetablecellsrequest.UnmergeTableCellsRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unmergeTableCells' }})
    update_document_style: Optional[updatedocumentstylerequest.UpdateDocumentStyleRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateDocumentStyle' }})
    update_paragraph_style: Optional[updateparagraphstylerequest.UpdateParagraphStyleRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateParagraphStyle' }})
    update_section_style: Optional[updatesectionstylerequest.UpdateSectionStyleRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateSectionStyle' }})
    update_table_cell_style: Optional[updatetablecellstylerequest.UpdateTableCellStyleRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTableCellStyle' }})
    update_table_column_properties: Optional[updatetablecolumnpropertiesrequest.UpdateTableColumnPropertiesRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTableColumnProperties' }})
    update_table_row_style: Optional[updatetablerowstylerequest.UpdateTableRowStyleRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTableRowStyle' }})
    update_text_style: Optional[updatetextstylerequest.UpdateTextStyleRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTextStyle' }})
    
