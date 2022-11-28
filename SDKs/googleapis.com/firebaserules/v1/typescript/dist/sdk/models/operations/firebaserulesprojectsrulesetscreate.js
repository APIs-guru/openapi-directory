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
var FirebaserulesProjectsRulesetsCreatePathParams = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsRulesetsCreatePathParams, _super);
    function FirebaserulesProjectsRulesetsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsCreatePathParams.prototype, "name", void 0);
    return FirebaserulesProjectsRulesetsCreatePathParams;
}(SpeakeasyBase));
export { FirebaserulesProjectsRulesetsCreatePathParams };
var FirebaserulesProjectsRulesetsCreateQueryParams = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsRulesetsCreateQueryParams, _super);
    function FirebaserulesProjectsRulesetsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaserulesProjectsRulesetsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaserulesProjectsRulesetsCreateQueryParams;
}(SpeakeasyBase));
export { FirebaserulesProjectsRulesetsCreateQueryParams };
var FirebaserulesProjectsRulesetsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsRulesetsCreateSecurityOption1, _super);
    function FirebaserulesProjectsRulesetsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaserulesProjectsRulesetsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaserulesProjectsRulesetsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaserulesProjectsRulesetsCreateSecurityOption1;
}(SpeakeasyBase));
export { FirebaserulesProjectsRulesetsCreateSecurityOption1 };
var FirebaserulesProjectsRulesetsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsRulesetsCreateSecurityOption2, _super);
    function FirebaserulesProjectsRulesetsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaserulesProjectsRulesetsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaserulesProjectsRulesetsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaserulesProjectsRulesetsCreateSecurityOption2;
}(SpeakeasyBase));
export { FirebaserulesProjectsRulesetsCreateSecurityOption2 };
var FirebaserulesProjectsRulesetsCreateSecurity = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsRulesetsCreateSecurity, _super);
    function FirebaserulesProjectsRulesetsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaserulesProjectsRulesetsCreateSecurityOption1)
    ], FirebaserulesProjectsRulesetsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaserulesProjectsRulesetsCreateSecurityOption2)
    ], FirebaserulesProjectsRulesetsCreateSecurity.prototype, "option2", void 0);
    return FirebaserulesProjectsRulesetsCreateSecurity;
}(SpeakeasyBase));
export { FirebaserulesProjectsRulesetsCreateSecurity };
var FirebaserulesProjectsRulesetsCreateRequest = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsRulesetsCreateRequest, _super);
    function FirebaserulesProjectsRulesetsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaserulesProjectsRulesetsCreatePathParams)
    ], FirebaserulesProjectsRulesetsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaserulesProjectsRulesetsCreateQueryParams)
    ], FirebaserulesProjectsRulesetsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RulesetInput)
    ], FirebaserulesProjectsRulesetsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaserulesProjectsRulesetsCreateSecurity)
    ], FirebaserulesProjectsRulesetsCreateRequest.prototype, "security", void 0);
    return FirebaserulesProjectsRulesetsCreateRequest;
}(SpeakeasyBase));
export { FirebaserulesProjectsRulesetsCreateRequest };
var FirebaserulesProjectsRulesetsCreateResponse = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsRulesetsCreateResponse, _super);
    function FirebaserulesProjectsRulesetsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Ruleset)
    ], FirebaserulesProjectsRulesetsCreateResponse.prototype, "ruleset", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebaserulesProjectsRulesetsCreateResponse.prototype, "statusCode", void 0);
    return FirebaserulesProjectsRulesetsCreateResponse;
}(SpeakeasyBase));
export { FirebaserulesProjectsRulesetsCreateResponse };
