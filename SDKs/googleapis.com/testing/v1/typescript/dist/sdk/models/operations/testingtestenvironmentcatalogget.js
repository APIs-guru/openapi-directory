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
export var TestingTestEnvironmentCatalogGetEnvironmentTypeEnum;
(function (TestingTestEnvironmentCatalogGetEnvironmentTypeEnum) {
    TestingTestEnvironmentCatalogGetEnvironmentTypeEnum["EnvironmentTypeUnspecified"] = "ENVIRONMENT_TYPE_UNSPECIFIED";
    TestingTestEnvironmentCatalogGetEnvironmentTypeEnum["Android"] = "ANDROID";
    TestingTestEnvironmentCatalogGetEnvironmentTypeEnum["Ios"] = "IOS";
    TestingTestEnvironmentCatalogGetEnvironmentTypeEnum["NetworkConfiguration"] = "NETWORK_CONFIGURATION";
    TestingTestEnvironmentCatalogGetEnvironmentTypeEnum["ProvidedSoftware"] = "PROVIDED_SOFTWARE";
    TestingTestEnvironmentCatalogGetEnvironmentTypeEnum["DeviceIpBlocks"] = "DEVICE_IP_BLOCKS";
})(TestingTestEnvironmentCatalogGetEnvironmentTypeEnum || (TestingTestEnvironmentCatalogGetEnvironmentTypeEnum = {}));
var TestingTestEnvironmentCatalogGetPathParams = /** @class */ (function (_super) {
    __extends(TestingTestEnvironmentCatalogGetPathParams, _super);
    function TestingTestEnvironmentCatalogGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environmentType" }),
        __metadata("design:type", String)
    ], TestingTestEnvironmentCatalogGetPathParams.prototype, "environmentType", void 0);
    return TestingTestEnvironmentCatalogGetPathParams;
}(SpeakeasyBase));
export { TestingTestEnvironmentCatalogGetPathParams };
var TestingTestEnvironmentCatalogGetQueryParams = /** @class */ (function (_super) {
    __extends(TestingTestEnvironmentCatalogGetQueryParams, _super);
    function TestingTestEnvironmentCatalogGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TestingTestEnvironmentCatalogGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TestingTestEnvironmentCatalogGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TestingTestEnvironmentCatalogGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TestingTestEnvironmentCatalogGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TestingTestEnvironmentCatalogGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TestingTestEnvironmentCatalogGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TestingTestEnvironmentCatalogGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TestingTestEnvironmentCatalogGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projectId" }),
        __metadata("design:type", String)
    ], TestingTestEnvironmentCatalogGetQueryParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TestingTestEnvironmentCatalogGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TestingTestEnvironmentCatalogGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TestingTestEnvironmentCatalogGetQueryParams.prototype, "uploadProtocol", void 0);
    return TestingTestEnvironmentCatalogGetQueryParams;
}(SpeakeasyBase));
export { TestingTestEnvironmentCatalogGetQueryParams };
var TestingTestEnvironmentCatalogGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(TestingTestEnvironmentCatalogGetSecurityOption1, _super);
    function TestingTestEnvironmentCatalogGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TestingTestEnvironmentCatalogGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TestingTestEnvironmentCatalogGetSecurityOption1.prototype, "oauth2c", void 0);
    return TestingTestEnvironmentCatalogGetSecurityOption1;
}(SpeakeasyBase));
export { TestingTestEnvironmentCatalogGetSecurityOption1 };
var TestingTestEnvironmentCatalogGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(TestingTestEnvironmentCatalogGetSecurityOption2, _super);
    function TestingTestEnvironmentCatalogGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TestingTestEnvironmentCatalogGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TestingTestEnvironmentCatalogGetSecurityOption2.prototype, "oauth2c", void 0);
    return TestingTestEnvironmentCatalogGetSecurityOption2;
}(SpeakeasyBase));
export { TestingTestEnvironmentCatalogGetSecurityOption2 };
var TestingTestEnvironmentCatalogGetSecurity = /** @class */ (function (_super) {
    __extends(TestingTestEnvironmentCatalogGetSecurity, _super);
    function TestingTestEnvironmentCatalogGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TestingTestEnvironmentCatalogGetSecurityOption1)
    ], TestingTestEnvironmentCatalogGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TestingTestEnvironmentCatalogGetSecurityOption2)
    ], TestingTestEnvironmentCatalogGetSecurity.prototype, "option2", void 0);
    return TestingTestEnvironmentCatalogGetSecurity;
}(SpeakeasyBase));
export { TestingTestEnvironmentCatalogGetSecurity };
var TestingTestEnvironmentCatalogGetRequest = /** @class */ (function (_super) {
    __extends(TestingTestEnvironmentCatalogGetRequest, _super);
    function TestingTestEnvironmentCatalogGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TestingTestEnvironmentCatalogGetPathParams)
    ], TestingTestEnvironmentCatalogGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TestingTestEnvironmentCatalogGetQueryParams)
    ], TestingTestEnvironmentCatalogGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TestingTestEnvironmentCatalogGetSecurity)
    ], TestingTestEnvironmentCatalogGetRequest.prototype, "security", void 0);
    return TestingTestEnvironmentCatalogGetRequest;
}(SpeakeasyBase));
export { TestingTestEnvironmentCatalogGetRequest };
var TestingTestEnvironmentCatalogGetResponse = /** @class */ (function (_super) {
    __extends(TestingTestEnvironmentCatalogGetResponse, _super);
    function TestingTestEnvironmentCatalogGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TestingTestEnvironmentCatalogGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TestingTestEnvironmentCatalogGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TestEnvironmentCatalog)
    ], TestingTestEnvironmentCatalogGetResponse.prototype, "testEnvironmentCatalog", void 0);
    return TestingTestEnvironmentCatalogGetResponse;
}(SpeakeasyBase));
export { TestingTestEnvironmentCatalogGetResponse };
