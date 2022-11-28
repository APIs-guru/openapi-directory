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
var TestingProjectsTestMatricesGetPathParams = /** @class */ (function (_super) {
    __extends(TestingProjectsTestMatricesGetPathParams, _super);
    function TestingProjectsTestMatricesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], TestingProjectsTestMatricesGetPathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=testMatrixId" }),
        __metadata("design:type", String)
    ], TestingProjectsTestMatricesGetPathParams.prototype, "testMatrixId", void 0);
    return TestingProjectsTestMatricesGetPathParams;
}(SpeakeasyBase));
export { TestingProjectsTestMatricesGetPathParams };
var TestingProjectsTestMatricesGetQueryParams = /** @class */ (function (_super) {
    __extends(TestingProjectsTestMatricesGetQueryParams, _super);
    function TestingProjectsTestMatricesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TestingProjectsTestMatricesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TestingProjectsTestMatricesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TestingProjectsTestMatricesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TestingProjectsTestMatricesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TestingProjectsTestMatricesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TestingProjectsTestMatricesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TestingProjectsTestMatricesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TestingProjectsTestMatricesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TestingProjectsTestMatricesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TestingProjectsTestMatricesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TestingProjectsTestMatricesGetQueryParams.prototype, "uploadProtocol", void 0);
    return TestingProjectsTestMatricesGetQueryParams;
}(SpeakeasyBase));
export { TestingProjectsTestMatricesGetQueryParams };
var TestingProjectsTestMatricesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(TestingProjectsTestMatricesGetSecurityOption1, _super);
    function TestingProjectsTestMatricesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TestingProjectsTestMatricesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TestingProjectsTestMatricesGetSecurityOption1.prototype, "oauth2c", void 0);
    return TestingProjectsTestMatricesGetSecurityOption1;
}(SpeakeasyBase));
export { TestingProjectsTestMatricesGetSecurityOption1 };
var TestingProjectsTestMatricesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(TestingProjectsTestMatricesGetSecurityOption2, _super);
    function TestingProjectsTestMatricesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TestingProjectsTestMatricesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TestingProjectsTestMatricesGetSecurityOption2.prototype, "oauth2c", void 0);
    return TestingProjectsTestMatricesGetSecurityOption2;
}(SpeakeasyBase));
export { TestingProjectsTestMatricesGetSecurityOption2 };
var TestingProjectsTestMatricesGetSecurity = /** @class */ (function (_super) {
    __extends(TestingProjectsTestMatricesGetSecurity, _super);
    function TestingProjectsTestMatricesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TestingProjectsTestMatricesGetSecurityOption1)
    ], TestingProjectsTestMatricesGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TestingProjectsTestMatricesGetSecurityOption2)
    ], TestingProjectsTestMatricesGetSecurity.prototype, "option2", void 0);
    return TestingProjectsTestMatricesGetSecurity;
}(SpeakeasyBase));
export { TestingProjectsTestMatricesGetSecurity };
var TestingProjectsTestMatricesGetRequest = /** @class */ (function (_super) {
    __extends(TestingProjectsTestMatricesGetRequest, _super);
    function TestingProjectsTestMatricesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TestingProjectsTestMatricesGetPathParams)
    ], TestingProjectsTestMatricesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TestingProjectsTestMatricesGetQueryParams)
    ], TestingProjectsTestMatricesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TestingProjectsTestMatricesGetSecurity)
    ], TestingProjectsTestMatricesGetRequest.prototype, "security", void 0);
    return TestingProjectsTestMatricesGetRequest;
}(SpeakeasyBase));
export { TestingProjectsTestMatricesGetRequest };
var TestingProjectsTestMatricesGetResponse = /** @class */ (function (_super) {
    __extends(TestingProjectsTestMatricesGetResponse, _super);
    function TestingProjectsTestMatricesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TestingProjectsTestMatricesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TestingProjectsTestMatricesGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TestMatrix)
    ], TestingProjectsTestMatricesGetResponse.prototype, "testMatrix", void 0);
    return TestingProjectsTestMatricesGetResponse;
}(SpeakeasyBase));
export { TestingProjectsTestMatricesGetResponse };
