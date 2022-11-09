import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=createFooter" })
  createFooter?: CreateFooterRequest;

  @Metadata({ data: "json, name=createFootnote" })
  createFootnote?: CreateFootnoteRequest;

  @Metadata({ data: "json, name=createHeader" })
  createHeader?: CreateHeaderRequest;

  @Metadata({ data: "json, name=createNamedRange" })
  createNamedRange?: CreateNamedRangeRequest;

  @Metadata({ data: "json, name=createParagraphBullets" })
  createParagraphBullets?: CreateParagraphBulletsRequest;

  @Metadata({ data: "json, name=deleteContentRange" })
  deleteContentRange?: DeleteContentRangeRequest;

  @Metadata({ data: "json, name=deleteFooter" })
  deleteFooter?: DeleteFooterRequest;

  @Metadata({ data: "json, name=deleteHeader" })
  deleteHeader?: DeleteHeaderRequest;

  @Metadata({ data: "json, name=deleteNamedRange" })
  deleteNamedRange?: DeleteNamedRangeRequest;

  @Metadata({ data: "json, name=deleteParagraphBullets" })
  deleteParagraphBullets?: DeleteParagraphBulletsRequest;

  @Metadata({ data: "json, name=deletePositionedObject" })
  deletePositionedObject?: DeletePositionedObjectRequest;

  @Metadata({ data: "json, name=deleteTableColumn" })
  deleteTableColumn?: DeleteTableColumnRequest;

  @Metadata({ data: "json, name=deleteTableRow" })
  deleteTableRow?: DeleteTableRowRequest;

  @Metadata({ data: "json, name=insertInlineImage" })
  insertInlineImage?: InsertInlineImageRequest;

  @Metadata({ data: "json, name=insertPageBreak" })
  insertPageBreak?: InsertPageBreakRequest;

  @Metadata({ data: "json, name=insertSectionBreak" })
  insertSectionBreak?: InsertSectionBreakRequest;

  @Metadata({ data: "json, name=insertTable" })
  insertTable?: InsertTableRequest;

  @Metadata({ data: "json, name=insertTableColumn" })
  insertTableColumn?: InsertTableColumnRequest;

  @Metadata({ data: "json, name=insertTableRow" })
  insertTableRow?: InsertTableRowRequest;

  @Metadata({ data: "json, name=insertText" })
  insertText?: InsertTextRequest;

  @Metadata({ data: "json, name=mergeTableCells" })
  mergeTableCells?: MergeTableCellsRequest;

  @Metadata({ data: "json, name=pinTableHeaderRows" })
  pinTableHeaderRows?: PinTableHeaderRowsRequest;

  @Metadata({ data: "json, name=replaceAllText" })
  replaceAllText?: ReplaceAllTextRequest;

  @Metadata({ data: "json, name=replaceImage" })
  replaceImage?: ReplaceImageRequest;

  @Metadata({ data: "json, name=replaceNamedRangeContent" })
  replaceNamedRangeContent?: ReplaceNamedRangeContentRequest;

  @Metadata({ data: "json, name=unmergeTableCells" })
  unmergeTableCells?: UnmergeTableCellsRequest;

  @Metadata({ data: "json, name=updateDocumentStyle" })
  updateDocumentStyle?: UpdateDocumentStyleRequest;

  @Metadata({ data: "json, name=updateParagraphStyle" })
  updateParagraphStyle?: UpdateParagraphStyleRequest;

  @Metadata({ data: "json, name=updateSectionStyle" })
  updateSectionStyle?: UpdateSectionStyleRequest;

  @Metadata({ data: "json, name=updateTableCellStyle" })
  updateTableCellStyle?: UpdateTableCellStyleRequest;

  @Metadata({ data: "json, name=updateTableColumnProperties" })
  updateTableColumnProperties?: UpdateTableColumnPropertiesRequest;

  @Metadata({ data: "json, name=updateTableRowStyle" })
  updateTableRowStyle?: UpdateTableRowStyleRequest;

  @Metadata({ data: "json, name=updateTextStyle" })
  updateTextStyle?: UpdateTextStyleRequest;
}
