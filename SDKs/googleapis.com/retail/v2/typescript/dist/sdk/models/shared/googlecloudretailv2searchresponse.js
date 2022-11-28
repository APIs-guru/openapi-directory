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
import { GoogleCloudRetailV2SearchResponseFacet } from "./googlecloudretailv2searchresponsefacet";
import { GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec } from "./googlecloudretailv2searchrequestboostspecconditionboostspec";
import { GoogleCloudRetailV2SearchResponseQueryExpansionInfo } from "./googlecloudretailv2searchresponsequeryexpansioninfo";
import { GoogleCloudRetailV2SearchResponseSearchResult } from "./googlecloudretailv2searchresponsesearchresult";
// GoogleCloudRetailV2SearchResponse
/**
 * Response message for SearchService.Search method.
**/
var GoogleCloudRetailV2SearchResponse = /** @class */ (function (_super) {
    __extends(GoogleCloudRetailV2SearchResponse, _super);
    function GoogleCloudRetailV2SearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appliedControls" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2SearchResponse.prototype, "appliedControls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributionToken" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2SearchResponse.prototype, "attributionToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=correctedQuery" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2SearchResponse.prototype, "correctedQuery", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=facets", elemType: GoogleCloudRetailV2SearchResponseFacet }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2SearchResponse.prototype, "facets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=invalidConditionBoostSpecs", elemType: GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2SearchResponse.prototype, "invalidConditionBoostSpecs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextPageToken" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2SearchResponse.prototype, "nextPageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryExpansionInfo" }),
        __metadata("design:type", GoogleCloudRetailV2SearchResponseQueryExpansionInfo)
    ], GoogleCloudRetailV2SearchResponse.prototype, "queryExpansionInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redirectUri" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2SearchResponse.prototype, "redirectUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: GoogleCloudRetailV2SearchResponseSearchResult }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2SearchResponse.prototype, "results", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalSize" }),
        __metadata("design:type", Number)
    ], GoogleCloudRetailV2SearchResponse.prototype, "totalSize", void 0);
    return GoogleCloudRetailV2SearchResponse;
}(SpeakeasyBase));
export { GoogleCloudRetailV2SearchResponse };
