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
var DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreatePathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreatePathParams, _super);
    function DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreatePathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreatePathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreatePathParams };
var DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateQueryParams, _super);
    function DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateQueryParams };
var DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateSecurityOption1 };
var DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateSecurityOption2 };
var DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateSecurity, _super);
    function DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateSecurityOption1)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateSecurityOption2)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateSecurity };
var DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateRequest, _super);
    function DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreatePathParams)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateQueryParams)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowCxV3Experiment)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateSecurity)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateRequest };
var DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateResponse, _super);
    function DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowCxV3Experiment)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateResponse.prototype, "googleCloudDialogflowCxV3Experiment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateResponse };
