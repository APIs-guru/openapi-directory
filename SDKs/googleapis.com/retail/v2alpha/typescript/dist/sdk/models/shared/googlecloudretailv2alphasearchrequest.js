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
import { GoogleCloudRetailV2alphaSearchRequestBoostSpec } from "./googlecloudretailv2alphasearchrequestboostspec";
import { GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec } from "./googlecloudretailv2alphasearchrequestdynamicfacetspec";
import { GoogleCloudRetailV2alphaSearchRequestFacetSpec } from "./googlecloudretailv2alphasearchrequestfacetspec";
import { GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec } from "./googlecloudretailv2alphasearchrequestpersonalizationspec";
import { GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpec } from "./googlecloudretailv2alphasearchrequestqueryexpansionspec";
import { GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpec } from "./googlecloudretailv2alphasearchrequestspellcorrectionspec";
import { GoogleCloudRetailV2alphaUserInfo } from "./googlecloudretailv2alphauserinfo";
export var GoogleCloudRetailV2alphaSearchRequestRelevanceThresholdEnum;
(function (GoogleCloudRetailV2alphaSearchRequestRelevanceThresholdEnum) {
    GoogleCloudRetailV2alphaSearchRequestRelevanceThresholdEnum["RelevanceThresholdUnspecified"] = "RELEVANCE_THRESHOLD_UNSPECIFIED";
    GoogleCloudRetailV2alphaSearchRequestRelevanceThresholdEnum["High"] = "HIGH";
    GoogleCloudRetailV2alphaSearchRequestRelevanceThresholdEnum["Medium"] = "MEDIUM";
    GoogleCloudRetailV2alphaSearchRequestRelevanceThresholdEnum["Low"] = "LOW";
    GoogleCloudRetailV2alphaSearchRequestRelevanceThresholdEnum["Lowest"] = "LOWEST";
})(GoogleCloudRetailV2alphaSearchRequestRelevanceThresholdEnum || (GoogleCloudRetailV2alphaSearchRequestRelevanceThresholdEnum = {}));
export var GoogleCloudRetailV2alphaSearchRequestSearchModeEnum;
(function (GoogleCloudRetailV2alphaSearchRequestSearchModeEnum) {
    GoogleCloudRetailV2alphaSearchRequestSearchModeEnum["SearchModeUnspecified"] = "SEARCH_MODE_UNSPECIFIED";
    GoogleCloudRetailV2alphaSearchRequestSearchModeEnum["ProductSearchOnly"] = "PRODUCT_SEARCH_ONLY";
    GoogleCloudRetailV2alphaSearchRequestSearchModeEnum["FacetedSearchOnly"] = "FACETED_SEARCH_ONLY";
})(GoogleCloudRetailV2alphaSearchRequestSearchModeEnum || (GoogleCloudRetailV2alphaSearchRequestSearchModeEnum = {}));
// GoogleCloudRetailV2alphaSearchRequest
/**
 * Request message for SearchService.Search method.
**/
var GoogleCloudRetailV2alphaSearchRequest = /** @class */ (function (_super) {
    __extends(GoogleCloudRetailV2alphaSearchRequest, _super);
    function GoogleCloudRetailV2alphaSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=boostSpec" }),
        __metadata("design:type", GoogleCloudRetailV2alphaSearchRequestBoostSpec)
    ], GoogleCloudRetailV2alphaSearchRequest.prototype, "boostSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=branch" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaSearchRequest.prototype, "branch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canonicalFilter" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaSearchRequest.prototype, "canonicalFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dynamicFacetSpec" }),
        __metadata("design:type", GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec)
    ], GoogleCloudRetailV2alphaSearchRequest.prototype, "dynamicFacetSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=facetSpecs", elemType: GoogleCloudRetailV2alphaSearchRequestFacetSpec }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2alphaSearchRequest.prototype, "facetSpecs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaSearchRequest.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudRetailV2alphaSearchRequest.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], GoogleCloudRetailV2alphaSearchRequest.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderBy" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaSearchRequest.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageCategories" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2alphaSearchRequest.prototype, "pageCategories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageSize" }),
        __metadata("design:type", Number)
    ], GoogleCloudRetailV2alphaSearchRequest.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageToken" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaSearchRequest.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=personalizationSpec" }),
        __metadata("design:type", GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec)
    ], GoogleCloudRetailV2alphaSearchRequest.prototype, "personalizationSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaSearchRequest.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryExpansionSpec" }),
        __metadata("design:type", GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpec)
    ], GoogleCloudRetailV2alphaSearchRequest.prototype, "queryExpansionSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relevanceThreshold" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaSearchRequest.prototype, "relevanceThreshold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchMode" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaSearchRequest.prototype, "searchMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spellCorrectionSpec" }),
        __metadata("design:type", GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpec)
    ], GoogleCloudRetailV2alphaSearchRequest.prototype, "spellCorrectionSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userInfo" }),
        __metadata("design:type", GoogleCloudRetailV2alphaUserInfo)
    ], GoogleCloudRetailV2alphaSearchRequest.prototype, "userInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=variantRollupKeys" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2alphaSearchRequest.prototype, "variantRollupKeys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visitorId" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaSearchRequest.prototype, "visitorId", void 0);
    return GoogleCloudRetailV2alphaSearchRequest;
}(SpeakeasyBase));
export { GoogleCloudRetailV2alphaSearchRequest };
