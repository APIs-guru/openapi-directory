import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=addBanding" })
  addBanding?: AddBandingResponse;

  @Metadata({ data: "json, name=addChart" })
  addChart?: AddChartResponse;

  @Metadata({ data: "json, name=addDataSource" })
  addDataSource?: AddDataSourceResponse;

  @Metadata({ data: "json, name=addDimensionGroup" })
  addDimensionGroup?: AddDimensionGroupResponse;

  @Metadata({ data: "json, name=addFilterView" })
  addFilterView?: AddFilterViewResponse;

  @Metadata({ data: "json, name=addNamedRange" })
  addNamedRange?: AddNamedRangeResponse;

  @Metadata({ data: "json, name=addProtectedRange" })
  addProtectedRange?: AddProtectedRangeResponse;

  @Metadata({ data: "json, name=addSheet" })
  addSheet?: AddSheetResponse;

  @Metadata({ data: "json, name=addSlicer" })
  addSlicer?: AddSlicerResponse;

  @Metadata({ data: "json, name=createDeveloperMetadata" })
  createDeveloperMetadata?: CreateDeveloperMetadataResponse;

  @Metadata({ data: "json, name=deleteConditionalFormatRule" })
  deleteConditionalFormatRule?: DeleteConditionalFormatRuleResponse;

  @Metadata({ data: "json, name=deleteDeveloperMetadata" })
  deleteDeveloperMetadata?: DeleteDeveloperMetadataResponse;

  @Metadata({ data: "json, name=deleteDimensionGroup" })
  deleteDimensionGroup?: DeleteDimensionGroupResponse;

  @Metadata({ data: "json, name=deleteDuplicates" })
  deleteDuplicates?: DeleteDuplicatesResponse;

  @Metadata({ data: "json, name=duplicateFilterView" })
  duplicateFilterView?: DuplicateFilterViewResponse;

  @Metadata({ data: "json, name=duplicateSheet" })
  duplicateSheet?: DuplicateSheetResponse;

  @Metadata({ data: "json, name=findReplace" })
  findReplace?: FindReplaceResponse;

  @Metadata({ data: "json, name=refreshDataSource" })
  refreshDataSource?: RefreshDataSourceResponse;

  @Metadata({ data: "json, name=trimWhitespace" })
  trimWhitespace?: TrimWhitespaceResponse;

  @Metadata({ data: "json, name=updateConditionalFormatRule" })
  updateConditionalFormatRule?: UpdateConditionalFormatRuleResponse;

  @Metadata({ data: "json, name=updateDataSource" })
  updateDataSource?: UpdateDataSourceResponse;

  @Metadata({ data: "json, name=updateDeveloperMetadata" })
  updateDeveloperMetadata?: UpdateDeveloperMetadataResponse;

  @Metadata({ data: "json, name=updateEmbeddedObjectPosition" })
  updateEmbeddedObjectPosition?: UpdateEmbeddedObjectPositionResponse;
}
