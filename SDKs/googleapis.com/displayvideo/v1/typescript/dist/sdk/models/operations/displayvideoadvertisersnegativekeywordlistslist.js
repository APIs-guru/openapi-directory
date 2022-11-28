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
var DisplayvideoAdvertisersNegativeKeywordListsListPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersNegativeKeywordListsListPathParams, _super);
    function DisplayvideoAdvertisersNegativeKeywordListsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsListPathParams.prototype, "advertiserId", void 0);
    return DisplayvideoAdvertisersNegativeKeywordListsListPathParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersNegativeKeywordListsListPathParams };
var DisplayvideoAdvertisersNegativeKeywordListsListQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersNegativeKeywordListsListQueryParams, _super);
    function DisplayvideoAdvertisersNegativeKeywordListsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersNegativeKeywordListsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoAdvertisersNegativeKeywordListsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsListQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoAdvertisersNegativeKeywordListsListQueryParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersNegativeKeywordListsListQueryParams };
var DisplayvideoAdvertisersNegativeKeywordListsListSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersNegativeKeywordListsListSecurity, _super);
    function DisplayvideoAdvertisersNegativeKeywordListsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersNegativeKeywordListsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersNegativeKeywordListsListSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersNegativeKeywordListsListSecurity;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersNegativeKeywordListsListSecurity };
var DisplayvideoAdvertisersNegativeKeywordListsListRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersNegativeKeywordListsListRequest, _super);
    function DisplayvideoAdvertisersNegativeKeywordListsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersNegativeKeywordListsListPathParams)
    ], DisplayvideoAdvertisersNegativeKeywordListsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersNegativeKeywordListsListQueryParams)
    ], DisplayvideoAdvertisersNegativeKeywordListsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersNegativeKeywordListsListSecurity)
    ], DisplayvideoAdvertisersNegativeKeywordListsListRequest.prototype, "security", void 0);
    return DisplayvideoAdvertisersNegativeKeywordListsListRequest;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersNegativeKeywordListsListRequest };
var DisplayvideoAdvertisersNegativeKeywordListsListResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersNegativeKeywordListsListResponse, _super);
    function DisplayvideoAdvertisersNegativeKeywordListsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersNegativeKeywordListsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListNegativeKeywordListsResponse)
    ], DisplayvideoAdvertisersNegativeKeywordListsListResponse.prototype, "listNegativeKeywordListsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersNegativeKeywordListsListResponse.prototype, "statusCode", void 0);
    return DisplayvideoAdvertisersNegativeKeywordListsListResponse;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersNegativeKeywordListsListResponse };
