import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=createImage" })
  createImage?: CreateImageRequest;

  @SpeakeasyMetadata({ data: "json, name=createLine" })
  createLine?: CreateLineRequest;

  @SpeakeasyMetadata({ data: "json, name=createParagraphBullets" })
  createParagraphBullets?: CreateParagraphBulletsRequest;

  @SpeakeasyMetadata({ data: "json, name=createShape" })
  createShape?: CreateShapeRequest;

  @SpeakeasyMetadata({ data: "json, name=createSheetsChart" })
  createSheetsChart?: CreateSheetsChartRequest;

  @SpeakeasyMetadata({ data: "json, name=createSlide" })
  createSlide?: CreateSlideRequest;

  @SpeakeasyMetadata({ data: "json, name=createTable" })
  createTable?: CreateTableRequest;

  @SpeakeasyMetadata({ data: "json, name=createVideo" })
  createVideo?: CreateVideoRequest;

  @SpeakeasyMetadata({ data: "json, name=deleteObject" })
  deleteObject?: DeleteObjectRequest;

  @SpeakeasyMetadata({ data: "json, name=deleteParagraphBullets" })
  deleteParagraphBullets?: DeleteParagraphBulletsRequest;

  @SpeakeasyMetadata({ data: "json, name=deleteTableColumn" })
  deleteTableColumn?: DeleteTableColumnRequest;

  @SpeakeasyMetadata({ data: "json, name=deleteTableRow" })
  deleteTableRow?: DeleteTableRowRequest;

  @SpeakeasyMetadata({ data: "json, name=deleteText" })
  deleteText?: DeleteTextRequest;

  @SpeakeasyMetadata({ data: "json, name=duplicateObject" })
  duplicateObject?: DuplicateObjectRequest;

  @SpeakeasyMetadata({ data: "json, name=groupObjects" })
  groupObjects?: GroupObjectsRequest;

  @SpeakeasyMetadata({ data: "json, name=insertTableColumns" })
  insertTableColumns?: InsertTableColumnsRequest;

  @SpeakeasyMetadata({ data: "json, name=insertTableRows" })
  insertTableRows?: InsertTableRowsRequest;

  @SpeakeasyMetadata({ data: "json, name=insertText" })
  insertText?: InsertTextRequest;

  @SpeakeasyMetadata({ data: "json, name=mergeTableCells" })
  mergeTableCells?: MergeTableCellsRequest;

  @SpeakeasyMetadata({ data: "json, name=refreshSheetsChart" })
  refreshSheetsChart?: RefreshSheetsChartRequest;

  @SpeakeasyMetadata({ data: "json, name=replaceAllShapesWithImage" })
  replaceAllShapesWithImage?: ReplaceAllShapesWithImageRequest;

  @SpeakeasyMetadata({ data: "json, name=replaceAllShapesWithSheetsChart" })
  replaceAllShapesWithSheetsChart?: ReplaceAllShapesWithSheetsChartRequest;

  @SpeakeasyMetadata({ data: "json, name=replaceAllText" })
  replaceAllText?: ReplaceAllTextRequest;

  @SpeakeasyMetadata({ data: "json, name=replaceImage" })
  replaceImage?: ReplaceImageRequest;

  @SpeakeasyMetadata({ data: "json, name=rerouteLine" })
  rerouteLine?: RerouteLineRequest;

  @SpeakeasyMetadata({ data: "json, name=ungroupObjects" })
  ungroupObjects?: UngroupObjectsRequest;

  @SpeakeasyMetadata({ data: "json, name=unmergeTableCells" })
  unmergeTableCells?: UnmergeTableCellsRequest;

  @SpeakeasyMetadata({ data: "json, name=updateImageProperties" })
  updateImageProperties?: UpdateImagePropertiesRequest;

  @SpeakeasyMetadata({ data: "json, name=updateLineCategory" })
  updateLineCategory?: UpdateLineCategoryRequest;

  @SpeakeasyMetadata({ data: "json, name=updateLineProperties" })
  updateLineProperties?: UpdateLinePropertiesRequest;

  @SpeakeasyMetadata({ data: "json, name=updatePageElementAltText" })
  updatePageElementAltText?: UpdatePageElementAltTextRequest;

  @SpeakeasyMetadata({ data: "json, name=updatePageElementTransform" })
  updatePageElementTransform?: UpdatePageElementTransformRequest;

  @SpeakeasyMetadata({ data: "json, name=updatePageElementsZOrder" })
  updatePageElementsZOrder?: UpdatePageElementsZOrderRequest;

  @SpeakeasyMetadata({ data: "json, name=updatePageProperties" })
  updatePageProperties?: UpdatePagePropertiesRequest;

  @SpeakeasyMetadata({ data: "json, name=updateParagraphStyle" })
  updateParagraphStyle?: UpdateParagraphStyleRequest;

  @SpeakeasyMetadata({ data: "json, name=updateShapeProperties" })
  updateShapeProperties?: UpdateShapePropertiesRequest;

  @SpeakeasyMetadata({ data: "json, name=updateSlideProperties" })
  updateSlideProperties?: UpdateSlidePropertiesRequest;

  @SpeakeasyMetadata({ data: "json, name=updateSlidesPosition" })
  updateSlidesPosition?: UpdateSlidesPositionRequest;

  @SpeakeasyMetadata({ data: "json, name=updateTableBorderProperties" })
  updateTableBorderProperties?: UpdateTableBorderPropertiesRequest;

  @SpeakeasyMetadata({ data: "json, name=updateTableCellProperties" })
  updateTableCellProperties?: UpdateTableCellPropertiesRequest;

  @SpeakeasyMetadata({ data: "json, name=updateTableColumnProperties" })
  updateTableColumnProperties?: UpdateTableColumnPropertiesRequest;

  @SpeakeasyMetadata({ data: "json, name=updateTableRowProperties" })
  updateTableRowProperties?: UpdateTableRowPropertiesRequest;

  @SpeakeasyMetadata({ data: "json, name=updateTextStyle" })
  updateTextStyle?: UpdateTextStyleRequest;

  @SpeakeasyMetadata({ data: "json, name=updateVideoProperties" })
  updateVideoProperties?: UpdateVideoPropertiesRequest;
}
