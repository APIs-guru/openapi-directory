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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var FirebaseProjectsAndroidAppsShaDeletePathParams = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAndroidAppsShaDeletePathParams, _super);
    function FirebaseProjectsAndroidAppsShaDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsShaDeletePathParams.prototype, "name", void 0);
    return FirebaseProjectsAndroidAppsShaDeletePathParams;
}(SpeakeasyBase));
export { FirebaseProjectsAndroidAppsShaDeletePathParams };
var FirebaseProjectsAndroidAppsShaDeleteQueryParams = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAndroidAppsShaDeleteQueryParams, _super);
    function FirebaseProjectsAndroidAppsShaDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsShaDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsShaDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsShaDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsShaDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsShaDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsShaDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsShaDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaseProjectsAndroidAppsShaDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsShaDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsShaDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsShaDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaseProjectsAndroidAppsShaDeleteQueryParams;
}(SpeakeasyBase));
export { FirebaseProjectsAndroidAppsShaDeleteQueryParams };
var FirebaseProjectsAndroidAppsShaDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAndroidAppsShaDeleteSecurityOption1, _super);
    function FirebaseProjectsAndroidAppsShaDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsAndroidAppsShaDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsAndroidAppsShaDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaseProjectsAndroidAppsShaDeleteSecurityOption1;
}(SpeakeasyBase));
export { FirebaseProjectsAndroidAppsShaDeleteSecurityOption1 };
var FirebaseProjectsAndroidAppsShaDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAndroidAppsShaDeleteSecurityOption2, _super);
    function FirebaseProjectsAndroidAppsShaDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsAndroidAppsShaDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsAndroidAppsShaDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaseProjectsAndroidAppsShaDeleteSecurityOption2;
}(SpeakeasyBase));
export { FirebaseProjectsAndroidAppsShaDeleteSecurityOption2 };
var FirebaseProjectsAndroidAppsShaDeleteSecurity = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAndroidAppsShaDeleteSecurity, _super);
    function FirebaseProjectsAndroidAppsShaDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsAndroidAppsShaDeleteSecurityOption1)
    ], FirebaseProjectsAndroidAppsShaDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsAndroidAppsShaDeleteSecurityOption2)
    ], FirebaseProjectsAndroidAppsShaDeleteSecurity.prototype, "option2", void 0);
    return FirebaseProjectsAndroidAppsShaDeleteSecurity;
}(SpeakeasyBase));
export { FirebaseProjectsAndroidAppsShaDeleteSecurity };
var FirebaseProjectsAndroidAppsShaDeleteRequest = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAndroidAppsShaDeleteRequest, _super);
    function FirebaseProjectsAndroidAppsShaDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FirebaseProjectsAndroidAppsShaDeletePathParams)
    ], FirebaseProjectsAndroidAppsShaDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirebaseProjectsAndroidAppsShaDeleteQueryParams)
    ], FirebaseProjectsAndroidAppsShaDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirebaseProjectsAndroidAppsShaDeleteSecurity)
    ], FirebaseProjectsAndroidAppsShaDeleteRequest.prototype, "security", void 0);
    return FirebaseProjectsAndroidAppsShaDeleteRequest;
}(SpeakeasyBase));
export { FirebaseProjectsAndroidAppsShaDeleteRequest };
var FirebaseProjectsAndroidAppsShaDeleteResponse = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAndroidAppsShaDeleteResponse, _super);
    function FirebaseProjectsAndroidAppsShaDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsShaDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], FirebaseProjectsAndroidAppsShaDeleteResponse.prototype, "empty", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FirebaseProjectsAndroidAppsShaDeleteResponse.prototype, "statusCode", void 0);
    return FirebaseProjectsAndroidAppsShaDeleteResponse;
}(SpeakeasyBase));
export { FirebaseProjectsAndroidAppsShaDeleteResponse };
