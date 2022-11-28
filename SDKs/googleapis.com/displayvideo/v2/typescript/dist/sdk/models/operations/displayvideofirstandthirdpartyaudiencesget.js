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
var DisplayvideoFirstAndThirdPartyAudiencesGetPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoFirstAndThirdPartyAudiencesGetPathParams, _super);
    function DisplayvideoFirstAndThirdPartyAudiencesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firstAndThirdPartyAudienceId" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesGetPathParams.prototype, "firstAndThirdPartyAudienceId", void 0);
    return DisplayvideoFirstAndThirdPartyAudiencesGetPathParams;
}(SpeakeasyBase));
export { DisplayvideoFirstAndThirdPartyAudiencesGetPathParams };
var DisplayvideoFirstAndThirdPartyAudiencesGetQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoFirstAndThirdPartyAudiencesGetQueryParams, _super);
    function DisplayvideoFirstAndThirdPartyAudiencesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesGetQueryParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partnerId" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesGetQueryParams.prototype, "partnerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoFirstAndThirdPartyAudiencesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesGetQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoFirstAndThirdPartyAudiencesGetQueryParams;
}(SpeakeasyBase));
export { DisplayvideoFirstAndThirdPartyAudiencesGetQueryParams };
var DisplayvideoFirstAndThirdPartyAudiencesGetSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoFirstAndThirdPartyAudiencesGetSecurity, _super);
    function DisplayvideoFirstAndThirdPartyAudiencesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoFirstAndThirdPartyAudiencesGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoFirstAndThirdPartyAudiencesGetSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoFirstAndThirdPartyAudiencesGetSecurity;
}(SpeakeasyBase));
export { DisplayvideoFirstAndThirdPartyAudiencesGetSecurity };
var DisplayvideoFirstAndThirdPartyAudiencesGetRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoFirstAndThirdPartyAudiencesGetRequest, _super);
    function DisplayvideoFirstAndThirdPartyAudiencesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoFirstAndThirdPartyAudiencesGetPathParams)
    ], DisplayvideoFirstAndThirdPartyAudiencesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoFirstAndThirdPartyAudiencesGetQueryParams)
    ], DisplayvideoFirstAndThirdPartyAudiencesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoFirstAndThirdPartyAudiencesGetSecurity)
    ], DisplayvideoFirstAndThirdPartyAudiencesGetRequest.prototype, "security", void 0);
    return DisplayvideoFirstAndThirdPartyAudiencesGetRequest;
}(SpeakeasyBase));
export { DisplayvideoFirstAndThirdPartyAudiencesGetRequest };
var DisplayvideoFirstAndThirdPartyAudiencesGetResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoFirstAndThirdPartyAudiencesGetResponse, _super);
    function DisplayvideoFirstAndThirdPartyAudiencesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FirstAndThirdPartyAudience)
    ], DisplayvideoFirstAndThirdPartyAudiencesGetResponse.prototype, "firstAndThirdPartyAudience", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoFirstAndThirdPartyAudiencesGetResponse.prototype, "statusCode", void 0);
    return DisplayvideoFirstAndThirdPartyAudiencesGetResponse;
}(SpeakeasyBase));
export { DisplayvideoFirstAndThirdPartyAudiencesGetResponse };
