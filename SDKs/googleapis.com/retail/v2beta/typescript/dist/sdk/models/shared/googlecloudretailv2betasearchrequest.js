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
import { GoogleCloudRetailV2betaSearchRequestBoostSpec } from "./googlecloudretailv2betasearchrequestboostspec";
import { GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec } from "./googlecloudretailv2betasearchrequestdynamicfacetspec";
import { GoogleCloudRetailV2betaSearchRequestFacetSpec } from "./googlecloudretailv2betasearchrequestfacetspec";
import { GoogleCloudRetailV2betaSearchRequestPersonalizationSpec } from "./googlecloudretailv2betasearchrequestpersonalizationspec";
import { GoogleCloudRetailV2betaSearchRequestQueryExpansionSpec } from "./googlecloudretailv2betasearchrequestqueryexpansionspec";
import { GoogleCloudRetailV2betaSearchRequestSpellCorrectionSpec } from "./googlecloudretailv2betasearchrequestspellcorrectionspec";
import { GoogleCloudRetailV2betaUserInfo } from "./googlecloudretailv2betauserinfo";
export var GoogleCloudRetailV2betaSearchRequestSearchModeEnum;
(function (GoogleCloudRetailV2betaSearchRequestSearchModeEnum) {
    GoogleCloudRetailV2betaSearchRequestSearchModeEnum["SearchModeUnspecified"] = "SEARCH_MODE_UNSPECIFIED";
    GoogleCloudRetailV2betaSearchRequestSearchModeEnum["ProductSearchOnly"] = "PRODUCT_SEARCH_ONLY";
    GoogleCloudRetailV2betaSearchRequestSearchModeEnum["FacetedSearchOnly"] = "FACETED_SEARCH_ONLY";
})(GoogleCloudRetailV2betaSearchRequestSearchModeEnum || (GoogleCloudRetailV2betaSearchRequestSearchModeEnum = {}));
// GoogleCloudRetailV2betaSearchRequest
/**
 * Request message for SearchService.Search method.
**/
var GoogleCloudRetailV2betaSearchRequest = /** @class */ (function (_super) {
    __extends(GoogleCloudRetailV2betaSearchRequest, _super);
    function GoogleCloudRetailV2betaSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=boostSpec" }),
        __metadata("design:type", GoogleCloudRetailV2betaSearchRequestBoostSpec)
    ], GoogleCloudRetailV2betaSearchRequest.prototype, "boostSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=branch" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaSearchRequest.prototype, "branch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canonicalFilter" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaSearchRequest.prototype, "canonicalFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dynamicFacetSpec" }),
        __metadata("design:type", GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec)
    ], GoogleCloudRetailV2betaSearchRequest.prototype, "dynamicFacetSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=facetSpecs", elemType: GoogleCloudRetailV2betaSearchRequestFacetSpec }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaSearchRequest.prototype, "facetSpecs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaSearchRequest.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudRetailV2betaSearchRequest.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], GoogleCloudRetailV2betaSearchRequest.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderBy" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaSearchRequest.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageCategories" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaSearchRequest.prototype, "pageCategories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageSize" }),
        __metadata("design:type", Number)
    ], GoogleCloudRetailV2betaSearchRequest.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageToken" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaSearchRequest.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=personalizationSpec" }),
        __metadata("design:type", GoogleCloudRetailV2betaSearchRequestPersonalizationSpec)
    ], GoogleCloudRetailV2betaSearchRequest.prototype, "personalizationSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaSearchRequest.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryExpansionSpec" }),
        __metadata("design:type", GoogleCloudRetailV2betaSearchRequestQueryExpansionSpec)
    ], GoogleCloudRetailV2betaSearchRequest.prototype, "queryExpansionSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchMode" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaSearchRequest.prototype, "searchMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spellCorrectionSpec" }),
        __metadata("design:type", GoogleCloudRetailV2betaSearchRequestSpellCorrectionSpec)
    ], GoogleCloudRetailV2betaSearchRequest.prototype, "spellCorrectionSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userInfo" }),
        __metadata("design:type", GoogleCloudRetailV2betaUserInfo)
    ], GoogleCloudRetailV2betaSearchRequest.prototype, "userInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=variantRollupKeys" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaSearchRequest.prototype, "variantRollupKeys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visitorId" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaSearchRequest.prototype, "visitorId", void 0);
    return GoogleCloudRetailV2betaSearchRequest;
}(SpeakeasyBase));
export { GoogleCloudRetailV2betaSearchRequest };
