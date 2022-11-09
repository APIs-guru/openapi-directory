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
var FirebaseProjectsWebAppsRemovePathParams = /** @class */ (function (_super) {
    __extends(FirebaseProjectsWebAppsRemovePathParams, _super);
    function FirebaseProjectsWebAppsRemovePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsRemovePathParams.prototype, "name", void 0);
    return FirebaseProjectsWebAppsRemovePathParams;
}(SpeakeasyBase));
export { FirebaseProjectsWebAppsRemovePathParams };
var FirebaseProjectsWebAppsRemoveQueryParams = /** @class */ (function (_super) {
    __extends(FirebaseProjectsWebAppsRemoveQueryParams, _super);
    function FirebaseProjectsWebAppsRemoveQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsRemoveQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsRemoveQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsRemoveQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsRemoveQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsRemoveQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsRemoveQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsRemoveQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaseProjectsWebAppsRemoveQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsRemoveQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsRemoveQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsRemoveQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaseProjectsWebAppsRemoveQueryParams;
}(SpeakeasyBase));
export { FirebaseProjectsWebAppsRemoveQueryParams };
var FirebaseProjectsWebAppsRemoveSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsWebAppsRemoveSecurityOption1, _super);
    function FirebaseProjectsWebAppsRemoveSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsWebAppsRemoveSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsWebAppsRemoveSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaseProjectsWebAppsRemoveSecurityOption1;
}(SpeakeasyBase));
export { FirebaseProjectsWebAppsRemoveSecurityOption1 };
var FirebaseProjectsWebAppsRemoveSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsWebAppsRemoveSecurityOption2, _super);
    function FirebaseProjectsWebAppsRemoveSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsWebAppsRemoveSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsWebAppsRemoveSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaseProjectsWebAppsRemoveSecurityOption2;
}(SpeakeasyBase));
export { FirebaseProjectsWebAppsRemoveSecurityOption2 };
var FirebaseProjectsWebAppsRemoveSecurity = /** @class */ (function (_super) {
    __extends(FirebaseProjectsWebAppsRemoveSecurity, _super);
    function FirebaseProjectsWebAppsRemoveSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsWebAppsRemoveSecurityOption1)
    ], FirebaseProjectsWebAppsRemoveSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsWebAppsRemoveSecurityOption2)
    ], FirebaseProjectsWebAppsRemoveSecurity.prototype, "option2", void 0);
    return FirebaseProjectsWebAppsRemoveSecurity;
}(SpeakeasyBase));
export { FirebaseProjectsWebAppsRemoveSecurity };
var FirebaseProjectsWebAppsRemoveRequest = /** @class */ (function (_super) {
    __extends(FirebaseProjectsWebAppsRemoveRequest, _super);
    function FirebaseProjectsWebAppsRemoveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FirebaseProjectsWebAppsRemovePathParams)
    ], FirebaseProjectsWebAppsRemoveRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirebaseProjectsWebAppsRemoveQueryParams)
    ], FirebaseProjectsWebAppsRemoveRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RemoveWebAppRequest)
    ], FirebaseProjectsWebAppsRemoveRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirebaseProjectsWebAppsRemoveSecurity)
    ], FirebaseProjectsWebAppsRemoveRequest.prototype, "security", void 0);
    return FirebaseProjectsWebAppsRemoveRequest;
}(SpeakeasyBase));
export { FirebaseProjectsWebAppsRemoveRequest };
var FirebaseProjectsWebAppsRemoveResponse = /** @class */ (function (_super) {
    __extends(FirebaseProjectsWebAppsRemoveResponse, _super);
    function FirebaseProjectsWebAppsRemoveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsRemoveResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], FirebaseProjectsWebAppsRemoveResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FirebaseProjectsWebAppsRemoveResponse.prototype, "statusCode", void 0);
    return FirebaseProjectsWebAppsRemoveResponse;
}(SpeakeasyBase));
export { FirebaseProjectsWebAppsRemoveResponse };
