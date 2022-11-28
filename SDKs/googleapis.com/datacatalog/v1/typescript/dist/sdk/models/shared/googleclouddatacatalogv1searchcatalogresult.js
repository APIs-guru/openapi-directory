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
export var GoogleCloudDatacatalogV1SearchCatalogResultIntegratedSystemEnum;
(function (GoogleCloudDatacatalogV1SearchCatalogResultIntegratedSystemEnum) {
    GoogleCloudDatacatalogV1SearchCatalogResultIntegratedSystemEnum["IntegratedSystemUnspecified"] = "INTEGRATED_SYSTEM_UNSPECIFIED";
    GoogleCloudDatacatalogV1SearchCatalogResultIntegratedSystemEnum["Bigquery"] = "BIGQUERY";
    GoogleCloudDatacatalogV1SearchCatalogResultIntegratedSystemEnum["CloudPubsub"] = "CLOUD_PUBSUB";
    GoogleCloudDatacatalogV1SearchCatalogResultIntegratedSystemEnum["DataprocMetastore"] = "DATAPROC_METASTORE";
    GoogleCloudDatacatalogV1SearchCatalogResultIntegratedSystemEnum["Dataplex"] = "DATAPLEX";
})(GoogleCloudDatacatalogV1SearchCatalogResultIntegratedSystemEnum || (GoogleCloudDatacatalogV1SearchCatalogResultIntegratedSystemEnum = {}));
export var GoogleCloudDatacatalogV1SearchCatalogResultSearchResultTypeEnum;
(function (GoogleCloudDatacatalogV1SearchCatalogResultSearchResultTypeEnum) {
    GoogleCloudDatacatalogV1SearchCatalogResultSearchResultTypeEnum["SearchResultTypeUnspecified"] = "SEARCH_RESULT_TYPE_UNSPECIFIED";
    GoogleCloudDatacatalogV1SearchCatalogResultSearchResultTypeEnum["Entry"] = "ENTRY";
    GoogleCloudDatacatalogV1SearchCatalogResultSearchResultTypeEnum["TagTemplate"] = "TAG_TEMPLATE";
    GoogleCloudDatacatalogV1SearchCatalogResultSearchResultTypeEnum["EntryGroup"] = "ENTRY_GROUP";
})(GoogleCloudDatacatalogV1SearchCatalogResultSearchResultTypeEnum || (GoogleCloudDatacatalogV1SearchCatalogResultSearchResultTypeEnum = {}));
// GoogleCloudDatacatalogV1SearchCatalogResult
/**
 * Result in the response to a search request. Each result captures details of one entry that matches the search.
**/
var GoogleCloudDatacatalogV1SearchCatalogResult = /** @class */ (function (_super) {
    __extends(GoogleCloudDatacatalogV1SearchCatalogResult, _super);
    function GoogleCloudDatacatalogV1SearchCatalogResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1SearchCatalogResult.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1SearchCatalogResult.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fullyQualifiedName" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1SearchCatalogResult.prototype, "fullyQualifiedName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integratedSystem" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1SearchCatalogResult.prototype, "integratedSystem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkedResource" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1SearchCatalogResult.prototype, "linkedResource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modifyTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1SearchCatalogResult.prototype, "modifyTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relativeResourceName" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1SearchCatalogResult.prototype, "relativeResourceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchResultSubtype" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1SearchCatalogResult.prototype, "searchResultSubtype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchResultType" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1SearchCatalogResult.prototype, "searchResultType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userSpecifiedSystem" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1SearchCatalogResult.prototype, "userSpecifiedSystem", void 0);
    return GoogleCloudDatacatalogV1SearchCatalogResult;
}(SpeakeasyBase));
export { GoogleCloudDatacatalogV1SearchCatalogResult };
