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
import { GoogleCloudRetailV2betaSearchResponseFacet } from "./googlecloudretailv2betasearchresponsefacet";
import { GoogleCloudRetailV2betaSearchRequestBoostSpecConditionBoostSpec } from "./googlecloudretailv2betasearchrequestboostspecconditionboostspec";
import { GoogleCloudRetailV2betaSearchResponseQueryExpansionInfo } from "./googlecloudretailv2betasearchresponsequeryexpansioninfo";
import { GoogleCloudRetailV2betaSearchResponseSearchResult } from "./googlecloudretailv2betasearchresponsesearchresult";
// GoogleCloudRetailV2betaSearchResponse
/**
 * Response message for SearchService.Search method.
**/
var GoogleCloudRetailV2betaSearchResponse = /** @class */ (function (_super) {
    __extends(GoogleCloudRetailV2betaSearchResponse, _super);
    function GoogleCloudRetailV2betaSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appliedControls" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaSearchResponse.prototype, "appliedControls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributionToken" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaSearchResponse.prototype, "attributionToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=correctedQuery" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaSearchResponse.prototype, "correctedQuery", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=facets", elemType: GoogleCloudRetailV2betaSearchResponseFacet }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaSearchResponse.prototype, "facets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=invalidConditionBoostSpecs", elemType: GoogleCloudRetailV2betaSearchRequestBoostSpecConditionBoostSpec }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaSearchResponse.prototype, "invalidConditionBoostSpecs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextPageToken" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaSearchResponse.prototype, "nextPageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryExpansionInfo" }),
        __metadata("design:type", GoogleCloudRetailV2betaSearchResponseQueryExpansionInfo)
    ], GoogleCloudRetailV2betaSearchResponse.prototype, "queryExpansionInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redirectUri" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaSearchResponse.prototype, "redirectUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: GoogleCloudRetailV2betaSearchResponseSearchResult }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaSearchResponse.prototype, "results", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalSize" }),
        __metadata("design:type", Number)
    ], GoogleCloudRetailV2betaSearchResponse.prototype, "totalSize", void 0);
    return GoogleCloudRetailV2betaSearchResponse;
}(SpeakeasyBase));
export { GoogleCloudRetailV2betaSearchResponse };
