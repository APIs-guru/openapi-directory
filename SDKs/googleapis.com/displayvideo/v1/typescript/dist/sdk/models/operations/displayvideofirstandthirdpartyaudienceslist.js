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
var DisplayvideoFirstAndThirdPartyAudiencesListQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoFirstAndThirdPartyAudiencesListQueryParams, _super);
    function DisplayvideoFirstAndThirdPartyAudiencesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesListQueryParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DisplayvideoFirstAndThirdPartyAudiencesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partnerId" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesListQueryParams.prototype, "partnerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoFirstAndThirdPartyAudiencesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesListQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoFirstAndThirdPartyAudiencesListQueryParams;
}(SpeakeasyBase));
export { DisplayvideoFirstAndThirdPartyAudiencesListQueryParams };
var DisplayvideoFirstAndThirdPartyAudiencesListSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoFirstAndThirdPartyAudiencesListSecurity, _super);
    function DisplayvideoFirstAndThirdPartyAudiencesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoFirstAndThirdPartyAudiencesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoFirstAndThirdPartyAudiencesListSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoFirstAndThirdPartyAudiencesListSecurity;
}(SpeakeasyBase));
export { DisplayvideoFirstAndThirdPartyAudiencesListSecurity };
var DisplayvideoFirstAndThirdPartyAudiencesListRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoFirstAndThirdPartyAudiencesListRequest, _super);
    function DisplayvideoFirstAndThirdPartyAudiencesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoFirstAndThirdPartyAudiencesListQueryParams)
    ], DisplayvideoFirstAndThirdPartyAudiencesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoFirstAndThirdPartyAudiencesListSecurity)
    ], DisplayvideoFirstAndThirdPartyAudiencesListRequest.prototype, "security", void 0);
    return DisplayvideoFirstAndThirdPartyAudiencesListRequest;
}(SpeakeasyBase));
export { DisplayvideoFirstAndThirdPartyAudiencesListRequest };
var DisplayvideoFirstAndThirdPartyAudiencesListResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoFirstAndThirdPartyAudiencesListResponse, _super);
    function DisplayvideoFirstAndThirdPartyAudiencesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListFirstAndThirdPartyAudiencesResponse)
    ], DisplayvideoFirstAndThirdPartyAudiencesListResponse.prototype, "listFirstAndThirdPartyAudiencesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoFirstAndThirdPartyAudiencesListResponse.prototype, "statusCode", void 0);
    return DisplayvideoFirstAndThirdPartyAudiencesListResponse;
}(SpeakeasyBase));
export { DisplayvideoFirstAndThirdPartyAudiencesListResponse };
