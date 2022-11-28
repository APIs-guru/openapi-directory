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
var DialogflowProjectsLocationsAgentsTestCasesImportPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsTestCasesImportPathParams, _super);
    function DialogflowProjectsLocationsAgentsTestCasesImportPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesImportPathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsAgentsTestCasesImportPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsTestCasesImportPathParams };
var DialogflowProjectsLocationsAgentsTestCasesImportQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsTestCasesImportQueryParams, _super);
    function DialogflowProjectsLocationsAgentsTestCasesImportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesImportQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesImportQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesImportQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesImportQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesImportQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesImportQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesImportQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentsTestCasesImportQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesImportQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesImportQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesImportQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentsTestCasesImportQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsTestCasesImportQueryParams };
var DialogflowProjectsLocationsAgentsTestCasesImportSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsTestCasesImportSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentsTestCasesImportSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsTestCasesImportSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsTestCasesImportSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsTestCasesImportSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsTestCasesImportSecurityOption1 };
var DialogflowProjectsLocationsAgentsTestCasesImportSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsTestCasesImportSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentsTestCasesImportSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsTestCasesImportSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsTestCasesImportSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsTestCasesImportSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsTestCasesImportSecurityOption2 };
var DialogflowProjectsLocationsAgentsTestCasesImportSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsTestCasesImportSecurity, _super);
    function DialogflowProjectsLocationsAgentsTestCasesImportSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsTestCasesImportSecurityOption1)
    ], DialogflowProjectsLocationsAgentsTestCasesImportSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsTestCasesImportSecurityOption2)
    ], DialogflowProjectsLocationsAgentsTestCasesImportSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentsTestCasesImportSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsTestCasesImportSecurity };
var DialogflowProjectsLocationsAgentsTestCasesImportRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsTestCasesImportRequest, _super);
    function DialogflowProjectsLocationsAgentsTestCasesImportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsTestCasesImportPathParams)
    ], DialogflowProjectsLocationsAgentsTestCasesImportRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsTestCasesImportQueryParams)
    ], DialogflowProjectsLocationsAgentsTestCasesImportRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowCxV3ImportTestCasesRequest)
    ], DialogflowProjectsLocationsAgentsTestCasesImportRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsTestCasesImportSecurity)
    ], DialogflowProjectsLocationsAgentsTestCasesImportRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentsTestCasesImportRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsTestCasesImportRequest };
var DialogflowProjectsLocationsAgentsTestCasesImportResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsTestCasesImportResponse, _super);
    function DialogflowProjectsLocationsAgentsTestCasesImportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesImportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], DialogflowProjectsLocationsAgentsTestCasesImportResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentsTestCasesImportResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentsTestCasesImportResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsTestCasesImportResponse };
