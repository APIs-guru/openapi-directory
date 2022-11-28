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
var FirebasehostingSitesVersionsCreatePathParams = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsCreatePathParams, _super);
    function FirebasehostingSitesVersionsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsCreatePathParams.prototype, "parent", void 0);
    return FirebasehostingSitesVersionsCreatePathParams;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsCreatePathParams };
var FirebasehostingSitesVersionsCreateQueryParams = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsCreateQueryParams, _super);
    function FirebasehostingSitesVersionsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebasehostingSitesVersionsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sizeBytes" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsCreateQueryParams.prototype, "sizeBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsCreateQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=versionId" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsCreateQueryParams.prototype, "versionId", void 0);
    return FirebasehostingSitesVersionsCreateQueryParams;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsCreateQueryParams };
var FirebasehostingSitesVersionsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsCreateSecurityOption1, _super);
    function FirebasehostingSitesVersionsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingSitesVersionsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingSitesVersionsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return FirebasehostingSitesVersionsCreateSecurityOption1;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsCreateSecurityOption1 };
var FirebasehostingSitesVersionsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsCreateSecurityOption2, _super);
    function FirebasehostingSitesVersionsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingSitesVersionsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingSitesVersionsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return FirebasehostingSitesVersionsCreateSecurityOption2;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsCreateSecurityOption2 };
var FirebasehostingSitesVersionsCreateSecurity = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsCreateSecurity, _super);
    function FirebasehostingSitesVersionsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingSitesVersionsCreateSecurityOption1)
    ], FirebasehostingSitesVersionsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingSitesVersionsCreateSecurityOption2)
    ], FirebasehostingSitesVersionsCreateSecurity.prototype, "option2", void 0);
    return FirebasehostingSitesVersionsCreateSecurity;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsCreateSecurity };
var FirebasehostingSitesVersionsCreateRequest = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsCreateRequest, _super);
    function FirebasehostingSitesVersionsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingSitesVersionsCreatePathParams)
    ], FirebasehostingSitesVersionsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingSitesVersionsCreateQueryParams)
    ], FirebasehostingSitesVersionsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Version)
    ], FirebasehostingSitesVersionsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingSitesVersionsCreateSecurity)
    ], FirebasehostingSitesVersionsCreateRequest.prototype, "security", void 0);
    return FirebasehostingSitesVersionsCreateRequest;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsCreateRequest };
var FirebasehostingSitesVersionsCreateResponse = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsCreateResponse, _super);
    function FirebasehostingSitesVersionsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebasehostingSitesVersionsCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Version)
    ], FirebasehostingSitesVersionsCreateResponse.prototype, "version", void 0);
    return FirebasehostingSitesVersionsCreateResponse;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsCreateResponse };
