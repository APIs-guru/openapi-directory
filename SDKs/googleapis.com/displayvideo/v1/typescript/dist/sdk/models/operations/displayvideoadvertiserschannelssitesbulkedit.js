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
var DisplayvideoAdvertisersChannelsSitesBulkEditPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersChannelsSitesBulkEditPathParams, _super);
    function DisplayvideoAdvertisersChannelsSitesBulkEditPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersChannelsSitesBulkEditPathParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersChannelsSitesBulkEditPathParams.prototype, "channelId", void 0);
    return DisplayvideoAdvertisersChannelsSitesBulkEditPathParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersChannelsSitesBulkEditPathParams };
var DisplayvideoAdvertisersChannelsSitesBulkEditQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersChannelsSitesBulkEditQueryParams, _super);
    function DisplayvideoAdvertisersChannelsSitesBulkEditQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersChannelsSitesBulkEditQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersChannelsSitesBulkEditQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersChannelsSitesBulkEditQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersChannelsSitesBulkEditQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersChannelsSitesBulkEditQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersChannelsSitesBulkEditQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersChannelsSitesBulkEditQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoAdvertisersChannelsSitesBulkEditQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersChannelsSitesBulkEditQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersChannelsSitesBulkEditQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersChannelsSitesBulkEditQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoAdvertisersChannelsSitesBulkEditQueryParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersChannelsSitesBulkEditQueryParams };
var DisplayvideoAdvertisersChannelsSitesBulkEditSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersChannelsSitesBulkEditSecurity, _super);
    function DisplayvideoAdvertisersChannelsSitesBulkEditSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersChannelsSitesBulkEditSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersChannelsSitesBulkEditSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersChannelsSitesBulkEditSecurity;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersChannelsSitesBulkEditSecurity };
var DisplayvideoAdvertisersChannelsSitesBulkEditRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersChannelsSitesBulkEditRequest, _super);
    function DisplayvideoAdvertisersChannelsSitesBulkEditRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersChannelsSitesBulkEditPathParams)
    ], DisplayvideoAdvertisersChannelsSitesBulkEditRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersChannelsSitesBulkEditQueryParams)
    ], DisplayvideoAdvertisersChannelsSitesBulkEditRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BulkEditSitesRequestInput)
    ], DisplayvideoAdvertisersChannelsSitesBulkEditRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersChannelsSitesBulkEditSecurity)
    ], DisplayvideoAdvertisersChannelsSitesBulkEditRequest.prototype, "security", void 0);
    return DisplayvideoAdvertisersChannelsSitesBulkEditRequest;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersChannelsSitesBulkEditRequest };
var DisplayvideoAdvertisersChannelsSitesBulkEditResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersChannelsSitesBulkEditResponse, _super);
    function DisplayvideoAdvertisersChannelsSitesBulkEditResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BulkEditSitesResponse)
    ], DisplayvideoAdvertisersChannelsSitesBulkEditResponse.prototype, "bulkEditSitesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersChannelsSitesBulkEditResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersChannelsSitesBulkEditResponse.prototype, "statusCode", void 0);
    return DisplayvideoAdvertisersChannelsSitesBulkEditResponse;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersChannelsSitesBulkEditResponse };
