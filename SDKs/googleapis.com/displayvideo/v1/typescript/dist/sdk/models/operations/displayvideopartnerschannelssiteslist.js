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
var DisplayvideoPartnersChannelsSitesListPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoPartnersChannelsSitesListPathParams, _super);
    function DisplayvideoPartnersChannelsSitesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelId" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersChannelsSitesListPathParams.prototype, "channelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=partnerId" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersChannelsSitesListPathParams.prototype, "partnerId", void 0);
    return DisplayvideoPartnersChannelsSitesListPathParams;
}(SpeakeasyBase));
export { DisplayvideoPartnersChannelsSitesListPathParams };
var DisplayvideoPartnersChannelsSitesListQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoPartnersChannelsSitesListQueryParams, _super);
    function DisplayvideoPartnersChannelsSitesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersChannelsSitesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersChannelsSitesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersChannelsSitesListQueryParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersChannelsSitesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersChannelsSitesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersChannelsSitesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersChannelsSitesListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersChannelsSitesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersChannelsSitesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersChannelsSitesListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DisplayvideoPartnersChannelsSitesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersChannelsSitesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoPartnersChannelsSitesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersChannelsSitesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersChannelsSitesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersChannelsSitesListQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoPartnersChannelsSitesListQueryParams;
}(SpeakeasyBase));
export { DisplayvideoPartnersChannelsSitesListQueryParams };
var DisplayvideoPartnersChannelsSitesListSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoPartnersChannelsSitesListSecurity, _super);
    function DisplayvideoPartnersChannelsSitesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoPartnersChannelsSitesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoPartnersChannelsSitesListSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoPartnersChannelsSitesListSecurity;
}(SpeakeasyBase));
export { DisplayvideoPartnersChannelsSitesListSecurity };
var DisplayvideoPartnersChannelsSitesListRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoPartnersChannelsSitesListRequest, _super);
    function DisplayvideoPartnersChannelsSitesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoPartnersChannelsSitesListPathParams)
    ], DisplayvideoPartnersChannelsSitesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoPartnersChannelsSitesListQueryParams)
    ], DisplayvideoPartnersChannelsSitesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoPartnersChannelsSitesListSecurity)
    ], DisplayvideoPartnersChannelsSitesListRequest.prototype, "security", void 0);
    return DisplayvideoPartnersChannelsSitesListRequest;
}(SpeakeasyBase));
export { DisplayvideoPartnersChannelsSitesListRequest };
var DisplayvideoPartnersChannelsSitesListResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoPartnersChannelsSitesListResponse, _super);
    function DisplayvideoPartnersChannelsSitesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoPartnersChannelsSitesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListSitesResponse)
    ], DisplayvideoPartnersChannelsSitesListResponse.prototype, "listSitesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoPartnersChannelsSitesListResponse.prototype, "statusCode", void 0);
    return DisplayvideoPartnersChannelsSitesListResponse;
}(SpeakeasyBase));
export { DisplayvideoPartnersChannelsSitesListResponse };
