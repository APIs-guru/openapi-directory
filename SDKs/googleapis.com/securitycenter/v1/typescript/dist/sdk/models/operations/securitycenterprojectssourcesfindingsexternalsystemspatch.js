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
var SecuritycenterProjectsSourcesFindingsExternalSystemsPatchPathParams = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsSourcesFindingsExternalSystemsPatchPathParams, _super);
    function SecuritycenterProjectsSourcesFindingsExternalSystemsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsExternalSystemsPatchPathParams.prototype, "name", void 0);
    return SecuritycenterProjectsSourcesFindingsExternalSystemsPatchPathParams;
}(SpeakeasyBase));
export { SecuritycenterProjectsSourcesFindingsExternalSystemsPatchPathParams };
var SecuritycenterProjectsSourcesFindingsExternalSystemsPatchQueryParams = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsSourcesFindingsExternalSystemsPatchQueryParams, _super);
    function SecuritycenterProjectsSourcesFindingsExternalSystemsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsExternalSystemsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsExternalSystemsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsExternalSystemsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsExternalSystemsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsExternalSystemsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsExternalSystemsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsExternalSystemsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SecuritycenterProjectsSourcesFindingsExternalSystemsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsExternalSystemsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsExternalSystemsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsExternalSystemsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsExternalSystemsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return SecuritycenterProjectsSourcesFindingsExternalSystemsPatchQueryParams;
}(SpeakeasyBase));
export { SecuritycenterProjectsSourcesFindingsExternalSystemsPatchQueryParams };
var SecuritycenterProjectsSourcesFindingsExternalSystemsPatchSecurity = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsSourcesFindingsExternalSystemsPatchSecurity, _super);
    function SecuritycenterProjectsSourcesFindingsExternalSystemsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SecuritycenterProjectsSourcesFindingsExternalSystemsPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SecuritycenterProjectsSourcesFindingsExternalSystemsPatchSecurity.prototype, "oauth2c", void 0);
    return SecuritycenterProjectsSourcesFindingsExternalSystemsPatchSecurity;
}(SpeakeasyBase));
export { SecuritycenterProjectsSourcesFindingsExternalSystemsPatchSecurity };
var SecuritycenterProjectsSourcesFindingsExternalSystemsPatchRequest = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsSourcesFindingsExternalSystemsPatchRequest, _super);
    function SecuritycenterProjectsSourcesFindingsExternalSystemsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecuritycenterProjectsSourcesFindingsExternalSystemsPatchPathParams)
    ], SecuritycenterProjectsSourcesFindingsExternalSystemsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecuritycenterProjectsSourcesFindingsExternalSystemsPatchQueryParams)
    ], SecuritycenterProjectsSourcesFindingsExternalSystemsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudSecuritycenterV1ExternalSystem)
    ], SecuritycenterProjectsSourcesFindingsExternalSystemsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecuritycenterProjectsSourcesFindingsExternalSystemsPatchSecurity)
    ], SecuritycenterProjectsSourcesFindingsExternalSystemsPatchRequest.prototype, "security", void 0);
    return SecuritycenterProjectsSourcesFindingsExternalSystemsPatchRequest;
}(SpeakeasyBase));
export { SecuritycenterProjectsSourcesFindingsExternalSystemsPatchRequest };
var SecuritycenterProjectsSourcesFindingsExternalSystemsPatchResponse = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsSourcesFindingsExternalSystemsPatchResponse, _super);
    function SecuritycenterProjectsSourcesFindingsExternalSystemsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsExternalSystemsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudSecuritycenterV1ExternalSystem)
    ], SecuritycenterProjectsSourcesFindingsExternalSystemsPatchResponse.prototype, "googleCloudSecuritycenterV1ExternalSystem", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SecuritycenterProjectsSourcesFindingsExternalSystemsPatchResponse.prototype, "statusCode", void 0);
    return SecuritycenterProjectsSourcesFindingsExternalSystemsPatchResponse;
}(SpeakeasyBase));
export { SecuritycenterProjectsSourcesFindingsExternalSystemsPatchResponse };
