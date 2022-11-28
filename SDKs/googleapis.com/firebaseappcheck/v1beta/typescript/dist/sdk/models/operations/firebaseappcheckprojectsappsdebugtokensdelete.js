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
var FirebaseappcheckProjectsAppsDebugTokensDeletePathParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsDebugTokensDeletePathParams, _super);
    function FirebaseappcheckProjectsAppsDebugTokensDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDebugTokensDeletePathParams.prototype, "name", void 0);
    return FirebaseappcheckProjectsAppsDebugTokensDeletePathParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsDebugTokensDeletePathParams };
var FirebaseappcheckProjectsAppsDebugTokensDeleteQueryParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsDebugTokensDeleteQueryParams, _super);
    function FirebaseappcheckProjectsAppsDebugTokensDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDebugTokensDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDebugTokensDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDebugTokensDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDebugTokensDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDebugTokensDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDebugTokensDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDebugTokensDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaseappcheckProjectsAppsDebugTokensDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDebugTokensDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDebugTokensDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDebugTokensDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaseappcheckProjectsAppsDebugTokensDeleteQueryParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsDebugTokensDeleteQueryParams };
var FirebaseappcheckProjectsAppsDebugTokensDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsDebugTokensDeleteSecurityOption1, _super);
    function FirebaseappcheckProjectsAppsDebugTokensDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsAppsDebugTokensDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsAppsDebugTokensDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsAppsDebugTokensDeleteSecurityOption1;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsDebugTokensDeleteSecurityOption1 };
var FirebaseappcheckProjectsAppsDebugTokensDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsDebugTokensDeleteSecurityOption2, _super);
    function FirebaseappcheckProjectsAppsDebugTokensDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsAppsDebugTokensDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsAppsDebugTokensDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsAppsDebugTokensDeleteSecurityOption2;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsDebugTokensDeleteSecurityOption2 };
var FirebaseappcheckProjectsAppsDebugTokensDeleteSecurity = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsDebugTokensDeleteSecurity, _super);
    function FirebaseappcheckProjectsAppsDebugTokensDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsAppsDebugTokensDeleteSecurityOption1)
    ], FirebaseappcheckProjectsAppsDebugTokensDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsAppsDebugTokensDeleteSecurityOption2)
    ], FirebaseappcheckProjectsAppsDebugTokensDeleteSecurity.prototype, "option2", void 0);
    return FirebaseappcheckProjectsAppsDebugTokensDeleteSecurity;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsDebugTokensDeleteSecurity };
var FirebaseappcheckProjectsAppsDebugTokensDeleteRequest = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsDebugTokensDeleteRequest, _super);
    function FirebaseappcheckProjectsAppsDebugTokensDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsDebugTokensDeletePathParams)
    ], FirebaseappcheckProjectsAppsDebugTokensDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsDebugTokensDeleteQueryParams)
    ], FirebaseappcheckProjectsAppsDebugTokensDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsDebugTokensDeleteSecurity)
    ], FirebaseappcheckProjectsAppsDebugTokensDeleteRequest.prototype, "security", void 0);
    return FirebaseappcheckProjectsAppsDebugTokensDeleteRequest;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsDebugTokensDeleteRequest };
var FirebaseappcheckProjectsAppsDebugTokensDeleteResponse = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsDebugTokensDeleteResponse, _super);
    function FirebaseappcheckProjectsAppsDebugTokensDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDebugTokensDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], FirebaseappcheckProjectsAppsDebugTokensDeleteResponse.prototype, "googleProtobufEmpty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebaseappcheckProjectsAppsDebugTokensDeleteResponse.prototype, "statusCode", void 0);
    return FirebaseappcheckProjectsAppsDebugTokensDeleteResponse;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsDebugTokensDeleteResponse };
