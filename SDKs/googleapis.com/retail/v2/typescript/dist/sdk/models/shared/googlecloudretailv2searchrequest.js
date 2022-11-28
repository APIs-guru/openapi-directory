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
import { GoogleCloudRetailV2SearchRequestBoostSpec } from "./googlecloudretailv2searchrequestboostspec";
import { GoogleCloudRetailV2SearchRequestDynamicFacetSpec } from "./googlecloudretailv2searchrequestdynamicfacetspec";
import { GoogleCloudRetailV2SearchRequestFacetSpec } from "./googlecloudretailv2searchrequestfacetspec";
import { GoogleCloudRetailV2SearchRequestPersonalizationSpec } from "./googlecloudretailv2searchrequestpersonalizationspec";
import { GoogleCloudRetailV2SearchRequestQueryExpansionSpec } from "./googlecloudretailv2searchrequestqueryexpansionspec";
import { GoogleCloudRetailV2SearchRequestSpellCorrectionSpec } from "./googlecloudretailv2searchrequestspellcorrectionspec";
import { GoogleCloudRetailV2UserInfo } from "./googlecloudretailv2userinfo";
export var GoogleCloudRetailV2SearchRequestSearchModeEnum;
(function (GoogleCloudRetailV2SearchRequestSearchModeEnum) {
    GoogleCloudRetailV2SearchRequestSearchModeEnum["SearchModeUnspecified"] = "SEARCH_MODE_UNSPECIFIED";
    GoogleCloudRetailV2SearchRequestSearchModeEnum["ProductSearchOnly"] = "PRODUCT_SEARCH_ONLY";
    GoogleCloudRetailV2SearchRequestSearchModeEnum["FacetedSearchOnly"] = "FACETED_SEARCH_ONLY";
})(GoogleCloudRetailV2SearchRequestSearchModeEnum || (GoogleCloudRetailV2SearchRequestSearchModeEnum = {}));
// GoogleCloudRetailV2SearchRequest
/**
 * Request message for SearchService.Search method.
**/
var GoogleCloudRetailV2SearchRequest = /** @class */ (function (_super) {
    __extends(GoogleCloudRetailV2SearchRequest, _super);
    function GoogleCloudRetailV2SearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=boostSpec" }),
        __metadata("design:type", GoogleCloudRetailV2SearchRequestBoostSpec)
    ], GoogleCloudRetailV2SearchRequest.prototype, "boostSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=branch" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2SearchRequest.prototype, "branch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canonicalFilter" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2SearchRequest.prototype, "canonicalFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dynamicFacetSpec" }),
        __metadata("design:type", GoogleCloudRetailV2SearchRequestDynamicFacetSpec)
    ], GoogleCloudRetailV2SearchRequest.prototype, "dynamicFacetSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=facetSpecs", elemType: GoogleCloudRetailV2SearchRequestFacetSpec }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2SearchRequest.prototype, "facetSpecs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2SearchRequest.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudRetailV2SearchRequest.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], GoogleCloudRetailV2SearchRequest.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderBy" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2SearchRequest.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageCategories" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2SearchRequest.prototype, "pageCategories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageSize" }),
        __metadata("design:type", Number)
    ], GoogleCloudRetailV2SearchRequest.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageToken" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2SearchRequest.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=personalizationSpec" }),
        __metadata("design:type", GoogleCloudRetailV2SearchRequestPersonalizationSpec)
    ], GoogleCloudRetailV2SearchRequest.prototype, "personalizationSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2SearchRequest.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryExpansionSpec" }),
        __metadata("design:type", GoogleCloudRetailV2SearchRequestQueryExpansionSpec)
    ], GoogleCloudRetailV2SearchRequest.prototype, "queryExpansionSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchMode" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2SearchRequest.prototype, "searchMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spellCorrectionSpec" }),
        __metadata("design:type", GoogleCloudRetailV2SearchRequestSpellCorrectionSpec)
    ], GoogleCloudRetailV2SearchRequest.prototype, "spellCorrectionSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userInfo" }),
        __metadata("design:type", GoogleCloudRetailV2UserInfo)
    ], GoogleCloudRetailV2SearchRequest.prototype, "userInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=variantRollupKeys" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2SearchRequest.prototype, "variantRollupKeys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visitorId" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2SearchRequest.prototype, "visitorId", void 0);
    return GoogleCloudRetailV2SearchRequest;
}(SpeakeasyBase));
export { GoogleCloudRetailV2SearchRequest };
