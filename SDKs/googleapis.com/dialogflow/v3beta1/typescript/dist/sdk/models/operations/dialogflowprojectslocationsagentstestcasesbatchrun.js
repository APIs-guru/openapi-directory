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
var DialogflowProjectsLocationsAgentsTestCasesBatchRunPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsTestCasesBatchRunPathParams, _super);
    function DialogflowProjectsLocationsAgentsTestCasesBatchRunPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchRunPathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsAgentsTestCasesBatchRunPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsTestCasesBatchRunPathParams };
var DialogflowProjectsLocationsAgentsTestCasesBatchRunQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsTestCasesBatchRunQueryParams, _super);
    function DialogflowProjectsLocationsAgentsTestCasesBatchRunQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchRunQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchRunQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchRunQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchRunQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchRunQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchRunQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchRunQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchRunQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchRunQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchRunQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchRunQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentsTestCasesBatchRunQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsTestCasesBatchRunQueryParams };
var DialogflowProjectsLocationsAgentsTestCasesBatchRunSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsTestCasesBatchRunSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentsTestCasesBatchRunSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchRunSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchRunSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsTestCasesBatchRunSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsTestCasesBatchRunSecurityOption1 };
var DialogflowProjectsLocationsAgentsTestCasesBatchRunSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsTestCasesBatchRunSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentsTestCasesBatchRunSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchRunSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchRunSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsTestCasesBatchRunSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsTestCasesBatchRunSecurityOption2 };
var DialogflowProjectsLocationsAgentsTestCasesBatchRunSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsTestCasesBatchRunSecurity, _super);
    function DialogflowProjectsLocationsAgentsTestCasesBatchRunSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsTestCasesBatchRunSecurityOption1)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchRunSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsTestCasesBatchRunSecurityOption2)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchRunSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentsTestCasesBatchRunSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsTestCasesBatchRunSecurity };
var DialogflowProjectsLocationsAgentsTestCasesBatchRunRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsTestCasesBatchRunRequest, _super);
    function DialogflowProjectsLocationsAgentsTestCasesBatchRunRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsTestCasesBatchRunPathParams)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchRunRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsTestCasesBatchRunQueryParams)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchRunRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowCxV3beta1BatchRunTestCasesRequest)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchRunRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsTestCasesBatchRunSecurity)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchRunRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentsTestCasesBatchRunRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsTestCasesBatchRunRequest };
var DialogflowProjectsLocationsAgentsTestCasesBatchRunResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsTestCasesBatchRunResponse, _super);
    function DialogflowProjectsLocationsAgentsTestCasesBatchRunResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchRunResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchRunResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchRunResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentsTestCasesBatchRunResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsTestCasesBatchRunResponse };
