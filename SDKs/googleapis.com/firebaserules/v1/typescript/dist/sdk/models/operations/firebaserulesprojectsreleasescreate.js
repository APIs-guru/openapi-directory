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
var FirebaserulesProjectsReleasesCreatePathParams = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsReleasesCreatePathParams, _super);
    function FirebaserulesProjectsReleasesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsReleasesCreatePathParams.prototype, "name", void 0);
    return FirebaserulesProjectsReleasesCreatePathParams;
}(SpeakeasyBase));
export { FirebaserulesProjectsReleasesCreatePathParams };
var FirebaserulesProjectsReleasesCreateQueryParams = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsReleasesCreateQueryParams, _super);
    function FirebaserulesProjectsReleasesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsReleasesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsReleasesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsReleasesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsReleasesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsReleasesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsReleasesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsReleasesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaserulesProjectsReleasesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsReleasesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsReleasesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsReleasesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaserulesProjectsReleasesCreateQueryParams;
}(SpeakeasyBase));
export { FirebaserulesProjectsReleasesCreateQueryParams };
var FirebaserulesProjectsReleasesCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsReleasesCreateSecurityOption1, _super);
    function FirebaserulesProjectsReleasesCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaserulesProjectsReleasesCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaserulesProjectsReleasesCreateSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaserulesProjectsReleasesCreateSecurityOption1;
}(SpeakeasyBase));
export { FirebaserulesProjectsReleasesCreateSecurityOption1 };
var FirebaserulesProjectsReleasesCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsReleasesCreateSecurityOption2, _super);
    function FirebaserulesProjectsReleasesCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaserulesProjectsReleasesCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaserulesProjectsReleasesCreateSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaserulesProjectsReleasesCreateSecurityOption2;
}(SpeakeasyBase));
export { FirebaserulesProjectsReleasesCreateSecurityOption2 };
var FirebaserulesProjectsReleasesCreateSecurity = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsReleasesCreateSecurity, _super);
    function FirebaserulesProjectsReleasesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaserulesProjectsReleasesCreateSecurityOption1)
    ], FirebaserulesProjectsReleasesCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaserulesProjectsReleasesCreateSecurityOption2)
    ], FirebaserulesProjectsReleasesCreateSecurity.prototype, "option2", void 0);
    return FirebaserulesProjectsReleasesCreateSecurity;
}(SpeakeasyBase));
export { FirebaserulesProjectsReleasesCreateSecurity };
var FirebaserulesProjectsReleasesCreateRequest = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsReleasesCreateRequest, _super);
    function FirebaserulesProjectsReleasesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaserulesProjectsReleasesCreatePathParams)
    ], FirebaserulesProjectsReleasesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaserulesProjectsReleasesCreateQueryParams)
    ], FirebaserulesProjectsReleasesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ReleaseInput)
    ], FirebaserulesProjectsReleasesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaserulesProjectsReleasesCreateSecurity)
    ], FirebaserulesProjectsReleasesCreateRequest.prototype, "security", void 0);
    return FirebaserulesProjectsReleasesCreateRequest;
}(SpeakeasyBase));
export { FirebaserulesProjectsReleasesCreateRequest };
var FirebaserulesProjectsReleasesCreateResponse = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsReleasesCreateResponse, _super);
    function FirebaserulesProjectsReleasesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebaserulesProjectsReleasesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Release)
    ], FirebaserulesProjectsReleasesCreateResponse.prototype, "release", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebaserulesProjectsReleasesCreateResponse.prototype, "statusCode", void 0);
    return FirebaserulesProjectsReleasesCreateResponse;
}(SpeakeasyBase));
export { FirebaserulesProjectsReleasesCreateResponse };
