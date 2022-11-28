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
var DisplayvideoCustomBiddingAlgorithmsScriptsCreatePathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoCustomBiddingAlgorithmsScriptsCreatePathParams, _super);
    function DisplayvideoCustomBiddingAlgorithmsScriptsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customBiddingAlgorithmId" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsCreatePathParams.prototype, "customBiddingAlgorithmId", void 0);
    return DisplayvideoCustomBiddingAlgorithmsScriptsCreatePathParams;
}(SpeakeasyBase));
export { DisplayvideoCustomBiddingAlgorithmsScriptsCreatePathParams };
var DisplayvideoCustomBiddingAlgorithmsScriptsCreateQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoCustomBiddingAlgorithmsScriptsCreateQueryParams, _super);
    function DisplayvideoCustomBiddingAlgorithmsScriptsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsCreateQueryParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partnerId" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsCreateQueryParams.prototype, "partnerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoCustomBiddingAlgorithmsScriptsCreateQueryParams;
}(SpeakeasyBase));
export { DisplayvideoCustomBiddingAlgorithmsScriptsCreateQueryParams };
var DisplayvideoCustomBiddingAlgorithmsScriptsCreateSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoCustomBiddingAlgorithmsScriptsCreateSecurity, _super);
    function DisplayvideoCustomBiddingAlgorithmsScriptsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsCreateSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoCustomBiddingAlgorithmsScriptsCreateSecurity;
}(SpeakeasyBase));
export { DisplayvideoCustomBiddingAlgorithmsScriptsCreateSecurity };
var DisplayvideoCustomBiddingAlgorithmsScriptsCreateRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoCustomBiddingAlgorithmsScriptsCreateRequest, _super);
    function DisplayvideoCustomBiddingAlgorithmsScriptsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoCustomBiddingAlgorithmsScriptsCreatePathParams)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoCustomBiddingAlgorithmsScriptsCreateQueryParams)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CustomBiddingScriptInput)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoCustomBiddingAlgorithmsScriptsCreateSecurity)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsCreateRequest.prototype, "security", void 0);
    return DisplayvideoCustomBiddingAlgorithmsScriptsCreateRequest;
}(SpeakeasyBase));
export { DisplayvideoCustomBiddingAlgorithmsScriptsCreateRequest };
var DisplayvideoCustomBiddingAlgorithmsScriptsCreateResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoCustomBiddingAlgorithmsScriptsCreateResponse, _super);
    function DisplayvideoCustomBiddingAlgorithmsScriptsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CustomBiddingScript)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsCreateResponse.prototype, "customBiddingScript", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsCreateResponse.prototype, "statusCode", void 0);
    return DisplayvideoCustomBiddingAlgorithmsScriptsCreateResponse;
}(SpeakeasyBase));
export { DisplayvideoCustomBiddingAlgorithmsScriptsCreateResponse };
