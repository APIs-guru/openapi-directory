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
var DisplayvideoGoogleAudiencesGetPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoGoogleAudiencesGetPathParams, _super);
    function DisplayvideoGoogleAudiencesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=googleAudienceId" }),
        __metadata("design:type", String)
    ], DisplayvideoGoogleAudiencesGetPathParams.prototype, "googleAudienceId", void 0);
    return DisplayvideoGoogleAudiencesGetPathParams;
}(SpeakeasyBase));
export { DisplayvideoGoogleAudiencesGetPathParams };
var DisplayvideoGoogleAudiencesGetQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoGoogleAudiencesGetQueryParams, _super);
    function DisplayvideoGoogleAudiencesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoGoogleAudiencesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoGoogleAudiencesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoGoogleAudiencesGetQueryParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoGoogleAudiencesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoGoogleAudiencesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoGoogleAudiencesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoGoogleAudiencesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoGoogleAudiencesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partnerId" }),
        __metadata("design:type", String)
    ], DisplayvideoGoogleAudiencesGetQueryParams.prototype, "partnerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoGoogleAudiencesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoGoogleAudiencesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoGoogleAudiencesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoGoogleAudiencesGetQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoGoogleAudiencesGetQueryParams;
}(SpeakeasyBase));
export { DisplayvideoGoogleAudiencesGetQueryParams };
var DisplayvideoGoogleAudiencesGetSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoGoogleAudiencesGetSecurity, _super);
    function DisplayvideoGoogleAudiencesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoGoogleAudiencesGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoGoogleAudiencesGetSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoGoogleAudiencesGetSecurity;
}(SpeakeasyBase));
export { DisplayvideoGoogleAudiencesGetSecurity };
var DisplayvideoGoogleAudiencesGetRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoGoogleAudiencesGetRequest, _super);
    function DisplayvideoGoogleAudiencesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoGoogleAudiencesGetPathParams)
    ], DisplayvideoGoogleAudiencesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoGoogleAudiencesGetQueryParams)
    ], DisplayvideoGoogleAudiencesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoGoogleAudiencesGetSecurity)
    ], DisplayvideoGoogleAudiencesGetRequest.prototype, "security", void 0);
    return DisplayvideoGoogleAudiencesGetRequest;
}(SpeakeasyBase));
export { DisplayvideoGoogleAudiencesGetRequest };
var DisplayvideoGoogleAudiencesGetResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoGoogleAudiencesGetResponse, _super);
    function DisplayvideoGoogleAudiencesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoGoogleAudiencesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleAudience)
    ], DisplayvideoGoogleAudiencesGetResponse.prototype, "googleAudience", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoGoogleAudiencesGetResponse.prototype, "statusCode", void 0);
    return DisplayvideoGoogleAudiencesGetResponse;
}(SpeakeasyBase));
export { DisplayvideoGoogleAudiencesGetResponse };
