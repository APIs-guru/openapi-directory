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
var DisplayvideoCustomBiddingAlgorithmsPatchPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoCustomBiddingAlgorithmsPatchPathParams, _super);
    function DisplayvideoCustomBiddingAlgorithmsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customBiddingAlgorithmId" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsPatchPathParams.prototype, "customBiddingAlgorithmId", void 0);
    return DisplayvideoCustomBiddingAlgorithmsPatchPathParams;
}(SpeakeasyBase));
export { DisplayvideoCustomBiddingAlgorithmsPatchPathParams };
var DisplayvideoCustomBiddingAlgorithmsPatchQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoCustomBiddingAlgorithmsPatchQueryParams, _super);
    function DisplayvideoCustomBiddingAlgorithmsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoCustomBiddingAlgorithmsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoCustomBiddingAlgorithmsPatchQueryParams;
}(SpeakeasyBase));
export { DisplayvideoCustomBiddingAlgorithmsPatchQueryParams };
var DisplayvideoCustomBiddingAlgorithmsPatchSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoCustomBiddingAlgorithmsPatchSecurity, _super);
    function DisplayvideoCustomBiddingAlgorithmsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoCustomBiddingAlgorithmsPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoCustomBiddingAlgorithmsPatchSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoCustomBiddingAlgorithmsPatchSecurity;
}(SpeakeasyBase));
export { DisplayvideoCustomBiddingAlgorithmsPatchSecurity };
var DisplayvideoCustomBiddingAlgorithmsPatchRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoCustomBiddingAlgorithmsPatchRequest, _super);
    function DisplayvideoCustomBiddingAlgorithmsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoCustomBiddingAlgorithmsPatchPathParams)
    ], DisplayvideoCustomBiddingAlgorithmsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoCustomBiddingAlgorithmsPatchQueryParams)
    ], DisplayvideoCustomBiddingAlgorithmsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CustomBiddingAlgorithmInput)
    ], DisplayvideoCustomBiddingAlgorithmsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoCustomBiddingAlgorithmsPatchSecurity)
    ], DisplayvideoCustomBiddingAlgorithmsPatchRequest.prototype, "security", void 0);
    return DisplayvideoCustomBiddingAlgorithmsPatchRequest;
}(SpeakeasyBase));
export { DisplayvideoCustomBiddingAlgorithmsPatchRequest };
var DisplayvideoCustomBiddingAlgorithmsPatchResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoCustomBiddingAlgorithmsPatchResponse, _super);
    function DisplayvideoCustomBiddingAlgorithmsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CustomBiddingAlgorithm)
    ], DisplayvideoCustomBiddingAlgorithmsPatchResponse.prototype, "customBiddingAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoCustomBiddingAlgorithmsPatchResponse.prototype, "statusCode", void 0);
    return DisplayvideoCustomBiddingAlgorithmsPatchResponse;
}(SpeakeasyBase));
export { DisplayvideoCustomBiddingAlgorithmsPatchResponse };
