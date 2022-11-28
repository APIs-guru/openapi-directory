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
var DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeletePathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeletePathParams, _super);
    function DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeletePathParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=keywordValue" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeletePathParams.prototype, "keywordValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=negativeKeywordListId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeletePathParams.prototype, "negativeKeywordListId", void 0);
    return DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeletePathParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeletePathParams };
var DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteQueryParams, _super);
    function DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteQueryParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteQueryParams };
var DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteSecurity, _super);
    function DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteSecurity;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteSecurity };
var DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteRequest, _super);
    function DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeletePathParams)
    ], DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteQueryParams)
    ], DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteSecurity)
    ], DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteRequest.prototype, "security", void 0);
    return DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteRequest;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteRequest };
var DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteResponse, _super);
    function DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteResponse.prototype, "statusCode", void 0);
    return DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteResponse;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteResponse };
