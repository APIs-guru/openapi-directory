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
import { DataSourceRestriction } from "./datasourcerestriction";
import { FacetOptions } from "./facetoptions";
import { SortOptions } from "./sortoptions";
import { QueryInterpretationConfig } from "./queryinterpretationconfig";
import { ScoringConfig } from "./scoringconfig";
import { SourceConfig } from "./sourceconfig";
// SearchApplicationInput
/**
 * SearchApplication
**/
var SearchApplicationInput = /** @class */ (function (_super) {
    __extends(SearchApplicationInput, _super);
    function SearchApplicationInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataSourceRestrictions", elemType: DataSourceRestriction }),
        __metadata("design:type", Array)
    ], SearchApplicationInput.prototype, "dataSourceRestrictions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultFacetOptions", elemType: FacetOptions }),
        __metadata("design:type", Array)
    ], SearchApplicationInput.prototype, "defaultFacetOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultSortOptions" }),
        __metadata("design:type", SortOptions)
    ], SearchApplicationInput.prototype, "defaultSortOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], SearchApplicationInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableAuditLog" }),
        __metadata("design:type", Boolean)
    ], SearchApplicationInput.prototype, "enableAuditLog", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SearchApplicationInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryInterpretationConfig" }),
        __metadata("design:type", QueryInterpretationConfig)
    ], SearchApplicationInput.prototype, "queryInterpretationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnResultThumbnailUrls" }),
        __metadata("design:type", Boolean)
    ], SearchApplicationInput.prototype, "returnResultThumbnailUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scoringConfig" }),
        __metadata("design:type", ScoringConfig)
    ], SearchApplicationInput.prototype, "scoringConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceConfig", elemType: SourceConfig }),
        __metadata("design:type", Array)
    ], SearchApplicationInput.prototype, "sourceConfig", void 0);
    return SearchApplicationInput;
}(SpeakeasyBase));
export { SearchApplicationInput };
// SearchApplication
/**
 * SearchApplication
**/
var SearchApplication = /** @class */ (function (_super) {
    __extends(SearchApplication, _super);
    function SearchApplication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataSourceRestrictions", elemType: DataSourceRestriction }),
        __metadata("design:type", Array)
    ], SearchApplication.prototype, "dataSourceRestrictions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultFacetOptions", elemType: FacetOptions }),
        __metadata("design:type", Array)
    ], SearchApplication.prototype, "defaultFacetOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultSortOptions" }),
        __metadata("design:type", SortOptions)
    ], SearchApplication.prototype, "defaultSortOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], SearchApplication.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableAuditLog" }),
        __metadata("design:type", Boolean)
    ], SearchApplication.prototype, "enableAuditLog", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SearchApplication.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operationIds" }),
        __metadata("design:type", Array)
    ], SearchApplication.prototype, "operationIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryInterpretationConfig" }),
        __metadata("design:type", QueryInterpretationConfig)
    ], SearchApplication.prototype, "queryInterpretationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnResultThumbnailUrls" }),
        __metadata("design:type", Boolean)
    ], SearchApplication.prototype, "returnResultThumbnailUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scoringConfig" }),
        __metadata("design:type", ScoringConfig)
    ], SearchApplication.prototype, "scoringConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceConfig", elemType: SourceConfig }),
        __metadata("design:type", Array)
    ], SearchApplication.prototype, "sourceConfig", void 0);
    return SearchApplication;
}(SpeakeasyBase));
export { SearchApplication };
