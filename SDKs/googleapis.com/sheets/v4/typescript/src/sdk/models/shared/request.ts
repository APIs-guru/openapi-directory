import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AddBandingRequest } from "./addbandingrequest";
import { AddChartRequest } from "./addchartrequest";
import { AddConditionalFormatRuleRequest } from "./addconditionalformatrulerequest";
import { AddDataSourceRequest } from "./adddatasourcerequest";
import { AddDimensionGroupRequest } from "./adddimensiongrouprequest";
import { AddFilterViewRequest } from "./addfilterviewrequest";
import { AddNamedRangeRequest } from "./addnamedrangerequest";
import { AddProtectedRangeRequest } from "./addprotectedrangerequest";
import { AddSheetRequest } from "./addsheetrequest";
import { AddSlicerRequest } from "./addslicerrequest";
import { AppendCellsRequest } from "./appendcellsrequest";
import { AppendDimensionRequest } from "./appenddimensionrequest";
import { AutoFillRequest } from "./autofillrequest";
import { AutoResizeDimensionsRequest } from "./autoresizedimensionsrequest";
import { ClearBasicFilterRequest } from "./clearbasicfilterrequest";
import { CopyPasteRequest } from "./copypasterequest";
import { CreateDeveloperMetadataRequest } from "./createdevelopermetadatarequest";
import { CutPasteRequest } from "./cutpasterequest";
import { DeleteBandingRequest } from "./deletebandingrequest";
import { DeleteConditionalFormatRuleRequest } from "./deleteconditionalformatrulerequest";
import { DeleteDataSourceRequest } from "./deletedatasourcerequest";
import { DeleteDeveloperMetadataRequest } from "./deletedevelopermetadatarequest";
import { DeleteDimensionRequest } from "./deletedimensionrequest";
import { DeleteDimensionGroupRequest } from "./deletedimensiongrouprequest";
import { DeleteDuplicatesRequest } from "./deleteduplicatesrequest";
import { DeleteEmbeddedObjectRequest } from "./deleteembeddedobjectrequest";
import { DeleteFilterViewRequest } from "./deletefilterviewrequest";
import { DeleteNamedRangeRequest } from "./deletenamedrangerequest";
import { DeleteProtectedRangeRequest } from "./deleteprotectedrangerequest";
import { DeleteRangeRequest } from "./deleterangerequest";
import { DeleteSheetRequest } from "./deletesheetrequest";
import { DuplicateFilterViewRequest } from "./duplicatefilterviewrequest";
import { DuplicateSheetRequest } from "./duplicatesheetrequest";
import { FindReplaceRequest } from "./findreplacerequest";
import { InsertDimensionRequest } from "./insertdimensionrequest";
import { InsertRangeRequest } from "./insertrangerequest";
import { MergeCellsRequest } from "./mergecellsrequest";
import { MoveDimensionRequest } from "./movedimensionrequest";
import { PasteDataRequest } from "./pastedatarequest";
import { RandomizeRangeRequest } from "./randomizerangerequest";
import { RefreshDataSourceRequest } from "./refreshdatasourcerequest";
import { RepeatCellRequest } from "./repeatcellrequest";
import { SetBasicFilterRequest } from "./setbasicfilterrequest";
import { SetDataValidationRequest } from "./setdatavalidationrequest";
import { SortRangeRequest } from "./sortrangerequest";
import { TextToColumnsRequest } from "./texttocolumnsrequest";
import { TrimWhitespaceRequest } from "./trimwhitespacerequest";
import { UnmergeCellsRequest } from "./unmergecellsrequest";
import { UpdateBandingRequest } from "./updatebandingrequest";
import { UpdateBordersRequest } from "./updatebordersrequest";
import { UpdateCellsRequest } from "./updatecellsrequest";
import { UpdateChartSpecRequest } from "./updatechartspecrequest";
import { UpdateConditionalFormatRuleRequest } from "./updateconditionalformatrulerequest";
import { UpdateDataSourceRequest } from "./updatedatasourcerequest";
import { UpdateDeveloperMetadataRequest } from "./updatedevelopermetadatarequest";
import { UpdateDimensionGroupRequest } from "./updatedimensiongrouprequest";
import { UpdateDimensionPropertiesRequest } from "./updatedimensionpropertiesrequest";
import { UpdateEmbeddedObjectBorderRequest } from "./updateembeddedobjectborderrequest";
import { UpdateEmbeddedObjectPositionRequest } from "./updateembeddedobjectpositionrequest";
import { UpdateFilterViewRequest } from "./updatefilterviewrequest";
import { UpdateNamedRangeRequest } from "./updatenamedrangerequest";
import { UpdateProtectedRangeRequest } from "./updateprotectedrangerequest";
import { UpdateSheetPropertiesRequest } from "./updatesheetpropertiesrequest";
import { UpdateSlicerSpecRequest } from "./updateslicerspecrequest";
import { UpdateSpreadsheetPropertiesRequest } from "./updatespreadsheetpropertiesrequest";



// Request
/** 
 * A single kind of update to apply to a spreadsheet.
**/
export class Request extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addBanding" })
  addBanding?: AddBandingRequest;

  @SpeakeasyMetadata({ data: "json, name=addChart" })
  addChart?: AddChartRequest;

  @SpeakeasyMetadata({ data: "json, name=addConditionalFormatRule" })
  addConditionalFormatRule?: AddConditionalFormatRuleRequest;

  @SpeakeasyMetadata({ data: "json, name=addDataSource" })
  addDataSource?: AddDataSourceRequest;

  @SpeakeasyMetadata({ data: "json, name=addDimensionGroup" })
  addDimensionGroup?: AddDimensionGroupRequest;

  @SpeakeasyMetadata({ data: "json, name=addFilterView" })
  addFilterView?: AddFilterViewRequest;

  @SpeakeasyMetadata({ data: "json, name=addNamedRange" })
  addNamedRange?: AddNamedRangeRequest;

  @SpeakeasyMetadata({ data: "json, name=addProtectedRange" })
  addProtectedRange?: AddProtectedRangeRequest;

  @SpeakeasyMetadata({ data: "json, name=addSheet" })
  addSheet?: AddSheetRequest;

  @SpeakeasyMetadata({ data: "json, name=addSlicer" })
  addSlicer?: AddSlicerRequest;

  @SpeakeasyMetadata({ data: "json, name=appendCells" })
  appendCells?: AppendCellsRequest;

  @SpeakeasyMetadata({ data: "json, name=appendDimension" })
  appendDimension?: AppendDimensionRequest;

  @SpeakeasyMetadata({ data: "json, name=autoFill" })
  autoFill?: AutoFillRequest;

  @SpeakeasyMetadata({ data: "json, name=autoResizeDimensions" })
  autoResizeDimensions?: AutoResizeDimensionsRequest;

  @SpeakeasyMetadata({ data: "json, name=clearBasicFilter" })
  clearBasicFilter?: ClearBasicFilterRequest;

  @SpeakeasyMetadata({ data: "json, name=copyPaste" })
  copyPaste?: CopyPasteRequest;

  @SpeakeasyMetadata({ data: "json, name=createDeveloperMetadata" })
  createDeveloperMetadata?: CreateDeveloperMetadataRequest;

  @SpeakeasyMetadata({ data: "json, name=cutPaste" })
  cutPaste?: CutPasteRequest;

  @SpeakeasyMetadata({ data: "json, name=deleteBanding" })
  deleteBanding?: DeleteBandingRequest;

  @SpeakeasyMetadata({ data: "json, name=deleteConditionalFormatRule" })
  deleteConditionalFormatRule?: DeleteConditionalFormatRuleRequest;

  @SpeakeasyMetadata({ data: "json, name=deleteDataSource" })
  deleteDataSource?: DeleteDataSourceRequest;

  @SpeakeasyMetadata({ data: "json, name=deleteDeveloperMetadata" })
  deleteDeveloperMetadata?: DeleteDeveloperMetadataRequest;

  @SpeakeasyMetadata({ data: "json, name=deleteDimension" })
  deleteDimension?: DeleteDimensionRequest;

  @SpeakeasyMetadata({ data: "json, name=deleteDimensionGroup" })
  deleteDimensionGroup?: DeleteDimensionGroupRequest;

  @SpeakeasyMetadata({ data: "json, name=deleteDuplicates" })
  deleteDuplicates?: DeleteDuplicatesRequest;

  @SpeakeasyMetadata({ data: "json, name=deleteEmbeddedObject" })
  deleteEmbeddedObject?: DeleteEmbeddedObjectRequest;

  @SpeakeasyMetadata({ data: "json, name=deleteFilterView" })
  deleteFilterView?: DeleteFilterViewRequest;

  @SpeakeasyMetadata({ data: "json, name=deleteNamedRange" })
  deleteNamedRange?: DeleteNamedRangeRequest;

  @SpeakeasyMetadata({ data: "json, name=deleteProtectedRange" })
  deleteProtectedRange?: DeleteProtectedRangeRequest;

  @SpeakeasyMetadata({ data: "json, name=deleteRange" })
  deleteRange?: DeleteRangeRequest;

  @SpeakeasyMetadata({ data: "json, name=deleteSheet" })
  deleteSheet?: DeleteSheetRequest;

  @SpeakeasyMetadata({ data: "json, name=duplicateFilterView" })
  duplicateFilterView?: DuplicateFilterViewRequest;

  @SpeakeasyMetadata({ data: "json, name=duplicateSheet" })
  duplicateSheet?: DuplicateSheetRequest;

  @SpeakeasyMetadata({ data: "json, name=findReplace" })
  findReplace?: FindReplaceRequest;

  @SpeakeasyMetadata({ data: "json, name=insertDimension" })
  insertDimension?: InsertDimensionRequest;

  @SpeakeasyMetadata({ data: "json, name=insertRange" })
  insertRange?: InsertRangeRequest;

  @SpeakeasyMetadata({ data: "json, name=mergeCells" })
  mergeCells?: MergeCellsRequest;

  @SpeakeasyMetadata({ data: "json, name=moveDimension" })
  moveDimension?: MoveDimensionRequest;

  @SpeakeasyMetadata({ data: "json, name=pasteData" })
  pasteData?: PasteDataRequest;

  @SpeakeasyMetadata({ data: "json, name=randomizeRange" })
  randomizeRange?: RandomizeRangeRequest;

  @SpeakeasyMetadata({ data: "json, name=refreshDataSource" })
  refreshDataSource?: RefreshDataSourceRequest;

  @SpeakeasyMetadata({ data: "json, name=repeatCell" })
  repeatCell?: RepeatCellRequest;

  @SpeakeasyMetadata({ data: "json, name=setBasicFilter" })
  setBasicFilter?: SetBasicFilterRequest;

  @SpeakeasyMetadata({ data: "json, name=setDataValidation" })
  setDataValidation?: SetDataValidationRequest;

  @SpeakeasyMetadata({ data: "json, name=sortRange" })
  sortRange?: SortRangeRequest;

  @SpeakeasyMetadata({ data: "json, name=textToColumns" })
  textToColumns?: TextToColumnsRequest;

  @SpeakeasyMetadata({ data: "json, name=trimWhitespace" })
  trimWhitespace?: TrimWhitespaceRequest;

  @SpeakeasyMetadata({ data: "json, name=unmergeCells" })
  unmergeCells?: UnmergeCellsRequest;

  @SpeakeasyMetadata({ data: "json, name=updateBanding" })
  updateBanding?: UpdateBandingRequest;

  @SpeakeasyMetadata({ data: "json, name=updateBorders" })
  updateBorders?: UpdateBordersRequest;

  @SpeakeasyMetadata({ data: "json, name=updateCells" })
  updateCells?: UpdateCellsRequest;

  @SpeakeasyMetadata({ data: "json, name=updateChartSpec" })
  updateChartSpec?: UpdateChartSpecRequest;

  @SpeakeasyMetadata({ data: "json, name=updateConditionalFormatRule" })
  updateConditionalFormatRule?: UpdateConditionalFormatRuleRequest;

  @SpeakeasyMetadata({ data: "json, name=updateDataSource" })
  updateDataSource?: UpdateDataSourceRequest;

  @SpeakeasyMetadata({ data: "json, name=updateDeveloperMetadata" })
  updateDeveloperMetadata?: UpdateDeveloperMetadataRequest;

  @SpeakeasyMetadata({ data: "json, name=updateDimensionGroup" })
  updateDimensionGroup?: UpdateDimensionGroupRequest;

  @SpeakeasyMetadata({ data: "json, name=updateDimensionProperties" })
  updateDimensionProperties?: UpdateDimensionPropertiesRequest;

  @SpeakeasyMetadata({ data: "json, name=updateEmbeddedObjectBorder" })
  updateEmbeddedObjectBorder?: UpdateEmbeddedObjectBorderRequest;

  @SpeakeasyMetadata({ data: "json, name=updateEmbeddedObjectPosition" })
  updateEmbeddedObjectPosition?: UpdateEmbeddedObjectPositionRequest;

  @SpeakeasyMetadata({ data: "json, name=updateFilterView" })
  updateFilterView?: UpdateFilterViewRequest;

  @SpeakeasyMetadata({ data: "json, name=updateNamedRange" })
  updateNamedRange?: UpdateNamedRangeRequest;

  @SpeakeasyMetadata({ data: "json, name=updateProtectedRange" })
  updateProtectedRange?: UpdateProtectedRangeRequest;

  @SpeakeasyMetadata({ data: "json, name=updateSheetProperties" })
  updateSheetProperties?: UpdateSheetPropertiesRequest;

  @SpeakeasyMetadata({ data: "json, name=updateSlicerSpec" })
  updateSlicerSpec?: UpdateSlicerSpecRequest;

  @SpeakeasyMetadata({ data: "json, name=updateSpreadsheetProperties" })
  updateSpreadsheetProperties?: UpdateSpreadsheetPropertiesRequest;
}
