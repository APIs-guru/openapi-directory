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
var FirebaserulesProjectsRulesetsDeletePathParams = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsRulesetsDeletePathParams, _super);
    function FirebaserulesProjectsRulesetsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsDeletePathParams.prototype, "name", void 0);
    return FirebaserulesProjectsRulesetsDeletePathParams;
}(SpeakeasyBase));
export { FirebaserulesProjectsRulesetsDeletePathParams };
var FirebaserulesProjectsRulesetsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsRulesetsDeleteQueryParams, _super);
    function FirebaserulesProjectsRulesetsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaserulesProjectsRulesetsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaserulesProjectsRulesetsDeleteQueryParams;
}(SpeakeasyBase));
export { FirebaserulesProjectsRulesetsDeleteQueryParams };
var FirebaserulesProjectsRulesetsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsRulesetsDeleteSecurityOption1, _super);
    function FirebaserulesProjectsRulesetsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaserulesProjectsRulesetsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaserulesProjectsRulesetsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaserulesProjectsRulesetsDeleteSecurityOption1;
}(SpeakeasyBase));
export { FirebaserulesProjectsRulesetsDeleteSecurityOption1 };
var FirebaserulesProjectsRulesetsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsRulesetsDeleteSecurityOption2, _super);
    function FirebaserulesProjectsRulesetsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaserulesProjectsRulesetsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaserulesProjectsRulesetsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaserulesProjectsRulesetsDeleteSecurityOption2;
}(SpeakeasyBase));
export { FirebaserulesProjectsRulesetsDeleteSecurityOption2 };
var FirebaserulesProjectsRulesetsDeleteSecurity = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsRulesetsDeleteSecurity, _super);
    function FirebaserulesProjectsRulesetsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaserulesProjectsRulesetsDeleteSecurityOption1)
    ], FirebaserulesProjectsRulesetsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaserulesProjectsRulesetsDeleteSecurityOption2)
    ], FirebaserulesProjectsRulesetsDeleteSecurity.prototype, "option2", void 0);
    return FirebaserulesProjectsRulesetsDeleteSecurity;
}(SpeakeasyBase));
export { FirebaserulesProjectsRulesetsDeleteSecurity };
var FirebaserulesProjectsRulesetsDeleteRequest = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsRulesetsDeleteRequest, _super);
    function FirebaserulesProjectsRulesetsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaserulesProjectsRulesetsDeletePathParams)
    ], FirebaserulesProjectsRulesetsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaserulesProjectsRulesetsDeleteQueryParams)
    ], FirebaserulesProjectsRulesetsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaserulesProjectsRulesetsDeleteSecurity)
    ], FirebaserulesProjectsRulesetsDeleteRequest.prototype, "security", void 0);
    return FirebaserulesProjectsRulesetsDeleteRequest;
}(SpeakeasyBase));
export { FirebaserulesProjectsRulesetsDeleteRequest };
var FirebaserulesProjectsRulesetsDeleteResponse = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsRulesetsDeleteResponse, _super);
    function FirebaserulesProjectsRulesetsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], FirebaserulesProjectsRulesetsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebaserulesProjectsRulesetsDeleteResponse.prototype, "statusCode", void 0);
    return FirebaserulesProjectsRulesetsDeleteResponse;
}(SpeakeasyBase));
export { FirebaserulesProjectsRulesetsDeleteResponse };
