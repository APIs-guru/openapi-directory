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
var DisplayvideoFirstAndThirdPartyAudiencesPatchPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoFirstAndThirdPartyAudiencesPatchPathParams, _super);
    function DisplayvideoFirstAndThirdPartyAudiencesPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firstAndThirdPartyAudienceId" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesPatchPathParams.prototype, "firstAndThirdPartyAudienceId", void 0);
    return DisplayvideoFirstAndThirdPartyAudiencesPatchPathParams;
}(SpeakeasyBase));
export { DisplayvideoFirstAndThirdPartyAudiencesPatchPathParams };
var DisplayvideoFirstAndThirdPartyAudiencesPatchQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoFirstAndThirdPartyAudiencesPatchQueryParams, _super);
    function DisplayvideoFirstAndThirdPartyAudiencesPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesPatchQueryParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoFirstAndThirdPartyAudiencesPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesPatchQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoFirstAndThirdPartyAudiencesPatchQueryParams;
}(SpeakeasyBase));
export { DisplayvideoFirstAndThirdPartyAudiencesPatchQueryParams };
var DisplayvideoFirstAndThirdPartyAudiencesPatchSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoFirstAndThirdPartyAudiencesPatchSecurity, _super);
    function DisplayvideoFirstAndThirdPartyAudiencesPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoFirstAndThirdPartyAudiencesPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoFirstAndThirdPartyAudiencesPatchSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoFirstAndThirdPartyAudiencesPatchSecurity;
}(SpeakeasyBase));
export { DisplayvideoFirstAndThirdPartyAudiencesPatchSecurity };
var DisplayvideoFirstAndThirdPartyAudiencesPatchRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoFirstAndThirdPartyAudiencesPatchRequest, _super);
    function DisplayvideoFirstAndThirdPartyAudiencesPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoFirstAndThirdPartyAudiencesPatchPathParams)
    ], DisplayvideoFirstAndThirdPartyAudiencesPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoFirstAndThirdPartyAudiencesPatchQueryParams)
    ], DisplayvideoFirstAndThirdPartyAudiencesPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.FirstAndThirdPartyAudienceInput)
    ], DisplayvideoFirstAndThirdPartyAudiencesPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoFirstAndThirdPartyAudiencesPatchSecurity)
    ], DisplayvideoFirstAndThirdPartyAudiencesPatchRequest.prototype, "security", void 0);
    return DisplayvideoFirstAndThirdPartyAudiencesPatchRequest;
}(SpeakeasyBase));
export { DisplayvideoFirstAndThirdPartyAudiencesPatchRequest };
var DisplayvideoFirstAndThirdPartyAudiencesPatchResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoFirstAndThirdPartyAudiencesPatchResponse, _super);
    function DisplayvideoFirstAndThirdPartyAudiencesPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FirstAndThirdPartyAudience)
    ], DisplayvideoFirstAndThirdPartyAudiencesPatchResponse.prototype, "firstAndThirdPartyAudience", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoFirstAndThirdPartyAudiencesPatchResponse.prototype, "statusCode", void 0);
    return DisplayvideoFirstAndThirdPartyAudiencesPatchResponse;
}(SpeakeasyBase));
export { DisplayvideoFirstAndThirdPartyAudiencesPatchResponse };
