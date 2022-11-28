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
var FirebaseProjectsIosAppsCreatePathParams = /** @class */ (function (_super) {
    __extends(FirebaseProjectsIosAppsCreatePathParams, _super);
    function FirebaseProjectsIosAppsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirebaseProjectsIosAppsCreatePathParams.prototype, "parent", void 0);
    return FirebaseProjectsIosAppsCreatePathParams;
}(SpeakeasyBase));
export { FirebaseProjectsIosAppsCreatePathParams };
var FirebaseProjectsIosAppsCreateQueryParams = /** @class */ (function (_super) {
    __extends(FirebaseProjectsIosAppsCreateQueryParams, _super);
    function FirebaseProjectsIosAppsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaseProjectsIosAppsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaseProjectsIosAppsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaseProjectsIosAppsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaseProjectsIosAppsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaseProjectsIosAppsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaseProjectsIosAppsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaseProjectsIosAppsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaseProjectsIosAppsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaseProjectsIosAppsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaseProjectsIosAppsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaseProjectsIosAppsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaseProjectsIosAppsCreateQueryParams;
}(SpeakeasyBase));
export { FirebaseProjectsIosAppsCreateQueryParams };
var FirebaseProjectsIosAppsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsIosAppsCreateSecurityOption1, _super);
    function FirebaseProjectsIosAppsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsIosAppsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsIosAppsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaseProjectsIosAppsCreateSecurityOption1;
}(SpeakeasyBase));
export { FirebaseProjectsIosAppsCreateSecurityOption1 };
var FirebaseProjectsIosAppsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsIosAppsCreateSecurityOption2, _super);
    function FirebaseProjectsIosAppsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsIosAppsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsIosAppsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaseProjectsIosAppsCreateSecurityOption2;
}(SpeakeasyBase));
export { FirebaseProjectsIosAppsCreateSecurityOption2 };
var FirebaseProjectsIosAppsCreateSecurity = /** @class */ (function (_super) {
    __extends(FirebaseProjectsIosAppsCreateSecurity, _super);
    function FirebaseProjectsIosAppsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsIosAppsCreateSecurityOption1)
    ], FirebaseProjectsIosAppsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsIosAppsCreateSecurityOption2)
    ], FirebaseProjectsIosAppsCreateSecurity.prototype, "option2", void 0);
    return FirebaseProjectsIosAppsCreateSecurity;
}(SpeakeasyBase));
export { FirebaseProjectsIosAppsCreateSecurity };
var FirebaseProjectsIosAppsCreateRequest = /** @class */ (function (_super) {
    __extends(FirebaseProjectsIosAppsCreateRequest, _super);
    function FirebaseProjectsIosAppsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseProjectsIosAppsCreatePathParams)
    ], FirebaseProjectsIosAppsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseProjectsIosAppsCreateQueryParams)
    ], FirebaseProjectsIosAppsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.IosAppInput)
    ], FirebaseProjectsIosAppsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseProjectsIosAppsCreateSecurity)
    ], FirebaseProjectsIosAppsCreateRequest.prototype, "security", void 0);
    return FirebaseProjectsIosAppsCreateRequest;
}(SpeakeasyBase));
export { FirebaseProjectsIosAppsCreateRequest };
var FirebaseProjectsIosAppsCreateResponse = /** @class */ (function (_super) {
    __extends(FirebaseProjectsIosAppsCreateResponse, _super);
    function FirebaseProjectsIosAppsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebaseProjectsIosAppsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], FirebaseProjectsIosAppsCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebaseProjectsIosAppsCreateResponse.prototype, "statusCode", void 0);
    return FirebaseProjectsIosAppsCreateResponse;
}(SpeakeasyBase));
export { FirebaseProjectsIosAppsCreateResponse };
