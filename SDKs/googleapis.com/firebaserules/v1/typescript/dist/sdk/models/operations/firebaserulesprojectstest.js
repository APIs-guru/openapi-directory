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
var FirebaserulesProjectsTestPathParams = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsTestPathParams, _super);
    function FirebaserulesProjectsTestPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsTestPathParams.prototype, "name", void 0);
    return FirebaserulesProjectsTestPathParams;
}(SpeakeasyBase));
export { FirebaserulesProjectsTestPathParams };
var FirebaserulesProjectsTestQueryParams = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsTestQueryParams, _super);
    function FirebaserulesProjectsTestQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsTestQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsTestQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsTestQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsTestQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsTestQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsTestQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsTestQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaserulesProjectsTestQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsTestQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsTestQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsTestQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaserulesProjectsTestQueryParams;
}(SpeakeasyBase));
export { FirebaserulesProjectsTestQueryParams };
var FirebaserulesProjectsTestSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsTestSecurityOption1, _super);
    function FirebaserulesProjectsTestSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaserulesProjectsTestSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaserulesProjectsTestSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaserulesProjectsTestSecurityOption1;
}(SpeakeasyBase));
export { FirebaserulesProjectsTestSecurityOption1 };
var FirebaserulesProjectsTestSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsTestSecurityOption2, _super);
    function FirebaserulesProjectsTestSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaserulesProjectsTestSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaserulesProjectsTestSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaserulesProjectsTestSecurityOption2;
}(SpeakeasyBase));
export { FirebaserulesProjectsTestSecurityOption2 };
var FirebaserulesProjectsTestSecurityOption3 = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsTestSecurityOption3, _super);
    function FirebaserulesProjectsTestSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaserulesProjectsTestSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaserulesProjectsTestSecurityOption3.prototype, "oauth2c", void 0);
    return FirebaserulesProjectsTestSecurityOption3;
}(SpeakeasyBase));
export { FirebaserulesProjectsTestSecurityOption3 };
var FirebaserulesProjectsTestSecurity = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsTestSecurity, _super);
    function FirebaserulesProjectsTestSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaserulesProjectsTestSecurityOption1)
    ], FirebaserulesProjectsTestSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaserulesProjectsTestSecurityOption2)
    ], FirebaserulesProjectsTestSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaserulesProjectsTestSecurityOption3)
    ], FirebaserulesProjectsTestSecurity.prototype, "option3", void 0);
    return FirebaserulesProjectsTestSecurity;
}(SpeakeasyBase));
export { FirebaserulesProjectsTestSecurity };
var FirebaserulesProjectsTestRequest = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsTestRequest, _super);
    function FirebaserulesProjectsTestRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaserulesProjectsTestPathParams)
    ], FirebaserulesProjectsTestRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaserulesProjectsTestQueryParams)
    ], FirebaserulesProjectsTestRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TestRulesetRequest)
    ], FirebaserulesProjectsTestRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaserulesProjectsTestSecurity)
    ], FirebaserulesProjectsTestRequest.prototype, "security", void 0);
    return FirebaserulesProjectsTestRequest;
}(SpeakeasyBase));
export { FirebaserulesProjectsTestRequest };
var FirebaserulesProjectsTestResponse = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsTestResponse, _super);
    function FirebaserulesProjectsTestResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebaserulesProjectsTestResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebaserulesProjectsTestResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TestRulesetResponse)
    ], FirebaserulesProjectsTestResponse.prototype, "testRulesetResponse", void 0);
    return FirebaserulesProjectsTestResponse;
}(SpeakeasyBase));
export { FirebaserulesProjectsTestResponse };
