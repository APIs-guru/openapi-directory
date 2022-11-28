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
var TestingProjectsTestMatricesCreatePathParams = /** @class */ (function (_super) {
    __extends(TestingProjectsTestMatricesCreatePathParams, _super);
    function TestingProjectsTestMatricesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], TestingProjectsTestMatricesCreatePathParams.prototype, "projectId", void 0);
    return TestingProjectsTestMatricesCreatePathParams;
}(SpeakeasyBase));
export { TestingProjectsTestMatricesCreatePathParams };
var TestingProjectsTestMatricesCreateQueryParams = /** @class */ (function (_super) {
    __extends(TestingProjectsTestMatricesCreateQueryParams, _super);
    function TestingProjectsTestMatricesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TestingProjectsTestMatricesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TestingProjectsTestMatricesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TestingProjectsTestMatricesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TestingProjectsTestMatricesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TestingProjectsTestMatricesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TestingProjectsTestMatricesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TestingProjectsTestMatricesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TestingProjectsTestMatricesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TestingProjectsTestMatricesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], TestingProjectsTestMatricesCreateQueryParams.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TestingProjectsTestMatricesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TestingProjectsTestMatricesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return TestingProjectsTestMatricesCreateQueryParams;
}(SpeakeasyBase));
export { TestingProjectsTestMatricesCreateQueryParams };
var TestingProjectsTestMatricesCreateSecurity = /** @class */ (function (_super) {
    __extends(TestingProjectsTestMatricesCreateSecurity, _super);
    function TestingProjectsTestMatricesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TestingProjectsTestMatricesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TestingProjectsTestMatricesCreateSecurity.prototype, "oauth2c", void 0);
    return TestingProjectsTestMatricesCreateSecurity;
}(SpeakeasyBase));
export { TestingProjectsTestMatricesCreateSecurity };
var TestingProjectsTestMatricesCreateRequest = /** @class */ (function (_super) {
    __extends(TestingProjectsTestMatricesCreateRequest, _super);
    function TestingProjectsTestMatricesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TestingProjectsTestMatricesCreatePathParams)
    ], TestingProjectsTestMatricesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TestingProjectsTestMatricesCreateQueryParams)
    ], TestingProjectsTestMatricesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TestMatrix)
    ], TestingProjectsTestMatricesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TestingProjectsTestMatricesCreateSecurity)
    ], TestingProjectsTestMatricesCreateRequest.prototype, "security", void 0);
    return TestingProjectsTestMatricesCreateRequest;
}(SpeakeasyBase));
export { TestingProjectsTestMatricesCreateRequest };
var TestingProjectsTestMatricesCreateResponse = /** @class */ (function (_super) {
    __extends(TestingProjectsTestMatricesCreateResponse, _super);
    function TestingProjectsTestMatricesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TestingProjectsTestMatricesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TestingProjectsTestMatricesCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TestMatrix)
    ], TestingProjectsTestMatricesCreateResponse.prototype, "testMatrix", void 0);
    return TestingProjectsTestMatricesCreateResponse;
}(SpeakeasyBase));
export { TestingProjectsTestMatricesCreateResponse };
