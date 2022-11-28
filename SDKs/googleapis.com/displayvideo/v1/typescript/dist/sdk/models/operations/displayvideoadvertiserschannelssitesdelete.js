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
var DisplayvideoAdvertisersChannelsSitesDeletePathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersChannelsSitesDeletePathParams, _super);
    function DisplayvideoAdvertisersChannelsSitesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersChannelsSitesDeletePathParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersChannelsSitesDeletePathParams.prototype, "channelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=urlOrAppId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersChannelsSitesDeletePathParams.prototype, "urlOrAppId", void 0);
    return DisplayvideoAdvertisersChannelsSitesDeletePathParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersChannelsSitesDeletePathParams };
var DisplayvideoAdvertisersChannelsSitesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersChannelsSitesDeleteQueryParams, _super);
    function DisplayvideoAdvertisersChannelsSitesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersChannelsSitesDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersChannelsSitesDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersChannelsSitesDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersChannelsSitesDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersChannelsSitesDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersChannelsSitesDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersChannelsSitesDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partnerId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersChannelsSitesDeleteQueryParams.prototype, "partnerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoAdvertisersChannelsSitesDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersChannelsSitesDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersChannelsSitesDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersChannelsSitesDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoAdvertisersChannelsSitesDeleteQueryParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersChannelsSitesDeleteQueryParams };
var DisplayvideoAdvertisersChannelsSitesDeleteSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersChannelsSitesDeleteSecurity, _super);
    function DisplayvideoAdvertisersChannelsSitesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersChannelsSitesDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersChannelsSitesDeleteSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersChannelsSitesDeleteSecurity;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersChannelsSitesDeleteSecurity };
var DisplayvideoAdvertisersChannelsSitesDeleteRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersChannelsSitesDeleteRequest, _super);
    function DisplayvideoAdvertisersChannelsSitesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersChannelsSitesDeletePathParams)
    ], DisplayvideoAdvertisersChannelsSitesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersChannelsSitesDeleteQueryParams)
    ], DisplayvideoAdvertisersChannelsSitesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersChannelsSitesDeleteSecurity)
    ], DisplayvideoAdvertisersChannelsSitesDeleteRequest.prototype, "security", void 0);
    return DisplayvideoAdvertisersChannelsSitesDeleteRequest;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersChannelsSitesDeleteRequest };
var DisplayvideoAdvertisersChannelsSitesDeleteResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersChannelsSitesDeleteResponse, _super);
    function DisplayvideoAdvertisersChannelsSitesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersChannelsSitesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DisplayvideoAdvertisersChannelsSitesDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersChannelsSitesDeleteResponse.prototype, "statusCode", void 0);
    return DisplayvideoAdvertisersChannelsSitesDeleteResponse;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersChannelsSitesDeleteResponse };
