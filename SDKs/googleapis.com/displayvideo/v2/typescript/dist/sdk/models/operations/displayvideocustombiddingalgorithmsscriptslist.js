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
var DisplayvideoCustomBiddingAlgorithmsScriptsListPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoCustomBiddingAlgorithmsScriptsListPathParams, _super);
    function DisplayvideoCustomBiddingAlgorithmsScriptsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customBiddingAlgorithmId" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsListPathParams.prototype, "customBiddingAlgorithmId", void 0);
    return DisplayvideoCustomBiddingAlgorithmsScriptsListPathParams;
}(SpeakeasyBase));
export { DisplayvideoCustomBiddingAlgorithmsScriptsListPathParams };
var DisplayvideoCustomBiddingAlgorithmsScriptsListQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoCustomBiddingAlgorithmsScriptsListQueryParams, _super);
    function DisplayvideoCustomBiddingAlgorithmsScriptsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsListQueryParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partnerId" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsListQueryParams.prototype, "partnerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsListQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoCustomBiddingAlgorithmsScriptsListQueryParams;
}(SpeakeasyBase));
export { DisplayvideoCustomBiddingAlgorithmsScriptsListQueryParams };
var DisplayvideoCustomBiddingAlgorithmsScriptsListSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoCustomBiddingAlgorithmsScriptsListSecurity, _super);
    function DisplayvideoCustomBiddingAlgorithmsScriptsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsListSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoCustomBiddingAlgorithmsScriptsListSecurity;
}(SpeakeasyBase));
export { DisplayvideoCustomBiddingAlgorithmsScriptsListSecurity };
var DisplayvideoCustomBiddingAlgorithmsScriptsListRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoCustomBiddingAlgorithmsScriptsListRequest, _super);
    function DisplayvideoCustomBiddingAlgorithmsScriptsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoCustomBiddingAlgorithmsScriptsListPathParams)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoCustomBiddingAlgorithmsScriptsListQueryParams)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoCustomBiddingAlgorithmsScriptsListSecurity)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsListRequest.prototype, "security", void 0);
    return DisplayvideoCustomBiddingAlgorithmsScriptsListRequest;
}(SpeakeasyBase));
export { DisplayvideoCustomBiddingAlgorithmsScriptsListRequest };
var DisplayvideoCustomBiddingAlgorithmsScriptsListResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoCustomBiddingAlgorithmsScriptsListResponse, _super);
    function DisplayvideoCustomBiddingAlgorithmsScriptsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListCustomBiddingScriptsResponse)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsListResponse.prototype, "listCustomBiddingScriptsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoCustomBiddingAlgorithmsScriptsListResponse.prototype, "statusCode", void 0);
    return DisplayvideoCustomBiddingAlgorithmsScriptsListResponse;
}(SpeakeasyBase));
export { DisplayvideoCustomBiddingAlgorithmsScriptsListResponse };
