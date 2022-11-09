import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=addBanding" })
  addBanding?: AddBandingRequest;

  @Metadata({ data: "json, name=addChart" })
  addChart?: AddChartRequest;

  @Metadata({ data: "json, name=addConditionalFormatRule" })
  addConditionalFormatRule?: AddConditionalFormatRuleRequest;

  @Metadata({ data: "json, name=addDataSource" })
  addDataSource?: AddDataSourceRequest;

  @Metadata({ data: "json, name=addDimensionGroup" })
  addDimensionGroup?: AddDimensionGroupRequest;

  @Metadata({ data: "json, name=addFilterView" })
  addFilterView?: AddFilterViewRequest;

  @Metadata({ data: "json, name=addNamedRange" })
  addNamedRange?: AddNamedRangeRequest;

  @Metadata({ data: "json, name=addProtectedRange" })
  addProtectedRange?: AddProtectedRangeRequest;

  @Metadata({ data: "json, name=addSheet" })
  addSheet?: AddSheetRequest;

  @Metadata({ data: "json, name=addSlicer" })
  addSlicer?: AddSlicerRequest;

  @Metadata({ data: "json, name=appendCells" })
  appendCells?: AppendCellsRequest;

  @Metadata({ data: "json, name=appendDimension" })
  appendDimension?: AppendDimensionRequest;

  @Metadata({ data: "json, name=autoFill" })
  autoFill?: AutoFillRequest;

  @Metadata({ data: "json, name=autoResizeDimensions" })
  autoResizeDimensions?: AutoResizeDimensionsRequest;

  @Metadata({ data: "json, name=clearBasicFilter" })
  clearBasicFilter?: ClearBasicFilterRequest;

  @Metadata({ data: "json, name=copyPaste" })
  copyPaste?: CopyPasteRequest;

  @Metadata({ data: "json, name=createDeveloperMetadata" })
  createDeveloperMetadata?: CreateDeveloperMetadataRequest;

  @Metadata({ data: "json, name=cutPaste" })
  cutPaste?: CutPasteRequest;

  @Metadata({ data: "json, name=deleteBanding" })
  deleteBanding?: DeleteBandingRequest;

  @Metadata({ data: "json, name=deleteConditionalFormatRule" })
  deleteConditionalFormatRule?: DeleteConditionalFormatRuleRequest;

  @Metadata({ data: "json, name=deleteDataSource" })
  deleteDataSource?: DeleteDataSourceRequest;

  @Metadata({ data: "json, name=deleteDeveloperMetadata" })
  deleteDeveloperMetadata?: DeleteDeveloperMetadataRequest;

  @Metadata({ data: "json, name=deleteDimension" })
  deleteDimension?: DeleteDimensionRequest;

  @Metadata({ data: "json, name=deleteDimensionGroup" })
  deleteDimensionGroup?: DeleteDimensionGroupRequest;

  @Metadata({ data: "json, name=deleteDuplicates" })
  deleteDuplicates?: DeleteDuplicatesRequest;

  @Metadata({ data: "json, name=deleteEmbeddedObject" })
  deleteEmbeddedObject?: DeleteEmbeddedObjectRequest;

  @Metadata({ data: "json, name=deleteFilterView" })
  deleteFilterView?: DeleteFilterViewRequest;

  @Metadata({ data: "json, name=deleteNamedRange" })
  deleteNamedRange?: DeleteNamedRangeRequest;

  @Metadata({ data: "json, name=deleteProtectedRange" })
  deleteProtectedRange?: DeleteProtectedRangeRequest;

  @Metadata({ data: "json, name=deleteRange" })
  deleteRange?: DeleteRangeRequest;

  @Metadata({ data: "json, name=deleteSheet" })
  deleteSheet?: DeleteSheetRequest;

  @Metadata({ data: "json, name=duplicateFilterView" })
  duplicateFilterView?: DuplicateFilterViewRequest;

  @Metadata({ data: "json, name=duplicateSheet" })
  duplicateSheet?: DuplicateSheetRequest;

  @Metadata({ data: "json, name=findReplace" })
  findReplace?: FindReplaceRequest;

  @Metadata({ data: "json, name=insertDimension" })
  insertDimension?: InsertDimensionRequest;

  @Metadata({ data: "json, name=insertRange" })
  insertRange?: InsertRangeRequest;

  @Metadata({ data: "json, name=mergeCells" })
  mergeCells?: MergeCellsRequest;

  @Metadata({ data: "json, name=moveDimension" })
  moveDimension?: MoveDimensionRequest;

  @Metadata({ data: "json, name=pasteData" })
  pasteData?: PasteDataRequest;

  @Metadata({ data: "json, name=randomizeRange" })
  randomizeRange?: RandomizeRangeRequest;

  @Metadata({ data: "json, name=refreshDataSource" })
  refreshDataSource?: RefreshDataSourceRequest;

  @Metadata({ data: "json, name=repeatCell" })
  repeatCell?: RepeatCellRequest;

  @Metadata({ data: "json, name=setBasicFilter" })
  setBasicFilter?: SetBasicFilterRequest;

  @Metadata({ data: "json, name=setDataValidation" })
  setDataValidation?: SetDataValidationRequest;

  @Metadata({ data: "json, name=sortRange" })
  sortRange?: SortRangeRequest;

  @Metadata({ data: "json, name=textToColumns" })
  textToColumns?: TextToColumnsRequest;

  @Metadata({ data: "json, name=trimWhitespace" })
  trimWhitespace?: TrimWhitespaceRequest;

  @Metadata({ data: "json, name=unmergeCells" })
  unmergeCells?: UnmergeCellsRequest;

  @Metadata({ data: "json, name=updateBanding" })
  updateBanding?: UpdateBandingRequest;

  @Metadata({ data: "json, name=updateBorders" })
  updateBorders?: UpdateBordersRequest;

  @Metadata({ data: "json, name=updateCells" })
  updateCells?: UpdateCellsRequest;

  @Metadata({ data: "json, name=updateChartSpec" })
  updateChartSpec?: UpdateChartSpecRequest;

  @Metadata({ data: "json, name=updateConditionalFormatRule" })
  updateConditionalFormatRule?: UpdateConditionalFormatRuleRequest;

  @Metadata({ data: "json, name=updateDataSource" })
  updateDataSource?: UpdateDataSourceRequest;

  @Metadata({ data: "json, name=updateDeveloperMetadata" })
  updateDeveloperMetadata?: UpdateDeveloperMetadataRequest;

  @Metadata({ data: "json, name=updateDimensionGroup" })
  updateDimensionGroup?: UpdateDimensionGroupRequest;

  @Metadata({ data: "json, name=updateDimensionProperties" })
  updateDimensionProperties?: UpdateDimensionPropertiesRequest;

  @Metadata({ data: "json, name=updateEmbeddedObjectBorder" })
  updateEmbeddedObjectBorder?: UpdateEmbeddedObjectBorderRequest;

  @Metadata({ data: "json, name=updateEmbeddedObjectPosition" })
  updateEmbeddedObjectPosition?: UpdateEmbeddedObjectPositionRequest;

  @Metadata({ data: "json, name=updateFilterView" })
  updateFilterView?: UpdateFilterViewRequest;

  @Metadata({ data: "json, name=updateNamedRange" })
  updateNamedRange?: UpdateNamedRangeRequest;

  @Metadata({ data: "json, name=updateProtectedRange" })
  updateProtectedRange?: UpdateProtectedRangeRequest;

  @Metadata({ data: "json, name=updateSheetProperties" })
  updateSheetProperties?: UpdateSheetPropertiesRequest;

  @Metadata({ data: "json, name=updateSlicerSpec" })
  updateSlicerSpec?: UpdateSlicerSpecRequest;

  @Metadata({ data: "json, name=updateSpreadsheetProperties" })
  updateSpreadsheetProperties?: UpdateSpreadsheetPropertiesRequest;
}
