var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
var Response = /** @class */ (function (_super) {
    __extends(Response, _super);
    function Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addBanding" }),
        __metadata("design:type", AddBandingResponse)
    ], Response.prototype, "addBanding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addChart" }),
        __metadata("design:type", AddChartResponse)
    ], Response.prototype, "addChart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addDataSource" }),
        __metadata("design:type", AddDataSourceResponse)
    ], Response.prototype, "addDataSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addDimensionGroup" }),
        __metadata("design:type", AddDimensionGroupResponse)
    ], Response.prototype, "addDimensionGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addFilterView" }),
        __metadata("design:type", AddFilterViewResponse)
    ], Response.prototype, "addFilterView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addNamedRange" }),
        __metadata("design:type", AddNamedRangeResponse)
    ], Response.prototype, "addNamedRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addProtectedRange" }),
        __metadata("design:type", AddProtectedRangeResponse)
    ], Response.prototype, "addProtectedRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addSheet" }),
        __metadata("design:type", AddSheetResponse)
    ], Response.prototype, "addSheet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addSlicer" }),
        __metadata("design:type", AddSlicerResponse)
    ], Response.prototype, "addSlicer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createDeveloperMetadata" }),
        __metadata("design:type", CreateDeveloperMetadataResponse)
    ], Response.prototype, "createDeveloperMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteConditionalFormatRule" }),
        __metadata("design:type", DeleteConditionalFormatRuleResponse)
    ], Response.prototype, "deleteConditionalFormatRule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteDeveloperMetadata" }),
        __metadata("design:type", DeleteDeveloperMetadataResponse)
    ], Response.prototype, "deleteDeveloperMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteDimensionGroup" }),
        __metadata("design:type", DeleteDimensionGroupResponse)
    ], Response.prototype, "deleteDimensionGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteDuplicates" }),
        __metadata("design:type", DeleteDuplicatesResponse)
    ], Response.prototype, "deleteDuplicates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duplicateFilterView" }),
        __metadata("design:type", DuplicateFilterViewResponse)
    ], Response.prototype, "duplicateFilterView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duplicateSheet" }),
        __metadata("design:type", DuplicateSheetResponse)
    ], Response.prototype, "duplicateSheet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=findReplace" }),
        __metadata("design:type", FindReplaceResponse)
    ], Response.prototype, "findReplace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refreshDataSource" }),
        __metadata("design:type", RefreshDataSourceResponse)
    ], Response.prototype, "refreshDataSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trimWhitespace" }),
        __metadata("design:type", TrimWhitespaceResponse)
    ], Response.prototype, "trimWhitespace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateConditionalFormatRule" }),
        __metadata("design:type", UpdateConditionalFormatRuleResponse)
    ], Response.prototype, "updateConditionalFormatRule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateDataSource" }),
        __metadata("design:type", UpdateDataSourceResponse)
    ], Response.prototype, "updateDataSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateDeveloperMetadata" }),
        __metadata("design:type", UpdateDeveloperMetadataResponse)
    ], Response.prototype, "updateDeveloperMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateEmbeddedObjectPosition" }),
        __metadata("design:type", UpdateEmbeddedObjectPositionResponse)
    ], Response.prototype, "updateEmbeddedObjectPosition", void 0);
    return Response;
}(SpeakeasyBase));
export { Response };
