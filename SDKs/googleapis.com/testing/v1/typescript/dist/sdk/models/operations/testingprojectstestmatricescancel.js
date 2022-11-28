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
var TestingProjectsTestMatricesCancelPathParams = /** @class */ (function (_super) {
    __extends(TestingProjectsTestMatricesCancelPathParams, _super);
    function TestingProjectsTestMatricesCancelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], TestingProjectsTestMatricesCancelPathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=testMatrixId" }),
        __metadata("design:type", String)
    ], TestingProjectsTestMatricesCancelPathParams.prototype, "testMatrixId", void 0);
    return TestingProjectsTestMatricesCancelPathParams;
}(SpeakeasyBase));
export { TestingProjectsTestMatricesCancelPathParams };
var TestingProjectsTestMatricesCancelQueryParams = /** @class */ (function (_super) {
    __extends(TestingProjectsTestMatricesCancelQueryParams, _super);
    function TestingProjectsTestMatricesCancelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TestingProjectsTestMatricesCancelQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TestingProjectsTestMatricesCancelQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TestingProjectsTestMatricesCancelQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TestingProjectsTestMatricesCancelQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TestingProjectsTestMatricesCancelQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TestingProjectsTestMatricesCancelQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TestingProjectsTestMatricesCancelQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TestingProjectsTestMatricesCancelQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TestingProjectsTestMatricesCancelQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TestingProjectsTestMatricesCancelQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TestingProjectsTestMatricesCancelQueryParams.prototype, "uploadProtocol", void 0);
    return TestingProjectsTestMatricesCancelQueryParams;
}(SpeakeasyBase));
export { TestingProjectsTestMatricesCancelQueryParams };
var TestingProjectsTestMatricesCancelSecurity = /** @class */ (function (_super) {
    __extends(TestingProjectsTestMatricesCancelSecurity, _super);
    function TestingProjectsTestMatricesCancelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TestingProjectsTestMatricesCancelSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TestingProjectsTestMatricesCancelSecurity.prototype, "oauth2c", void 0);
    return TestingProjectsTestMatricesCancelSecurity;
}(SpeakeasyBase));
export { TestingProjectsTestMatricesCancelSecurity };
var TestingProjectsTestMatricesCancelRequest = /** @class */ (function (_super) {
    __extends(TestingProjectsTestMatricesCancelRequest, _super);
    function TestingProjectsTestMatricesCancelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TestingProjectsTestMatricesCancelPathParams)
    ], TestingProjectsTestMatricesCancelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TestingProjectsTestMatricesCancelQueryParams)
    ], TestingProjectsTestMatricesCancelRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TestingProjectsTestMatricesCancelSecurity)
    ], TestingProjectsTestMatricesCancelRequest.prototype, "security", void 0);
    return TestingProjectsTestMatricesCancelRequest;
}(SpeakeasyBase));
export { TestingProjectsTestMatricesCancelRequest };
var TestingProjectsTestMatricesCancelResponse = /** @class */ (function (_super) {
    __extends(TestingProjectsTestMatricesCancelResponse, _super);
    function TestingProjectsTestMatricesCancelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CancelTestMatrixResponse)
    ], TestingProjectsTestMatricesCancelResponse.prototype, "cancelTestMatrixResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TestingProjectsTestMatricesCancelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TestingProjectsTestMatricesCancelResponse.prototype, "statusCode", void 0);
    return TestingProjectsTestMatricesCancelResponse;
}(SpeakeasyBase));
export { TestingProjectsTestMatricesCancelResponse };
