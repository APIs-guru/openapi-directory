import { SpeakeasyBase } from "../../../internal/utils";
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
/**
 * A single response from an update.
**/
export declare class Response extends SpeakeasyBase {
    addBanding?: AddBandingResponse;
    addChart?: AddChartResponse;
    addDataSource?: AddDataSourceResponse;
    addDimensionGroup?: AddDimensionGroupResponse;
    addFilterView?: AddFilterViewResponse;
    addNamedRange?: AddNamedRangeResponse;
    addProtectedRange?: AddProtectedRangeResponse;
    addSheet?: AddSheetResponse;
    addSlicer?: AddSlicerResponse;
    createDeveloperMetadata?: CreateDeveloperMetadataResponse;
    deleteConditionalFormatRule?: DeleteConditionalFormatRuleResponse;
    deleteDeveloperMetadata?: DeleteDeveloperMetadataResponse;
    deleteDimensionGroup?: DeleteDimensionGroupResponse;
    deleteDuplicates?: DeleteDuplicatesResponse;
    duplicateFilterView?: DuplicateFilterViewResponse;
    duplicateSheet?: DuplicateSheetResponse;
    findReplace?: FindReplaceResponse;
    refreshDataSource?: RefreshDataSourceResponse;
    trimWhitespace?: TrimWhitespaceResponse;
    updateConditionalFormatRule?: UpdateConditionalFormatRuleResponse;
    updateDataSource?: UpdateDataSourceResponse;
    updateDeveloperMetadata?: UpdateDeveloperMetadataResponse;
    updateEmbeddedObjectPosition?: UpdateEmbeddedObjectPositionResponse;
}
