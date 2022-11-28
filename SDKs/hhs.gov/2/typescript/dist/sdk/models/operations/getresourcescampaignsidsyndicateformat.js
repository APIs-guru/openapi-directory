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
import * as shared from "../shared";
var GetResourcesCampaignsIdSyndicateFormatPathParams = /** @class */ (function (_super) {
    __extends(GetResourcesCampaignsIdSyndicateFormatPathParams, _super);
    function GetResourcesCampaignsIdSyndicateFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], GetResourcesCampaignsIdSyndicateFormatPathParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetResourcesCampaignsIdSyndicateFormatPathParams.prototype, "id", void 0);
    return GetResourcesCampaignsIdSyndicateFormatPathParams;
}(SpeakeasyBase));
export { GetResourcesCampaignsIdSyndicateFormatPathParams };
var GetResourcesCampaignsIdSyndicateFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetResourcesCampaignsIdSyndicateFormatQueryParams, _super);
    function GetResourcesCampaignsIdSyndicateFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=displayMethod" }),
        __metadata("design:type", String)
    ], GetResourcesCampaignsIdSyndicateFormatQueryParams.prototype, "displayMethod", void 0);
    return GetResourcesCampaignsIdSyndicateFormatQueryParams;
}(SpeakeasyBase));
export { GetResourcesCampaignsIdSyndicateFormatQueryParams };
var GetResourcesCampaignsIdSyndicateFormatRequest = /** @class */ (function (_super) {
    __extends(GetResourcesCampaignsIdSyndicateFormatRequest, _super);
    function GetResourcesCampaignsIdSyndicateFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetResourcesCampaignsIdSyndicateFormatPathParams)
    ], GetResourcesCampaignsIdSyndicateFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetResourcesCampaignsIdSyndicateFormatQueryParams)
    ], GetResourcesCampaignsIdSyndicateFormatRequest.prototype, "queryParams", void 0);
    return GetResourcesCampaignsIdSyndicateFormatRequest;
}(SpeakeasyBase));
export { GetResourcesCampaignsIdSyndicateFormatRequest };
var GetResourcesCampaignsIdSyndicateFormatResponse = /** @class */ (function (_super) {
    __extends(GetResourcesCampaignsIdSyndicateFormatResponse, _super);
    function GetResourcesCampaignsIdSyndicateFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetResourcesCampaignsIdSyndicateFormatResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetResourcesCampaignsIdSyndicateFormatResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SyndicateMarshallerWrapped)
    ], GetResourcesCampaignsIdSyndicateFormatResponse.prototype, "syndicateMarshallerWrapped", void 0);
    return GetResourcesCampaignsIdSyndicateFormatResponse;
}(SpeakeasyBase));
export { GetResourcesCampaignsIdSyndicateFormatResponse };
