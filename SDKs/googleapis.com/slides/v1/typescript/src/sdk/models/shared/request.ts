import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CreateImageRequest } from "./createimagerequest";
import { CreateLineRequest } from "./createlinerequest";
import { CreateParagraphBulletsRequest } from "./createparagraphbulletsrequest";
import { CreateShapeRequest } from "./createshaperequest";
import { CreateSheetsChartRequest } from "./createsheetschartrequest";
import { CreateSlideRequest } from "./createsliderequest";
import { CreateTableRequest } from "./createtablerequest";
import { CreateVideoRequest } from "./createvideorequest";
import { DeleteObjectRequest } from "./deleteobjectrequest";
import { DeleteParagraphBulletsRequest } from "./deleteparagraphbulletsrequest";
import { DeleteTableColumnRequest } from "./deletetablecolumnrequest";
import { DeleteTableRowRequest } from "./deletetablerowrequest";
import { DeleteTextRequest } from "./deletetextrequest";
import { DuplicateObjectRequest } from "./duplicateobjectrequest";
import { GroupObjectsRequest } from "./groupobjectsrequest";
import { InsertTableColumnsRequest } from "./inserttablecolumnsrequest";
import { InsertTableRowsRequest } from "./inserttablerowsrequest";
import { InsertTextRequest } from "./inserttextrequest";
import { MergeTableCellsRequest } from "./mergetablecellsrequest";
import { RefreshSheetsChartRequest } from "./refreshsheetschartrequest";
import { ReplaceAllShapesWithImageRequest } from "./replaceallshapeswithimagerequest";
import { ReplaceAllShapesWithSheetsChartRequest } from "./replaceallshapeswithsheetschartrequest";
import { ReplaceAllTextRequest } from "./replacealltextrequest";
import { ReplaceImageRequest } from "./replaceimagerequest";
import { RerouteLineRequest } from "./reroutelinerequest";
import { UngroupObjectsRequest } from "./ungroupobjectsrequest";
import { UnmergeTableCellsRequest } from "./unmergetablecellsrequest";
import { UpdateImagePropertiesRequest } from "./updateimagepropertiesrequest";
import { UpdateLineCategoryRequest } from "./updatelinecategoryrequest";
import { UpdateLinePropertiesRequest } from "./updatelinepropertiesrequest";
import { UpdatePageElementAltTextRequest } from "./updatepageelementalttextrequest";
import { UpdatePageElementTransformRequest } from "./updatepageelementtransformrequest";
import { UpdatePageElementsZOrderRequest } from "./updatepageelementszorderrequest";
import { UpdatePagePropertiesRequest } from "./updatepagepropertiesrequest";
import { UpdateParagraphStyleRequest } from "./updateparagraphstylerequest";
import { UpdateShapePropertiesRequest } from "./updateshapepropertiesrequest";
import { UpdateSlidePropertiesRequest } from "./updateslidepropertiesrequest";
import { UpdateSlidesPositionRequest } from "./updateslidespositionrequest";
import { UpdateTableBorderPropertiesRequest } from "./updatetableborderpropertiesrequest";
import { UpdateTableCellPropertiesRequest } from "./updatetablecellpropertiesrequest";
import { UpdateTableColumnPropertiesRequest } from "./updatetablecolumnpropertiesrequest";
import { UpdateTableRowPropertiesRequest } from "./updatetablerowpropertiesrequest";
import { UpdateTextStyleRequest } from "./updatetextstylerequest";
import { UpdateVideoPropertiesRequest } from "./updatevideopropertiesrequest";


// Request
/** 
 * A single kind of update to apply to a presentation.
**/
export class Request extends SpeakeasyBase {
  @Metadata({ data: "json, name=createImage" })
  createImage?: CreateImageRequest;

  @Metadata({ data: "json, name=createLine" })
  createLine?: CreateLineRequest;

  @Metadata({ data: "json, name=createParagraphBullets" })
  createParagraphBullets?: CreateParagraphBulletsRequest;

  @Metadata({ data: "json, name=createShape" })
  createShape?: CreateShapeRequest;

  @Metadata({ data: "json, name=createSheetsChart" })
  createSheetsChart?: CreateSheetsChartRequest;

  @Metadata({ data: "json, name=createSlide" })
  createSlide?: CreateSlideRequest;

  @Metadata({ data: "json, name=createTable" })
  createTable?: CreateTableRequest;

  @Metadata({ data: "json, name=createVideo" })
  createVideo?: CreateVideoRequest;

  @Metadata({ data: "json, name=deleteObject" })
  deleteObject?: DeleteObjectRequest;

  @Metadata({ data: "json, name=deleteParagraphBullets" })
  deleteParagraphBullets?: DeleteParagraphBulletsRequest;

  @Metadata({ data: "json, name=deleteTableColumn" })
  deleteTableColumn?: DeleteTableColumnRequest;

  @Metadata({ data: "json, name=deleteTableRow" })
  deleteTableRow?: DeleteTableRowRequest;

  @Metadata({ data: "json, name=deleteText" })
  deleteText?: DeleteTextRequest;

  @Metadata({ data: "json, name=duplicateObject" })
  duplicateObject?: DuplicateObjectRequest;

  @Metadata({ data: "json, name=groupObjects" })
  groupObjects?: GroupObjectsRequest;

  @Metadata({ data: "json, name=insertTableColumns" })
  insertTableColumns?: InsertTableColumnsRequest;

  @Metadata({ data: "json, name=insertTableRows" })
  insertTableRows?: InsertTableRowsRequest;

  @Metadata({ data: "json, name=insertText" })
  insertText?: InsertTextRequest;

  @Metadata({ data: "json, name=mergeTableCells" })
  mergeTableCells?: MergeTableCellsRequest;

  @Metadata({ data: "json, name=refreshSheetsChart" })
  refreshSheetsChart?: RefreshSheetsChartRequest;

  @Metadata({ data: "json, name=replaceAllShapesWithImage" })
  replaceAllShapesWithImage?: ReplaceAllShapesWithImageRequest;

  @Metadata({ data: "json, name=replaceAllShapesWithSheetsChart" })
  replaceAllShapesWithSheetsChart?: ReplaceAllShapesWithSheetsChartRequest;

  @Metadata({ data: "json, name=replaceAllText" })
  replaceAllText?: ReplaceAllTextRequest;

  @Metadata({ data: "json, name=replaceImage" })
  replaceImage?: ReplaceImageRequest;

  @Metadata({ data: "json, name=rerouteLine" })
  rerouteLine?: RerouteLineRequest;

  @Metadata({ data: "json, name=ungroupObjects" })
  ungroupObjects?: UngroupObjectsRequest;

  @Metadata({ data: "json, name=unmergeTableCells" })
  unmergeTableCells?: UnmergeTableCellsRequest;

  @Metadata({ data: "json, name=updateImageProperties" })
  updateImageProperties?: UpdateImagePropertiesRequest;

  @Metadata({ data: "json, name=updateLineCategory" })
  updateLineCategory?: UpdateLineCategoryRequest;

  @Metadata({ data: "json, name=updateLineProperties" })
  updateLineProperties?: UpdateLinePropertiesRequest;

  @Metadata({ data: "json, name=updatePageElementAltText" })
  updatePageElementAltText?: UpdatePageElementAltTextRequest;

  @Metadata({ data: "json, name=updatePageElementTransform" })
  updatePageElementTransform?: UpdatePageElementTransformRequest;

  @Metadata({ data: "json, name=updatePageElementsZOrder" })
  updatePageElementsZOrder?: UpdatePageElementsZOrderRequest;

  @Metadata({ data: "json, name=updatePageProperties" })
  updatePageProperties?: UpdatePagePropertiesRequest;

  @Metadata({ data: "json, name=updateParagraphStyle" })
  updateParagraphStyle?: UpdateParagraphStyleRequest;

  @Metadata({ data: "json, name=updateShapeProperties" })
  updateShapeProperties?: UpdateShapePropertiesRequest;

  @Metadata({ data: "json, name=updateSlideProperties" })
  updateSlideProperties?: UpdateSlidePropertiesRequest;

  @Metadata({ data: "json, name=updateSlidesPosition" })
  updateSlidesPosition?: UpdateSlidesPositionRequest;

  @Metadata({ data: "json, name=updateTableBorderProperties" })
  updateTableBorderProperties?: UpdateTableBorderPropertiesRequest;

  @Metadata({ data: "json, name=updateTableCellProperties" })
  updateTableCellProperties?: UpdateTableCellPropertiesRequest;

  @Metadata({ data: "json, name=updateTableColumnProperties" })
  updateTableColumnProperties?: UpdateTableColumnPropertiesRequest;

  @Metadata({ data: "json, name=updateTableRowProperties" })
  updateTableRowProperties?: UpdateTableRowPropertiesRequest;

  @Metadata({ data: "json, name=updateTextStyle" })
  updateTextStyle?: UpdateTextStyleRequest;

  @Metadata({ data: "json, name=updateVideoProperties" })
  updateVideoProperties?: UpdateVideoPropertiesRequest;
}
