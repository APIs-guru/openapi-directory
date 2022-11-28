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
var DisplayvideoPartnersChannelsSitesBulkEditPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoPartnersChannelsSitesBulkEditPathParams, _super);
    function DisplayvideoPartnersChannelsSitesBulkEditPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelId" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersChannelsSitesBulkEditPathParams.prototype, "channelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=partnerId" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersChannelsSitesBulkEditPathParams.prototype, "partnerId", void 0);
    return DisplayvideoPartnersChannelsSitesBulkEditPathParams;
}(SpeakeasyBase));
export { DisplayvideoPartnersChannelsSitesBulkEditPathParams };
var DisplayvideoPartnersChannelsSitesBulkEditQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoPartnersChannelsSitesBulkEditQueryParams, _super);
    function DisplayvideoPartnersChannelsSitesBulkEditQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersChannelsSitesBulkEditQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersChannelsSitesBulkEditQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersChannelsSitesBulkEditQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersChannelsSitesBulkEditQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersChannelsSitesBulkEditQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersChannelsSitesBulkEditQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersChannelsSitesBulkEditQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoPartnersChannelsSitesBulkEditQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersChannelsSitesBulkEditQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersChannelsSitesBulkEditQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersChannelsSitesBulkEditQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoPartnersChannelsSitesBulkEditQueryParams;
}(SpeakeasyBase));
export { DisplayvideoPartnersChannelsSitesBulkEditQueryParams };
var DisplayvideoPartnersChannelsSitesBulkEditSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoPartnersChannelsSitesBulkEditSecurity, _super);
    function DisplayvideoPartnersChannelsSitesBulkEditSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoPartnersChannelsSitesBulkEditSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoPartnersChannelsSitesBulkEditSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoPartnersChannelsSitesBulkEditSecurity;
}(SpeakeasyBase));
export { DisplayvideoPartnersChannelsSitesBulkEditSecurity };
var DisplayvideoPartnersChannelsSitesBulkEditRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoPartnersChannelsSitesBulkEditRequest, _super);
    function DisplayvideoPartnersChannelsSitesBulkEditRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoPartnersChannelsSitesBulkEditPathParams)
    ], DisplayvideoPartnersChannelsSitesBulkEditRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoPartnersChannelsSitesBulkEditQueryParams)
    ], DisplayvideoPartnersChannelsSitesBulkEditRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BulkEditSitesRequestInput)
    ], DisplayvideoPartnersChannelsSitesBulkEditRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoPartnersChannelsSitesBulkEditSecurity)
    ], DisplayvideoPartnersChannelsSitesBulkEditRequest.prototype, "security", void 0);
    return DisplayvideoPartnersChannelsSitesBulkEditRequest;
}(SpeakeasyBase));
export { DisplayvideoPartnersChannelsSitesBulkEditRequest };
var DisplayvideoPartnersChannelsSitesBulkEditResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoPartnersChannelsSitesBulkEditResponse, _super);
    function DisplayvideoPartnersChannelsSitesBulkEditResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BulkEditSitesResponse)
    ], DisplayvideoPartnersChannelsSitesBulkEditResponse.prototype, "bulkEditSitesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoPartnersChannelsSitesBulkEditResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoPartnersChannelsSitesBulkEditResponse.prototype, "statusCode", void 0);
    return DisplayvideoPartnersChannelsSitesBulkEditResponse;
}(SpeakeasyBase));
export { DisplayvideoPartnersChannelsSitesBulkEditResponse };
