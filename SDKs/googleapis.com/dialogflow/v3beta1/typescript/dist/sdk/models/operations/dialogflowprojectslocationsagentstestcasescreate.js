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
var DialogflowProjectsLocationsAgentsTestCasesCreatePathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsTestCasesCreatePathParams, _super);
    function DialogflowProjectsLocationsAgentsTestCasesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesCreatePathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsAgentsTestCasesCreatePathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsTestCasesCreatePathParams };
var DialogflowProjectsLocationsAgentsTestCasesCreateQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsTestCasesCreateQueryParams, _super);
    function DialogflowProjectsLocationsAgentsTestCasesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentsTestCasesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentsTestCasesCreateQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsTestCasesCreateQueryParams };
var DialogflowProjectsLocationsAgentsTestCasesCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsTestCasesCreateSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentsTestCasesCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsTestCasesCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsTestCasesCreateSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsTestCasesCreateSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsTestCasesCreateSecurityOption1 };
var DialogflowProjectsLocationsAgentsTestCasesCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsTestCasesCreateSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentsTestCasesCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsTestCasesCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsTestCasesCreateSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsTestCasesCreateSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsTestCasesCreateSecurityOption2 };
var DialogflowProjectsLocationsAgentsTestCasesCreateSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsTestCasesCreateSecurity, _super);
    function DialogflowProjectsLocationsAgentsTestCasesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsTestCasesCreateSecurityOption1)
    ], DialogflowProjectsLocationsAgentsTestCasesCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsTestCasesCreateSecurityOption2)
    ], DialogflowProjectsLocationsAgentsTestCasesCreateSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentsTestCasesCreateSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsTestCasesCreateSecurity };
var DialogflowProjectsLocationsAgentsTestCasesCreateRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsTestCasesCreateRequest, _super);
    function DialogflowProjectsLocationsAgentsTestCasesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsTestCasesCreatePathParams)
    ], DialogflowProjectsLocationsAgentsTestCasesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsTestCasesCreateQueryParams)
    ], DialogflowProjectsLocationsAgentsTestCasesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowCxV3beta1TestCaseInput)
    ], DialogflowProjectsLocationsAgentsTestCasesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsTestCasesCreateSecurity)
    ], DialogflowProjectsLocationsAgentsTestCasesCreateRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentsTestCasesCreateRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsTestCasesCreateRequest };
var DialogflowProjectsLocationsAgentsTestCasesCreateResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsTestCasesCreateResponse, _super);
    function DialogflowProjectsLocationsAgentsTestCasesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowCxV3beta1TestCase)
    ], DialogflowProjectsLocationsAgentsTestCasesCreateResponse.prototype, "googleCloudDialogflowCxV3beta1TestCase", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentsTestCasesCreateResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentsTestCasesCreateResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsTestCasesCreateResponse };
