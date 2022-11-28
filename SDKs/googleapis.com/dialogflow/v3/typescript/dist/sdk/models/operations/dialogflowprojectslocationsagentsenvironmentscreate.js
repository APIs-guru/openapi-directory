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
var DialogflowProjectsLocationsAgentsEnvironmentsCreatePathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsEnvironmentsCreatePathParams, _super);
    function DialogflowProjectsLocationsAgentsEnvironmentsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsCreatePathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsAgentsEnvironmentsCreatePathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsEnvironmentsCreatePathParams };
var DialogflowProjectsLocationsAgentsEnvironmentsCreateQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsEnvironmentsCreateQueryParams, _super);
    function DialogflowProjectsLocationsAgentsEnvironmentsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentsEnvironmentsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentsEnvironmentsCreateQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsEnvironmentsCreateQueryParams };
var DialogflowProjectsLocationsAgentsEnvironmentsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsEnvironmentsCreateSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentsEnvironmentsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsEnvironmentsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsEnvironmentsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsEnvironmentsCreateSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsEnvironmentsCreateSecurityOption1 };
var DialogflowProjectsLocationsAgentsEnvironmentsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsEnvironmentsCreateSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentsEnvironmentsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsEnvironmentsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsEnvironmentsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsEnvironmentsCreateSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsEnvironmentsCreateSecurityOption2 };
var DialogflowProjectsLocationsAgentsEnvironmentsCreateSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsEnvironmentsCreateSecurity, _super);
    function DialogflowProjectsLocationsAgentsEnvironmentsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsEnvironmentsCreateSecurityOption1)
    ], DialogflowProjectsLocationsAgentsEnvironmentsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsEnvironmentsCreateSecurityOption2)
    ], DialogflowProjectsLocationsAgentsEnvironmentsCreateSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentsEnvironmentsCreateSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsEnvironmentsCreateSecurity };
var DialogflowProjectsLocationsAgentsEnvironmentsCreateRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsEnvironmentsCreateRequest, _super);
    function DialogflowProjectsLocationsAgentsEnvironmentsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsEnvironmentsCreatePathParams)
    ], DialogflowProjectsLocationsAgentsEnvironmentsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsEnvironmentsCreateQueryParams)
    ], DialogflowProjectsLocationsAgentsEnvironmentsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowCxV3EnvironmentInput)
    ], DialogflowProjectsLocationsAgentsEnvironmentsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsEnvironmentsCreateSecurity)
    ], DialogflowProjectsLocationsAgentsEnvironmentsCreateRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentsEnvironmentsCreateRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsEnvironmentsCreateRequest };
var DialogflowProjectsLocationsAgentsEnvironmentsCreateResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsEnvironmentsCreateResponse, _super);
    function DialogflowProjectsLocationsAgentsEnvironmentsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], DialogflowProjectsLocationsAgentsEnvironmentsCreateResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentsEnvironmentsCreateResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentsEnvironmentsCreateResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsEnvironmentsCreateResponse };
