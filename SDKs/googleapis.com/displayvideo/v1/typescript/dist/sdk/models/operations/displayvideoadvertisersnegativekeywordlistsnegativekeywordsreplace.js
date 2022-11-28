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
var DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplacePathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplacePathParams, _super);
    function DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplacePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplacePathParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=negativeKeywordListId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplacePathParams.prototype, "negativeKeywordListId", void 0);
    return DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplacePathParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplacePathParams };
var DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceQueryParams, _super);
    function DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceQueryParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceQueryParams };
var DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceSecurity, _super);
    function DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceSecurity;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceSecurity };
var DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceRequest, _super);
    function DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplacePathParams)
    ], DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceQueryParams)
    ], DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ReplaceNegativeKeywordsRequestInput)
    ], DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceSecurity)
    ], DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceRequest.prototype, "security", void 0);
    return DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceRequest;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceRequest };
var DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceResponse, _super);
    function DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ReplaceNegativeKeywordsResponse)
    ], DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceResponse.prototype, "replaceNegativeKeywordsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceResponse.prototype, "statusCode", void 0);
    return DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceResponse;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceResponse };
