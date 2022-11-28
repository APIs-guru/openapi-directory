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
var DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartPathParams, _super);
    function DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartPathParams.prototype, "name", void 0);
    return DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartPathParams };
var DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartQueryParams, _super);
    function DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartQueryParams };
var DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartSecurityOption1 };
var DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartSecurityOption2 };
var DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartSecurity, _super);
    function DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartSecurityOption1)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartSecurityOption2)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartSecurity };
var DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartRequest, _super);
    function DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartPathParams)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartQueryParams)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartSecurity)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartRequest };
var DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartResponse, _super);
    function DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowCxV3Experiment)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartResponse.prototype, "googleCloudDialogflowCxV3Experiment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartResponse };
