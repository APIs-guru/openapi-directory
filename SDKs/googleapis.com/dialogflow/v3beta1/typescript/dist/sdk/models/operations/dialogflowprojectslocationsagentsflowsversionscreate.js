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
var DialogflowProjectsLocationsAgentsFlowsVersionsCreatePathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsVersionsCreatePathParams, _super);
    function DialogflowProjectsLocationsAgentsFlowsVersionsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCreatePathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsAgentsFlowsVersionsCreatePathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsVersionsCreatePathParams };
var DialogflowProjectsLocationsAgentsFlowsVersionsCreateQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsVersionsCreateQueryParams, _super);
    function DialogflowProjectsLocationsAgentsFlowsVersionsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentsFlowsVersionsCreateQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsVersionsCreateQueryParams };
var DialogflowProjectsLocationsAgentsFlowsVersionsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsVersionsCreateSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentsFlowsVersionsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsFlowsVersionsCreateSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsVersionsCreateSecurityOption1 };
var DialogflowProjectsLocationsAgentsFlowsVersionsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsVersionsCreateSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentsFlowsVersionsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsFlowsVersionsCreateSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsVersionsCreateSecurityOption2 };
var DialogflowProjectsLocationsAgentsFlowsVersionsCreateSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsVersionsCreateSecurity, _super);
    function DialogflowProjectsLocationsAgentsFlowsVersionsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsFlowsVersionsCreateSecurityOption1)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsFlowsVersionsCreateSecurityOption2)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCreateSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentsFlowsVersionsCreateSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsVersionsCreateSecurity };
var DialogflowProjectsLocationsAgentsFlowsVersionsCreateRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsVersionsCreateRequest, _super);
    function DialogflowProjectsLocationsAgentsFlowsVersionsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsFlowsVersionsCreatePathParams)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsFlowsVersionsCreateQueryParams)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowCxV3beta1VersionInput)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsFlowsVersionsCreateSecurity)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCreateRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentsFlowsVersionsCreateRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsVersionsCreateRequest };
var DialogflowProjectsLocationsAgentsFlowsVersionsCreateResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsVersionsCreateResponse, _super);
    function DialogflowProjectsLocationsAgentsFlowsVersionsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCreateResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCreateResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentsFlowsVersionsCreateResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsVersionsCreateResponse };
