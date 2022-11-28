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
var DisplayvideoCustomBiddingAlgorithmsGetPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoCustomBiddingAlgorithmsGetPathParams, _super);
    function DisplayvideoCustomBiddingAlgorithmsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customBiddingAlgorithmId" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsGetPathParams.prototype, "customBiddingAlgorithmId", void 0);
    return DisplayvideoCustomBiddingAlgorithmsGetPathParams;
}(SpeakeasyBase));
export { DisplayvideoCustomBiddingAlgorithmsGetPathParams };
var DisplayvideoCustomBiddingAlgorithmsGetQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoCustomBiddingAlgorithmsGetQueryParams, _super);
    function DisplayvideoCustomBiddingAlgorithmsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsGetQueryParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partnerId" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsGetQueryParams.prototype, "partnerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoCustomBiddingAlgorithmsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsGetQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoCustomBiddingAlgorithmsGetQueryParams;
}(SpeakeasyBase));
export { DisplayvideoCustomBiddingAlgorithmsGetQueryParams };
var DisplayvideoCustomBiddingAlgorithmsGetSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoCustomBiddingAlgorithmsGetSecurity, _super);
    function DisplayvideoCustomBiddingAlgorithmsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoCustomBiddingAlgorithmsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoCustomBiddingAlgorithmsGetSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoCustomBiddingAlgorithmsGetSecurity;
}(SpeakeasyBase));
export { DisplayvideoCustomBiddingAlgorithmsGetSecurity };
var DisplayvideoCustomBiddingAlgorithmsGetRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoCustomBiddingAlgorithmsGetRequest, _super);
    function DisplayvideoCustomBiddingAlgorithmsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoCustomBiddingAlgorithmsGetPathParams)
    ], DisplayvideoCustomBiddingAlgorithmsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoCustomBiddingAlgorithmsGetQueryParams)
    ], DisplayvideoCustomBiddingAlgorithmsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoCustomBiddingAlgorithmsGetSecurity)
    ], DisplayvideoCustomBiddingAlgorithmsGetRequest.prototype, "security", void 0);
    return DisplayvideoCustomBiddingAlgorithmsGetRequest;
}(SpeakeasyBase));
export { DisplayvideoCustomBiddingAlgorithmsGetRequest };
var DisplayvideoCustomBiddingAlgorithmsGetResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoCustomBiddingAlgorithmsGetResponse, _super);
    function DisplayvideoCustomBiddingAlgorithmsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CustomBiddingAlgorithm)
    ], DisplayvideoCustomBiddingAlgorithmsGetResponse.prototype, "customBiddingAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoCustomBiddingAlgorithmsGetResponse.prototype, "statusCode", void 0);
    return DisplayvideoCustomBiddingAlgorithmsGetResponse;
}(SpeakeasyBase));
export { DisplayvideoCustomBiddingAlgorithmsGetResponse };
