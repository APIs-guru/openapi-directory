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
var SecuritycenterProjectsMuteConfigsCreatePathParams = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsMuteConfigsCreatePathParams, _super);
    function SecuritycenterProjectsMuteConfigsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsMuteConfigsCreatePathParams.prototype, "parent", void 0);
    return SecuritycenterProjectsMuteConfigsCreatePathParams;
}(SpeakeasyBase));
export { SecuritycenterProjectsMuteConfigsCreatePathParams };
var SecuritycenterProjectsMuteConfigsCreateQueryParams = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsMuteConfigsCreateQueryParams, _super);
    function SecuritycenterProjectsMuteConfigsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsMuteConfigsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsMuteConfigsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsMuteConfigsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsMuteConfigsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsMuteConfigsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsMuteConfigsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=muteConfigId" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsMuteConfigsCreateQueryParams.prototype, "muteConfigId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsMuteConfigsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SecuritycenterProjectsMuteConfigsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsMuteConfigsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsMuteConfigsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsMuteConfigsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return SecuritycenterProjectsMuteConfigsCreateQueryParams;
}(SpeakeasyBase));
export { SecuritycenterProjectsMuteConfigsCreateQueryParams };
var SecuritycenterProjectsMuteConfigsCreateSecurity = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsMuteConfigsCreateSecurity, _super);
    function SecuritycenterProjectsMuteConfigsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SecuritycenterProjectsMuteConfigsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SecuritycenterProjectsMuteConfigsCreateSecurity.prototype, "oauth2c", void 0);
    return SecuritycenterProjectsMuteConfigsCreateSecurity;
}(SpeakeasyBase));
export { SecuritycenterProjectsMuteConfigsCreateSecurity };
var SecuritycenterProjectsMuteConfigsCreateRequest = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsMuteConfigsCreateRequest, _super);
    function SecuritycenterProjectsMuteConfigsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecuritycenterProjectsMuteConfigsCreatePathParams)
    ], SecuritycenterProjectsMuteConfigsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecuritycenterProjectsMuteConfigsCreateQueryParams)
    ], SecuritycenterProjectsMuteConfigsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudSecuritycenterV1MuteConfigInput)
    ], SecuritycenterProjectsMuteConfigsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecuritycenterProjectsMuteConfigsCreateSecurity)
    ], SecuritycenterProjectsMuteConfigsCreateRequest.prototype, "security", void 0);
    return SecuritycenterProjectsMuteConfigsCreateRequest;
}(SpeakeasyBase));
export { SecuritycenterProjectsMuteConfigsCreateRequest };
var SecuritycenterProjectsMuteConfigsCreateResponse = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsMuteConfigsCreateResponse, _super);
    function SecuritycenterProjectsMuteConfigsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SecuritycenterProjectsMuteConfigsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudSecuritycenterV1MuteConfig)
    ], SecuritycenterProjectsMuteConfigsCreateResponse.prototype, "googleCloudSecuritycenterV1MuteConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SecuritycenterProjectsMuteConfigsCreateResponse.prototype, "statusCode", void 0);
    return SecuritycenterProjectsMuteConfigsCreateResponse;
}(SpeakeasyBase));
export { SecuritycenterProjectsMuteConfigsCreateResponse };
