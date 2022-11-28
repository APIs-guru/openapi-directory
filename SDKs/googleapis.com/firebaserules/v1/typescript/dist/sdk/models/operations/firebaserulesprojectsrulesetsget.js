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
var FirebaserulesProjectsRulesetsGetPathParams = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsRulesetsGetPathParams, _super);
    function FirebaserulesProjectsRulesetsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsGetPathParams.prototype, "name", void 0);
    return FirebaserulesProjectsRulesetsGetPathParams;
}(SpeakeasyBase));
export { FirebaserulesProjectsRulesetsGetPathParams };
var FirebaserulesProjectsRulesetsGetQueryParams = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsRulesetsGetQueryParams, _super);
    function FirebaserulesProjectsRulesetsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaserulesProjectsRulesetsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsGetQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaserulesProjectsRulesetsGetQueryParams;
}(SpeakeasyBase));
export { FirebaserulesProjectsRulesetsGetQueryParams };
var FirebaserulesProjectsRulesetsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsRulesetsGetSecurityOption1, _super);
    function FirebaserulesProjectsRulesetsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaserulesProjectsRulesetsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaserulesProjectsRulesetsGetSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaserulesProjectsRulesetsGetSecurityOption1;
}(SpeakeasyBase));
export { FirebaserulesProjectsRulesetsGetSecurityOption1 };
var FirebaserulesProjectsRulesetsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsRulesetsGetSecurityOption2, _super);
    function FirebaserulesProjectsRulesetsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaserulesProjectsRulesetsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaserulesProjectsRulesetsGetSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaserulesProjectsRulesetsGetSecurityOption2;
}(SpeakeasyBase));
export { FirebaserulesProjectsRulesetsGetSecurityOption2 };
var FirebaserulesProjectsRulesetsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsRulesetsGetSecurityOption3, _super);
    function FirebaserulesProjectsRulesetsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaserulesProjectsRulesetsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaserulesProjectsRulesetsGetSecurityOption3.prototype, "oauth2c", void 0);
    return FirebaserulesProjectsRulesetsGetSecurityOption3;
}(SpeakeasyBase));
export { FirebaserulesProjectsRulesetsGetSecurityOption3 };
var FirebaserulesProjectsRulesetsGetSecurity = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsRulesetsGetSecurity, _super);
    function FirebaserulesProjectsRulesetsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaserulesProjectsRulesetsGetSecurityOption1)
    ], FirebaserulesProjectsRulesetsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaserulesProjectsRulesetsGetSecurityOption2)
    ], FirebaserulesProjectsRulesetsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaserulesProjectsRulesetsGetSecurityOption3)
    ], FirebaserulesProjectsRulesetsGetSecurity.prototype, "option3", void 0);
    return FirebaserulesProjectsRulesetsGetSecurity;
}(SpeakeasyBase));
export { FirebaserulesProjectsRulesetsGetSecurity };
var FirebaserulesProjectsRulesetsGetRequest = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsRulesetsGetRequest, _super);
    function FirebaserulesProjectsRulesetsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaserulesProjectsRulesetsGetPathParams)
    ], FirebaserulesProjectsRulesetsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaserulesProjectsRulesetsGetQueryParams)
    ], FirebaserulesProjectsRulesetsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaserulesProjectsRulesetsGetSecurity)
    ], FirebaserulesProjectsRulesetsGetRequest.prototype, "security", void 0);
    return FirebaserulesProjectsRulesetsGetRequest;
}(SpeakeasyBase));
export { FirebaserulesProjectsRulesetsGetRequest };
var FirebaserulesProjectsRulesetsGetResponse = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsRulesetsGetResponse, _super);
    function FirebaserulesProjectsRulesetsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Ruleset)
    ], FirebaserulesProjectsRulesetsGetResponse.prototype, "ruleset", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebaserulesProjectsRulesetsGetResponse.prototype, "statusCode", void 0);
    return FirebaserulesProjectsRulesetsGetResponse;
}(SpeakeasyBase));
export { FirebaserulesProjectsRulesetsGetResponse };
