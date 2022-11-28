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
var FirebaseProjectsAndroidAppsShaCreatePathParams = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAndroidAppsShaCreatePathParams, _super);
    function FirebaseProjectsAndroidAppsShaCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsShaCreatePathParams.prototype, "parent", void 0);
    return FirebaseProjectsAndroidAppsShaCreatePathParams;
}(SpeakeasyBase));
export { FirebaseProjectsAndroidAppsShaCreatePathParams };
var FirebaseProjectsAndroidAppsShaCreateQueryParams = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAndroidAppsShaCreateQueryParams, _super);
    function FirebaseProjectsAndroidAppsShaCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsShaCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsShaCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsShaCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsShaCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsShaCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsShaCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsShaCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaseProjectsAndroidAppsShaCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsShaCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsShaCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsShaCreateQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaseProjectsAndroidAppsShaCreateQueryParams;
}(SpeakeasyBase));
export { FirebaseProjectsAndroidAppsShaCreateQueryParams };
var FirebaseProjectsAndroidAppsShaCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAndroidAppsShaCreateSecurityOption1, _super);
    function FirebaseProjectsAndroidAppsShaCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsAndroidAppsShaCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsAndroidAppsShaCreateSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaseProjectsAndroidAppsShaCreateSecurityOption1;
}(SpeakeasyBase));
export { FirebaseProjectsAndroidAppsShaCreateSecurityOption1 };
var FirebaseProjectsAndroidAppsShaCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAndroidAppsShaCreateSecurityOption2, _super);
    function FirebaseProjectsAndroidAppsShaCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsAndroidAppsShaCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsAndroidAppsShaCreateSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaseProjectsAndroidAppsShaCreateSecurityOption2;
}(SpeakeasyBase));
export { FirebaseProjectsAndroidAppsShaCreateSecurityOption2 };
var FirebaseProjectsAndroidAppsShaCreateSecurity = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAndroidAppsShaCreateSecurity, _super);
    function FirebaseProjectsAndroidAppsShaCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsAndroidAppsShaCreateSecurityOption1)
    ], FirebaseProjectsAndroidAppsShaCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsAndroidAppsShaCreateSecurityOption2)
    ], FirebaseProjectsAndroidAppsShaCreateSecurity.prototype, "option2", void 0);
    return FirebaseProjectsAndroidAppsShaCreateSecurity;
}(SpeakeasyBase));
export { FirebaseProjectsAndroidAppsShaCreateSecurity };
var FirebaseProjectsAndroidAppsShaCreateRequest = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAndroidAppsShaCreateRequest, _super);
    function FirebaseProjectsAndroidAppsShaCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseProjectsAndroidAppsShaCreatePathParams)
    ], FirebaseProjectsAndroidAppsShaCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseProjectsAndroidAppsShaCreateQueryParams)
    ], FirebaseProjectsAndroidAppsShaCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ShaCertificate)
    ], FirebaseProjectsAndroidAppsShaCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseProjectsAndroidAppsShaCreateSecurity)
    ], FirebaseProjectsAndroidAppsShaCreateRequest.prototype, "security", void 0);
    return FirebaseProjectsAndroidAppsShaCreateRequest;
}(SpeakeasyBase));
export { FirebaseProjectsAndroidAppsShaCreateRequest };
var FirebaseProjectsAndroidAppsShaCreateResponse = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAndroidAppsShaCreateResponse, _super);
    function FirebaseProjectsAndroidAppsShaCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsShaCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ShaCertificate)
    ], FirebaseProjectsAndroidAppsShaCreateResponse.prototype, "shaCertificate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebaseProjectsAndroidAppsShaCreateResponse.prototype, "statusCode", void 0);
    return FirebaseProjectsAndroidAppsShaCreateResponse;
}(SpeakeasyBase));
export { FirebaseProjectsAndroidAppsShaCreateResponse };
