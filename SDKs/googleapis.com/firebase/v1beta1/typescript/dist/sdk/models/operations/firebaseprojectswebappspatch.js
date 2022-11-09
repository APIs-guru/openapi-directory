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
var FirebaseProjectsWebAppsPatchPathParams = /** @class */ (function (_super) {
    __extends(FirebaseProjectsWebAppsPatchPathParams, _super);
    function FirebaseProjectsWebAppsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsPatchPathParams.prototype, "name", void 0);
    return FirebaseProjectsWebAppsPatchPathParams;
}(SpeakeasyBase));
export { FirebaseProjectsWebAppsPatchPathParams };
var FirebaseProjectsWebAppsPatchQueryParams = /** @class */ (function (_super) {
    __extends(FirebaseProjectsWebAppsPatchQueryParams, _super);
    function FirebaseProjectsWebAppsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaseProjectsWebAppsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaseProjectsWebAppsPatchQueryParams;
}(SpeakeasyBase));
export { FirebaseProjectsWebAppsPatchQueryParams };
var FirebaseProjectsWebAppsPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsWebAppsPatchSecurityOption1, _super);
    function FirebaseProjectsWebAppsPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsWebAppsPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsWebAppsPatchSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaseProjectsWebAppsPatchSecurityOption1;
}(SpeakeasyBase));
export { FirebaseProjectsWebAppsPatchSecurityOption1 };
var FirebaseProjectsWebAppsPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsWebAppsPatchSecurityOption2, _super);
    function FirebaseProjectsWebAppsPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsWebAppsPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsWebAppsPatchSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaseProjectsWebAppsPatchSecurityOption2;
}(SpeakeasyBase));
export { FirebaseProjectsWebAppsPatchSecurityOption2 };
var FirebaseProjectsWebAppsPatchSecurity = /** @class */ (function (_super) {
    __extends(FirebaseProjectsWebAppsPatchSecurity, _super);
    function FirebaseProjectsWebAppsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsWebAppsPatchSecurityOption1)
    ], FirebaseProjectsWebAppsPatchSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsWebAppsPatchSecurityOption2)
    ], FirebaseProjectsWebAppsPatchSecurity.prototype, "option2", void 0);
    return FirebaseProjectsWebAppsPatchSecurity;
}(SpeakeasyBase));
export { FirebaseProjectsWebAppsPatchSecurity };
var FirebaseProjectsWebAppsPatchRequest = /** @class */ (function (_super) {
    __extends(FirebaseProjectsWebAppsPatchRequest, _super);
    function FirebaseProjectsWebAppsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FirebaseProjectsWebAppsPatchPathParams)
    ], FirebaseProjectsWebAppsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirebaseProjectsWebAppsPatchQueryParams)
    ], FirebaseProjectsWebAppsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.WebApp)
    ], FirebaseProjectsWebAppsPatchRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirebaseProjectsWebAppsPatchSecurity)
    ], FirebaseProjectsWebAppsPatchRequest.prototype, "security", void 0);
    return FirebaseProjectsWebAppsPatchRequest;
}(SpeakeasyBase));
export { FirebaseProjectsWebAppsPatchRequest };
var FirebaseProjectsWebAppsPatchResponse = /** @class */ (function (_super) {
    __extends(FirebaseProjectsWebAppsPatchResponse, _super);
    function FirebaseProjectsWebAppsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FirebaseProjectsWebAppsPatchResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.WebApp)
    ], FirebaseProjectsWebAppsPatchResponse.prototype, "webApp", void 0);
    return FirebaseProjectsWebAppsPatchResponse;
}(SpeakeasyBase));
export { FirebaseProjectsWebAppsPatchResponse };
