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
var MybusinessplaceactionsLocationsPlaceActionLinksPatchPathParams = /** @class */ (function (_super) {
    __extends(MybusinessplaceactionsLocationsPlaceActionLinksPatchPathParams, _super);
    function MybusinessplaceactionsLocationsPlaceActionLinksPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MybusinessplaceactionsLocationsPlaceActionLinksPatchPathParams.prototype, "name", void 0);
    return MybusinessplaceactionsLocationsPlaceActionLinksPatchPathParams;
}(SpeakeasyBase));
export { MybusinessplaceactionsLocationsPlaceActionLinksPatchPathParams };
var MybusinessplaceactionsLocationsPlaceActionLinksPatchQueryParams = /** @class */ (function (_super) {
    __extends(MybusinessplaceactionsLocationsPlaceActionLinksPatchQueryParams, _super);
    function MybusinessplaceactionsLocationsPlaceActionLinksPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MybusinessplaceactionsLocationsPlaceActionLinksPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MybusinessplaceactionsLocationsPlaceActionLinksPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MybusinessplaceactionsLocationsPlaceActionLinksPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MybusinessplaceactionsLocationsPlaceActionLinksPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MybusinessplaceactionsLocationsPlaceActionLinksPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MybusinessplaceactionsLocationsPlaceActionLinksPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MybusinessplaceactionsLocationsPlaceActionLinksPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MybusinessplaceactionsLocationsPlaceActionLinksPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MybusinessplaceactionsLocationsPlaceActionLinksPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], MybusinessplaceactionsLocationsPlaceActionLinksPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MybusinessplaceactionsLocationsPlaceActionLinksPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MybusinessplaceactionsLocationsPlaceActionLinksPatchQueryParams.prototype, "uploadProtocol", void 0);
    return MybusinessplaceactionsLocationsPlaceActionLinksPatchQueryParams;
}(SpeakeasyBase));
export { MybusinessplaceactionsLocationsPlaceActionLinksPatchQueryParams };
var MybusinessplaceactionsLocationsPlaceActionLinksPatchRequest = /** @class */ (function (_super) {
    __extends(MybusinessplaceactionsLocationsPlaceActionLinksPatchRequest, _super);
    function MybusinessplaceactionsLocationsPlaceActionLinksPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MybusinessplaceactionsLocationsPlaceActionLinksPatchPathParams)
    ], MybusinessplaceactionsLocationsPlaceActionLinksPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MybusinessplaceactionsLocationsPlaceActionLinksPatchQueryParams)
    ], MybusinessplaceactionsLocationsPlaceActionLinksPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PlaceActionLinkInput)
    ], MybusinessplaceactionsLocationsPlaceActionLinksPatchRequest.prototype, "request", void 0);
    return MybusinessplaceactionsLocationsPlaceActionLinksPatchRequest;
}(SpeakeasyBase));
export { MybusinessplaceactionsLocationsPlaceActionLinksPatchRequest };
var MybusinessplaceactionsLocationsPlaceActionLinksPatchResponse = /** @class */ (function (_super) {
    __extends(MybusinessplaceactionsLocationsPlaceActionLinksPatchResponse, _super);
    function MybusinessplaceactionsLocationsPlaceActionLinksPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MybusinessplaceactionsLocationsPlaceActionLinksPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PlaceActionLink)
    ], MybusinessplaceactionsLocationsPlaceActionLinksPatchResponse.prototype, "placeActionLink", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MybusinessplaceactionsLocationsPlaceActionLinksPatchResponse.prototype, "statusCode", void 0);
    return MybusinessplaceactionsLocationsPlaceActionLinksPatchResponse;
}(SpeakeasyBase));
export { MybusinessplaceactionsLocationsPlaceActionLinksPatchResponse };
