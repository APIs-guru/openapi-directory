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
var DisplayvideoAdvertisersCampaignsListPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsListPathParams, _super);
    function DisplayvideoAdvertisersCampaignsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsListPathParams.prototype, "advertiserId", void 0);
    return DisplayvideoAdvertisersCampaignsListPathParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsListPathParams };
var DisplayvideoAdvertisersCampaignsListQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsListQueryParams, _super);
    function DisplayvideoAdvertisersCampaignsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersCampaignsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoAdvertisersCampaignsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsListQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoAdvertisersCampaignsListQueryParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsListQueryParams };
var DisplayvideoAdvertisersCampaignsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsListSecurityOption1, _super);
    function DisplayvideoAdvertisersCampaignsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersCampaignsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersCampaignsListSecurityOption1.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersCampaignsListSecurityOption1;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsListSecurityOption1 };
var DisplayvideoAdvertisersCampaignsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsListSecurityOption2, _super);
    function DisplayvideoAdvertisersCampaignsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersCampaignsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersCampaignsListSecurityOption2.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersCampaignsListSecurityOption2;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsListSecurityOption2 };
var DisplayvideoAdvertisersCampaignsListSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsListSecurity, _super);
    function DisplayvideoAdvertisersCampaignsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DisplayvideoAdvertisersCampaignsListSecurityOption1)
    ], DisplayvideoAdvertisersCampaignsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DisplayvideoAdvertisersCampaignsListSecurityOption2)
    ], DisplayvideoAdvertisersCampaignsListSecurity.prototype, "option2", void 0);
    return DisplayvideoAdvertisersCampaignsListSecurity;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsListSecurity };
var DisplayvideoAdvertisersCampaignsListRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsListRequest, _super);
    function DisplayvideoAdvertisersCampaignsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersCampaignsListPathParams)
    ], DisplayvideoAdvertisersCampaignsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersCampaignsListQueryParams)
    ], DisplayvideoAdvertisersCampaignsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersCampaignsListSecurity)
    ], DisplayvideoAdvertisersCampaignsListRequest.prototype, "security", void 0);
    return DisplayvideoAdvertisersCampaignsListRequest;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsListRequest };
var DisplayvideoAdvertisersCampaignsListResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsListResponse, _super);
    function DisplayvideoAdvertisersCampaignsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListCampaignsResponse)
    ], DisplayvideoAdvertisersCampaignsListResponse.prototype, "listCampaignsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersCampaignsListResponse.prototype, "statusCode", void 0);
    return DisplayvideoAdvertisersCampaignsListResponse;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsListResponse };
