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
var DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryPathParams, _super);
    function DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryPathParams.prototype, "name", void 0);
    return DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryPathParams };
var DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryQueryParams, _super);
    function DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryQueryParams };
var DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurityOption1, _super);
    function DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurityOption1 };
var DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurityOption2, _super);
    function DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurityOption2 };
var DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurity, _super);
    function DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurityOption1)
    ], DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurityOption2)
    ], DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurity };
var DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryRequest, _super);
    function DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryPathParams)
    ], DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryQueryParams)
    ], DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurity)
    ], DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryRequest };
var DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryResponse, _super);
    function DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowCxV3LookupEnvironmentHistoryResponse)
    ], DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryResponse.prototype, "googleCloudDialogflowCxV3LookupEnvironmentHistoryResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryResponse };
