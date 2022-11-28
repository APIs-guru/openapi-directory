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
    A single update to apply to a document.
    """
    
    create_footer: Optional[CreateFooterRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createFooter') }})
    create_footnote: Optional[CreateFootnoteRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createFootnote') }})
    create_header: Optional[CreateHeaderRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createHeader') }})
    create_named_range: Optional[CreateNamedRangeRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createNamedRange') }})
    create_paragraph_bullets: Optional[CreateParagraphBulletsRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createParagraphBullets') }})
    delete_content_range: Optional[DeleteContentRangeRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteContentRange') }})
    delete_footer: Optional[DeleteFooterRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteFooter') }})
    delete_header: Optional[DeleteHeaderRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteHeader') }})
    delete_named_range: Optional[DeleteNamedRangeRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteNamedRange') }})
    delete_paragraph_bullets: Optional[DeleteParagraphBulletsRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteParagraphBullets') }})
    delete_positioned_object: Optional[DeletePositionedObjectRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletePositionedObject') }})
    delete_table_column: Optional[DeleteTableColumnRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteTableColumn') }})
    delete_table_row: Optional[DeleteTableRowRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteTableRow') }})
    insert_inline_image: Optional[InsertInlineImageRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertInlineImage') }})
    insert_page_break: Optional[InsertPageBreakRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertPageBreak') }})
    insert_section_break: Optional[InsertSectionBreakRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertSectionBreak') }})
    insert_table: Optional[InsertTableRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertTable') }})
    insert_table_column: Optional[InsertTableColumnRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertTableColumn') }})
    insert_table_row: Optional[InsertTableRowRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertTableRow') }})
    insert_text: Optional[InsertTextRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertText') }})
    merge_table_cells: Optional[MergeTableCellsRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mergeTableCells') }})
    pin_table_header_rows: Optional[PinTableHeaderRowsRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pinTableHeaderRows') }})
    replace_all_text: Optional[ReplaceAllTextRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replaceAllText') }})
    replace_image: Optional[ReplaceImageRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replaceImage') }})
    replace_named_range_content: Optional[ReplaceNamedRangeContentRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replaceNamedRangeContent') }})
    unmerge_table_cells: Optional[UnmergeTableCellsRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unmergeTableCells') }})
    update_document_style: Optional[UpdateDocumentStyleRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateDocumentStyle') }})
    update_paragraph_style: Optional[UpdateParagraphStyleRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateParagraphStyle') }})
    update_section_style: Optional[UpdateSectionStyleRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateSectionStyle') }})
    update_table_cell_style: Optional[UpdateTableCellStyleRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTableCellStyle') }})
    update_table_column_properties: Optional[UpdateTableColumnPropertiesRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTableColumnProperties') }})
    update_table_row_style: Optional[UpdateTableRowStyleRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTableRowStyle') }})
    update_text_style: Optional[UpdateTextStyleRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTextStyle') }})
    
