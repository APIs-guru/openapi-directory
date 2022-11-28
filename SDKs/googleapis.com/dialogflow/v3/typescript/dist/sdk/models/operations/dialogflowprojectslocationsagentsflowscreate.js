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
var DialogflowProjectsLocationsAgentsFlowsCreatePathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsCreatePathParams, _super);
    function DialogflowProjectsLocationsAgentsFlowsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsCreatePathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsAgentsFlowsCreatePathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsCreatePathParams };
var DialogflowProjectsLocationsAgentsFlowsCreateQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsCreateQueryParams, _super);
    function DialogflowProjectsLocationsAgentsFlowsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=languageCode" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsCreateQueryParams.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentsFlowsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentsFlowsCreateQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsCreateQueryParams };
var DialogflowProjectsLocationsAgentsFlowsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsCreateSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentsFlowsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsFlowsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsFlowsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsFlowsCreateSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsCreateSecurityOption1 };
var DialogflowProjectsLocationsAgentsFlowsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsCreateSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentsFlowsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsFlowsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsFlowsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsFlowsCreateSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsCreateSecurityOption2 };
var DialogflowProjectsLocationsAgentsFlowsCreateSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsCreateSecurity, _super);
    function DialogflowProjectsLocationsAgentsFlowsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsFlowsCreateSecurityOption1)
    ], DialogflowProjectsLocationsAgentsFlowsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsFlowsCreateSecurityOption2)
    ], DialogflowProjectsLocationsAgentsFlowsCreateSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentsFlowsCreateSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsCreateSecurity };
var DialogflowProjectsLocationsAgentsFlowsCreateRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsCreateRequest, _super);
    function DialogflowProjectsLocationsAgentsFlowsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsFlowsCreatePathParams)
    ], DialogflowProjectsLocationsAgentsFlowsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsFlowsCreateQueryParams)
    ], DialogflowProjectsLocationsAgentsFlowsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowCxV3FlowInput)
    ], DialogflowProjectsLocationsAgentsFlowsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsFlowsCreateSecurity)
    ], DialogflowProjectsLocationsAgentsFlowsCreateRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentsFlowsCreateRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsCreateRequest };
var DialogflowProjectsLocationsAgentsFlowsCreateResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsCreateResponse, _super);
    function DialogflowProjectsLocationsAgentsFlowsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowCxV3Flow)
    ], DialogflowProjectsLocationsAgentsFlowsCreateResponse.prototype, "googleCloudDialogflowCxV3Flow", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentsFlowsCreateResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentsFlowsCreateResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsCreateResponse };
