import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateFooterRequest } from "./createfooterrequest";
import { CreateFootnoteRequest } from "./createfootnoterequest";
import { CreateHeaderRequest } from "./createheaderrequest";
import { CreateNamedRangeRequest } from "./createnamedrangerequest";
import { CreateParagraphBulletsRequest } from "./createparagraphbulletsrequest";
import { DeleteContentRangeRequest } from "./deletecontentrangerequest";
import { DeleteFooterRequest } from "./deletefooterrequest";
import { DeleteHeaderRequest } from "./deleteheaderrequest";
import { DeleteNamedRangeRequest } from "./deletenamedrangerequest";
import { DeleteParagraphBulletsRequest } from "./deleteparagraphbulletsrequest";
import { DeletePositionedObjectRequest } from "./deletepositionedobjectrequest";
import { DeleteTableColumnRequest } from "./deletetablecolumnrequest";
import { DeleteTableRowRequest } from "./deletetablerowrequest";
import { InsertInlineImageRequest } from "./insertinlineimagerequest";
import { InsertPageBreakRequest } from "./insertpagebreakrequest";
import { InsertSectionBreakRequest } from "./insertsectionbreakrequest";
import { InsertTableRequest } from "./inserttablerequest";
import { InsertTableColumnRequest } from "./inserttablecolumnrequest";
import { InsertTableRowRequest } from "./inserttablerowrequest";
import { InsertTextRequest } from "./inserttextrequest";
import { MergeTableCellsRequest } from "./mergetablecellsrequest";
import { PinTableHeaderRowsRequest } from "./pintableheaderrowsrequest";
import { ReplaceAllTextRequest } from "./replacealltextrequest";
import { ReplaceImageRequest } from "./replaceimagerequest";
import { ReplaceNamedRangeContentRequest } from "./replacenamedrangecontentrequest";
import { UnmergeTableCellsRequest } from "./unmergetablecellsrequest";
import { UpdateDocumentStyleRequest } from "./updatedocumentstylerequest";
import { UpdateParagraphStyleRequest } from "./updateparagraphstylerequest";
import { UpdateSectionStyleRequest } from "./updatesectionstylerequest";
import { UpdateTableCellStyleRequest } from "./updatetablecellstylerequest";
import { UpdateTableColumnPropertiesRequest } from "./updatetablecolumnpropertiesrequest";
import { UpdateTableRowStyleRequest } from "./updatetablerowstylerequest";
import { UpdateTextStyleRequest } from "./updatetextstylerequest";



// Request
/** 
 * A single update to apply to a document.
**/
export class Request extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createFooter" })
  createFooter?: CreateFooterRequest;

  @SpeakeasyMetadata({ data: "json, name=createFootnote" })
  createFootnote?: CreateFootnoteRequest;

  @SpeakeasyMetadata({ data: "json, name=createHeader" })
  createHeader?: CreateHeaderRequest;

  @SpeakeasyMetadata({ data: "json, name=createNamedRange" })
  createNamedRange?: CreateNamedRangeRequest;

  @SpeakeasyMetadata({ data: "json, name=createParagraphBullets" })
  createParagraphBullets?: CreateParagraphBulletsRequest;

  @SpeakeasyMetadata({ data: "json, name=deleteContentRange" })
  deleteContentRange?: DeleteContentRangeRequest;

  @SpeakeasyMetadata({ data: "json, name=deleteFooter" })
  deleteFooter?: DeleteFooterRequest;

  @SpeakeasyMetadata({ data: "json, name=deleteHeader" })
  deleteHeader?: DeleteHeaderRequest;

  @SpeakeasyMetadata({ data: "json, name=deleteNamedRange" })
  deleteNamedRange?: DeleteNamedRangeRequest;

  @SpeakeasyMetadata({ data: "json, name=deleteParagraphBullets" })
  deleteParagraphBullets?: DeleteParagraphBulletsRequest;

  @SpeakeasyMetadata({ data: "json, name=deletePositionedObject" })
  deletePositionedObject?: DeletePositionedObjectRequest;

  @SpeakeasyMetadata({ data: "json, name=deleteTableColumn" })
  deleteTableColumn?: DeleteTableColumnRequest;

  @SpeakeasyMetadata({ data: "json, name=deleteTableRow" })
  deleteTableRow?: DeleteTableRowRequest;

  @SpeakeasyMetadata({ data: "json, name=insertInlineImage" })
  insertInlineImage?: InsertInlineImageRequest;

  @SpeakeasyMetadata({ data: "json, name=insertPageBreak" })
  insertPageBreak?: InsertPageBreakRequest;

  @SpeakeasyMetadata({ data: "json, name=insertSectionBreak" })
  insertSectionBreak?: InsertSectionBreakRequest;

  @SpeakeasyMetadata({ data: "json, name=insertTable" })
  insertTable?: InsertTableRequest;

  @SpeakeasyMetadata({ data: "json, name=insertTableColumn" })
  insertTableColumn?: InsertTableColumnRequest;

  @SpeakeasyMetadata({ data: "json, name=insertTableRow" })
  insertTableRow?: InsertTableRowRequest;

  @SpeakeasyMetadata({ data: "json, name=insertText" })
  insertText?: InsertTextRequest;

  @SpeakeasyMetadata({ data: "json, name=mergeTableCells" })
  mergeTableCells?: MergeTableCellsRequest;

  @SpeakeasyMetadata({ data: "json, name=pinTableHeaderRows" })
  pinTableHeaderRows?: PinTableHeaderRowsRequest;

  @SpeakeasyMetadata({ data: "json, name=replaceAllText" })
  replaceAllText?: ReplaceAllTextRequest;

  @SpeakeasyMetadata({ data: "json, name=replaceImage" })
  replaceImage?: ReplaceImageRequest;

  @SpeakeasyMetadata({ data: "json, name=replaceNamedRangeContent" })
  replaceNamedRangeContent?: ReplaceNamedRangeContentRequest;

  @SpeakeasyMetadata({ data: "json, name=unmergeTableCells" })
  unmergeTableCells?: UnmergeTableCellsRequest;

  @SpeakeasyMetadata({ data: "json, name=updateDocumentStyle" })
  updateDocumentStyle?: UpdateDocumentStyleRequest;

  @SpeakeasyMetadata({ data: "json, name=updateParagraphStyle" })
  updateParagraphStyle?: UpdateParagraphStyleRequest;

  @SpeakeasyMetadata({ data: "json, name=updateSectionStyle" })
  updateSectionStyle?: UpdateSectionStyleRequest;

  @SpeakeasyMetadata({ data: "json, name=updateTableCellStyle" })
  updateTableCellStyle?: UpdateTableCellStyleRequest;

  @SpeakeasyMetadata({ data: "json, name=updateTableColumnProperties" })
  updateTableColumnProperties?: UpdateTableColumnPropertiesRequest;

  @SpeakeasyMetadata({ data: "json, name=updateTableRowStyle" })
  updateTableRowStyle?: UpdateTableRowStyleRequest;

  @SpeakeasyMetadata({ data: "json, name=updateTextStyle" })
  updateTextStyle?: UpdateTextStyleRequest;
}
