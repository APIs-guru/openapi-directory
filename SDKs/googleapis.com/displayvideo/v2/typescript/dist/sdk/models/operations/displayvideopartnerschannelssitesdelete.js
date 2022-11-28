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
var DisplayvideoPartnersChannelsSitesDeletePathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoPartnersChannelsSitesDeletePathParams, _super);
    function DisplayvideoPartnersChannelsSitesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelId" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersChannelsSitesDeletePathParams.prototype, "channelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=partnerId" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersChannelsSitesDeletePathParams.prototype, "partnerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=urlOrAppId" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersChannelsSitesDeletePathParams.prototype, "urlOrAppId", void 0);
    return DisplayvideoPartnersChannelsSitesDeletePathParams;
}(SpeakeasyBase));
export { DisplayvideoPartnersChannelsSitesDeletePathParams };
var DisplayvideoPartnersChannelsSitesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoPartnersChannelsSitesDeleteQueryParams, _super);
    function DisplayvideoPartnersChannelsSitesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersChannelsSitesDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersChannelsSitesDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersChannelsSitesDeleteQueryParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersChannelsSitesDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersChannelsSitesDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersChannelsSitesDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersChannelsSitesDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersChannelsSitesDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoPartnersChannelsSitesDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersChannelsSitesDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersChannelsSitesDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersChannelsSitesDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoPartnersChannelsSitesDeleteQueryParams;
}(SpeakeasyBase));
export { DisplayvideoPartnersChannelsSitesDeleteQueryParams };
var DisplayvideoPartnersChannelsSitesDeleteSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoPartnersChannelsSitesDeleteSecurity, _super);
    function DisplayvideoPartnersChannelsSitesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoPartnersChannelsSitesDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoPartnersChannelsSitesDeleteSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoPartnersChannelsSitesDeleteSecurity;
}(SpeakeasyBase));
export { DisplayvideoPartnersChannelsSitesDeleteSecurity };
var DisplayvideoPartnersChannelsSitesDeleteRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoPartnersChannelsSitesDeleteRequest, _super);
    function DisplayvideoPartnersChannelsSitesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoPartnersChannelsSitesDeletePathParams)
    ], DisplayvideoPartnersChannelsSitesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoPartnersChannelsSitesDeleteQueryParams)
    ], DisplayvideoPartnersChannelsSitesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoPartnersChannelsSitesDeleteSecurity)
    ], DisplayvideoPartnersChannelsSitesDeleteRequest.prototype, "security", void 0);
    return DisplayvideoPartnersChannelsSitesDeleteRequest;
}(SpeakeasyBase));
export { DisplayvideoPartnersChannelsSitesDeleteRequest };
var DisplayvideoPartnersChannelsSitesDeleteResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoPartnersChannelsSitesDeleteResponse, _super);
    function DisplayvideoPartnersChannelsSitesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoPartnersChannelsSitesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DisplayvideoPartnersChannelsSitesDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoPartnersChannelsSitesDeleteResponse.prototype, "statusCode", void 0);
    return DisplayvideoPartnersChannelsSitesDeleteResponse;
}(SpeakeasyBase));
export { DisplayvideoPartnersChannelsSitesDeleteResponse };
