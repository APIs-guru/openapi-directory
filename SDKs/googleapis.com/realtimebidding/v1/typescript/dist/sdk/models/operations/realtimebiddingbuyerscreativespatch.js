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
var RealtimebiddingBuyersCreativesPatchPathParams = /** @class */ (function (_super) {
    __extends(RealtimebiddingBuyersCreativesPatchPathParams, _super);
    function RealtimebiddingBuyersCreativesPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersCreativesPatchPathParams.prototype, "name", void 0);
    return RealtimebiddingBuyersCreativesPatchPathParams;
}(SpeakeasyBase));
export { RealtimebiddingBuyersCreativesPatchPathParams };
var RealtimebiddingBuyersCreativesPatchQueryParams = /** @class */ (function (_super) {
    __extends(RealtimebiddingBuyersCreativesPatchQueryParams, _super);
    function RealtimebiddingBuyersCreativesPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersCreativesPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersCreativesPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersCreativesPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersCreativesPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersCreativesPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersCreativesPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersCreativesPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RealtimebiddingBuyersCreativesPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersCreativesPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersCreativesPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersCreativesPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersCreativesPatchQueryParams.prototype, "uploadProtocol", void 0);
    return RealtimebiddingBuyersCreativesPatchQueryParams;
}(SpeakeasyBase));
export { RealtimebiddingBuyersCreativesPatchQueryParams };
var RealtimebiddingBuyersCreativesPatchSecurity = /** @class */ (function (_super) {
    __extends(RealtimebiddingBuyersCreativesPatchSecurity, _super);
    function RealtimebiddingBuyersCreativesPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RealtimebiddingBuyersCreativesPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RealtimebiddingBuyersCreativesPatchSecurity.prototype, "oauth2c", void 0);
    return RealtimebiddingBuyersCreativesPatchSecurity;
}(SpeakeasyBase));
export { RealtimebiddingBuyersCreativesPatchSecurity };
var RealtimebiddingBuyersCreativesPatchRequest = /** @class */ (function (_super) {
    __extends(RealtimebiddingBuyersCreativesPatchRequest, _super);
    function RealtimebiddingBuyersCreativesPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RealtimebiddingBuyersCreativesPatchPathParams)
    ], RealtimebiddingBuyersCreativesPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RealtimebiddingBuyersCreativesPatchQueryParams)
    ], RealtimebiddingBuyersCreativesPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreativeInput)
    ], RealtimebiddingBuyersCreativesPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RealtimebiddingBuyersCreativesPatchSecurity)
    ], RealtimebiddingBuyersCreativesPatchRequest.prototype, "security", void 0);
    return RealtimebiddingBuyersCreativesPatchRequest;
}(SpeakeasyBase));
export { RealtimebiddingBuyersCreativesPatchRequest };
var RealtimebiddingBuyersCreativesPatchResponse = /** @class */ (function (_super) {
    __extends(RealtimebiddingBuyersCreativesPatchResponse, _super);
    function RealtimebiddingBuyersCreativesPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersCreativesPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Creative)
    ], RealtimebiddingBuyersCreativesPatchResponse.prototype, "creative", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RealtimebiddingBuyersCreativesPatchResponse.prototype, "statusCode", void 0);
    return RealtimebiddingBuyersCreativesPatchResponse;
}(SpeakeasyBase));
export { RealtimebiddingBuyersCreativesPatchResponse };
