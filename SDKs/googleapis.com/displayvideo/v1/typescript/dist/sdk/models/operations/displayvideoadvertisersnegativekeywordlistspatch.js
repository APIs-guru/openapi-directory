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
var DisplayvideoAdvertisersNegativeKeywordListsPatchPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersNegativeKeywordListsPatchPathParams, _super);
    function DisplayvideoAdvertisersNegativeKeywordListsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsPatchPathParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=negativeKeywordListId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsPatchPathParams.prototype, "negativeKeywordListId", void 0);
    return DisplayvideoAdvertisersNegativeKeywordListsPatchPathParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersNegativeKeywordListsPatchPathParams };
var DisplayvideoAdvertisersNegativeKeywordListsPatchQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersNegativeKeywordListsPatchQueryParams, _super);
    function DisplayvideoAdvertisersNegativeKeywordListsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoAdvertisersNegativeKeywordListsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoAdvertisersNegativeKeywordListsPatchQueryParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersNegativeKeywordListsPatchQueryParams };
var DisplayvideoAdvertisersNegativeKeywordListsPatchSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersNegativeKeywordListsPatchSecurity, _super);
    function DisplayvideoAdvertisersNegativeKeywordListsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersNegativeKeywordListsPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersNegativeKeywordListsPatchSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersNegativeKeywordListsPatchSecurity;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersNegativeKeywordListsPatchSecurity };
var DisplayvideoAdvertisersNegativeKeywordListsPatchRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersNegativeKeywordListsPatchRequest, _super);
    function DisplayvideoAdvertisersNegativeKeywordListsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersNegativeKeywordListsPatchPathParams)
    ], DisplayvideoAdvertisersNegativeKeywordListsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersNegativeKeywordListsPatchQueryParams)
    ], DisplayvideoAdvertisersNegativeKeywordListsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.NegativeKeywordListInput)
    ], DisplayvideoAdvertisersNegativeKeywordListsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersNegativeKeywordListsPatchSecurity)
    ], DisplayvideoAdvertisersNegativeKeywordListsPatchRequest.prototype, "security", void 0);
    return DisplayvideoAdvertisersNegativeKeywordListsPatchRequest;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersNegativeKeywordListsPatchRequest };
var DisplayvideoAdvertisersNegativeKeywordListsPatchResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersNegativeKeywordListsPatchResponse, _super);
    function DisplayvideoAdvertisersNegativeKeywordListsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NegativeKeywordList)
    ], DisplayvideoAdvertisersNegativeKeywordListsPatchResponse.prototype, "negativeKeywordList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersNegativeKeywordListsPatchResponse.prototype, "statusCode", void 0);
    return DisplayvideoAdvertisersNegativeKeywordListsPatchResponse;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersNegativeKeywordListsPatchResponse };
