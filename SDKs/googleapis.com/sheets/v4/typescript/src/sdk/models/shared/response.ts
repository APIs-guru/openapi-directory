import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AddBandingResponse } from "./addbandingresponse";
import { AddChartResponse } from "./addchartresponse";
import { AddDataSourceResponse } from "./adddatasourceresponse";
import { AddDimensionGroupResponse } from "./adddimensiongroupresponse";
import { AddFilterViewResponse } from "./addfilterviewresponse";
import { AddNamedRangeResponse } from "./addnamedrangeresponse";
import { AddProtectedRangeResponse } from "./addprotectedrangeresponse";
import { AddSheetResponse } from "./addsheetresponse";
import { AddSlicerResponse } from "./addslicerresponse";
import { CreateDeveloperMetadataResponse } from "./createdevelopermetadataresponse";
import { DeleteConditionalFormatRuleResponse } from "./deleteconditionalformatruleresponse";
import { DeleteDeveloperMetadataResponse } from "./deletedevelopermetadataresponse";
import { DeleteDimensionGroupResponse } from "./deletedimensiongroupresponse";
import { DeleteDuplicatesResponse } from "./deleteduplicatesresponse";
import { DuplicateFilterViewResponse } from "./duplicatefilterviewresponse";
import { DuplicateSheetResponse } from "./duplicatesheetresponse";
import { FindReplaceResponse } from "./findreplaceresponse";
import { RefreshDataSourceResponse } from "./refreshdatasourceresponse";
import { TrimWhitespaceResponse } from "./trimwhitespaceresponse";
import { UpdateConditionalFormatRuleResponse } from "./updateconditionalformatruleresponse";
import { UpdateDataSourceResponse } from "./updatedatasourceresponse";
import { UpdateDeveloperMetadataResponse } from "./updatedevelopermetadataresponse";
import { UpdateEmbeddedObjectPositionResponse } from "./updateembeddedobjectpositionresponse";



// Response
/** 
 * A single response from an update.
**/
export class Response extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addBanding" })
  addBanding?: AddBandingResponse;

  @SpeakeasyMetadata({ data: "json, name=addChart" })
  addChart?: AddChartResponse;

  @SpeakeasyMetadata({ data: "json, name=addDataSource" })
  addDataSource?: AddDataSourceResponse;

  @SpeakeasyMetadata({ data: "json, name=addDimensionGroup" })
  addDimensionGroup?: AddDimensionGroupResponse;

  @SpeakeasyMetadata({ data: "json, name=addFilterView" })
  addFilterView?: AddFilterViewResponse;

  @SpeakeasyMetadata({ data: "json, name=addNamedRange" })
  addNamedRange?: AddNamedRangeResponse;

  @SpeakeasyMetadata({ data: "json, name=addProtectedRange" })
  addProtectedRange?: AddProtectedRangeResponse;

  @SpeakeasyMetadata({ data: "json, name=addSheet" })
  addSheet?: AddSheetResponse;

  @SpeakeasyMetadata({ data: "json, name=addSlicer" })
  addSlicer?: AddSlicerResponse;

  @SpeakeasyMetadata({ data: "json, name=createDeveloperMetadata" })
  createDeveloperMetadata?: CreateDeveloperMetadataResponse;

  @SpeakeasyMetadata({ data: "json, name=deleteConditionalFormatRule" })
  deleteConditionalFormatRule?: DeleteConditionalFormatRuleResponse;

  @SpeakeasyMetadata({ data: "json, name=deleteDeveloperMetadata" })
  deleteDeveloperMetadata?: DeleteDeveloperMetadataResponse;

  @SpeakeasyMetadata({ data: "json, name=deleteDimensionGroup" })
  deleteDimensionGroup?: DeleteDimensionGroupResponse;

  @SpeakeasyMetadata({ data: "json, name=deleteDuplicates" })
  deleteDuplicates?: DeleteDuplicatesResponse;

  @SpeakeasyMetadata({ data: "json, name=duplicateFilterView" })
  duplicateFilterView?: DuplicateFilterViewResponse;

  @SpeakeasyMetadata({ data: "json, name=duplicateSheet" })
  duplicateSheet?: DuplicateSheetResponse;

  @SpeakeasyMetadata({ data: "json, name=findReplace" })
  findReplace?: FindReplaceResponse;

  @SpeakeasyMetadata({ data: "json, name=refreshDataSource" })
  refreshDataSource?: RefreshDataSourceResponse;

  @SpeakeasyMetadata({ data: "json, name=trimWhitespace" })
  trimWhitespace?: TrimWhitespaceResponse;

  @SpeakeasyMetadata({ data: "json, name=updateConditionalFormatRule" })
  updateConditionalFormatRule?: UpdateConditionalFormatRuleResponse;

  @SpeakeasyMetadata({ data: "json, name=updateDataSource" })
  updateDataSource?: UpdateDataSourceResponse;

  @SpeakeasyMetadata({ data: "json, name=updateDeveloperMetadata" })
  updateDeveloperMetadata?: UpdateDeveloperMetadataResponse;

  @SpeakeasyMetadata({ data: "json, name=updateEmbeddedObjectPosition" })
  updateEmbeddedObjectPosition?: UpdateEmbeddedObjectPositionResponse;
}
