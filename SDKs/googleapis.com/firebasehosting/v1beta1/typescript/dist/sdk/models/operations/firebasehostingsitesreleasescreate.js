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
var FirebasehostingSitesReleasesCreatePathParams = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesReleasesCreatePathParams, _super);
    function FirebasehostingSitesReleasesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesReleasesCreatePathParams.prototype, "parent", void 0);
    return FirebasehostingSitesReleasesCreatePathParams;
}(SpeakeasyBase));
export { FirebasehostingSitesReleasesCreatePathParams };
var FirebasehostingSitesReleasesCreateQueryParams = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesReleasesCreateQueryParams, _super);
    function FirebasehostingSitesReleasesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesReleasesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesReleasesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesReleasesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesReleasesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesReleasesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesReleasesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesReleasesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebasehostingSitesReleasesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesReleasesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesReleasesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesReleasesCreateQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=versionName" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesReleasesCreateQueryParams.prototype, "versionName", void 0);
    return FirebasehostingSitesReleasesCreateQueryParams;
}(SpeakeasyBase));
export { FirebasehostingSitesReleasesCreateQueryParams };
var FirebasehostingSitesReleasesCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesReleasesCreateSecurityOption1, _super);
    function FirebasehostingSitesReleasesCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingSitesReleasesCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingSitesReleasesCreateSecurityOption1.prototype, "oauth2c", void 0);
    return FirebasehostingSitesReleasesCreateSecurityOption1;
}(SpeakeasyBase));
export { FirebasehostingSitesReleasesCreateSecurityOption1 };
var FirebasehostingSitesReleasesCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesReleasesCreateSecurityOption2, _super);
    function FirebasehostingSitesReleasesCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingSitesReleasesCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingSitesReleasesCreateSecurityOption2.prototype, "oauth2c", void 0);
    return FirebasehostingSitesReleasesCreateSecurityOption2;
}(SpeakeasyBase));
export { FirebasehostingSitesReleasesCreateSecurityOption2 };
var FirebasehostingSitesReleasesCreateSecurity = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesReleasesCreateSecurity, _super);
    function FirebasehostingSitesReleasesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingSitesReleasesCreateSecurityOption1)
    ], FirebasehostingSitesReleasesCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingSitesReleasesCreateSecurityOption2)
    ], FirebasehostingSitesReleasesCreateSecurity.prototype, "option2", void 0);
    return FirebasehostingSitesReleasesCreateSecurity;
}(SpeakeasyBase));
export { FirebasehostingSitesReleasesCreateSecurity };
var FirebasehostingSitesReleasesCreateRequest = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesReleasesCreateRequest, _super);
    function FirebasehostingSitesReleasesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingSitesReleasesCreatePathParams)
    ], FirebasehostingSitesReleasesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingSitesReleasesCreateQueryParams)
    ], FirebasehostingSitesReleasesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Release)
    ], FirebasehostingSitesReleasesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingSitesReleasesCreateSecurity)
    ], FirebasehostingSitesReleasesCreateRequest.prototype, "security", void 0);
    return FirebasehostingSitesReleasesCreateRequest;
}(SpeakeasyBase));
export { FirebasehostingSitesReleasesCreateRequest };
var FirebasehostingSitesReleasesCreateResponse = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesReleasesCreateResponse, _super);
    function FirebasehostingSitesReleasesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebasehostingSitesReleasesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Release)
    ], FirebasehostingSitesReleasesCreateResponse.prototype, "release", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebasehostingSitesReleasesCreateResponse.prototype, "statusCode", void 0);
    return FirebasehostingSitesReleasesCreateResponse;
}(SpeakeasyBase));
export { FirebasehostingSitesReleasesCreateResponse };
