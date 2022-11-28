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
var DialogflowProjectsLocationsAgentSessionsContextsCreatePathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSessionsContextsCreatePathParams, _super);
    function DialogflowProjectsLocationsAgentSessionsContextsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsContextsCreatePathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsAgentSessionsContextsCreatePathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSessionsContextsCreatePathParams };
var DialogflowProjectsLocationsAgentSessionsContextsCreateQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSessionsContextsCreateQueryParams, _super);
    function DialogflowProjectsLocationsAgentSessionsContextsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsContextsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsContextsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsContextsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsContextsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsContextsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsContextsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsContextsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentSessionsContextsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsContextsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsContextsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsContextsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentSessionsContextsCreateQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSessionsContextsCreateQueryParams };
var DialogflowProjectsLocationsAgentSessionsContextsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSessionsContextsCreateSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentSessionsContextsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentSessionsContextsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentSessionsContextsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentSessionsContextsCreateSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSessionsContextsCreateSecurityOption1 };
var DialogflowProjectsLocationsAgentSessionsContextsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSessionsContextsCreateSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentSessionsContextsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentSessionsContextsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentSessionsContextsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentSessionsContextsCreateSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSessionsContextsCreateSecurityOption2 };
var DialogflowProjectsLocationsAgentSessionsContextsCreateSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSessionsContextsCreateSecurity, _super);
    function DialogflowProjectsLocationsAgentSessionsContextsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentSessionsContextsCreateSecurityOption1)
    ], DialogflowProjectsLocationsAgentSessionsContextsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentSessionsContextsCreateSecurityOption2)
    ], DialogflowProjectsLocationsAgentSessionsContextsCreateSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentSessionsContextsCreateSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSessionsContextsCreateSecurity };
var DialogflowProjectsLocationsAgentSessionsContextsCreateRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSessionsContextsCreateRequest, _super);
    function DialogflowProjectsLocationsAgentSessionsContextsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentSessionsContextsCreatePathParams)
    ], DialogflowProjectsLocationsAgentSessionsContextsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentSessionsContextsCreateQueryParams)
    ], DialogflowProjectsLocationsAgentSessionsContextsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowV2beta1Context)
    ], DialogflowProjectsLocationsAgentSessionsContextsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentSessionsContextsCreateSecurity)
    ], DialogflowProjectsLocationsAgentSessionsContextsCreateRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentSessionsContextsCreateRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSessionsContextsCreateRequest };
var DialogflowProjectsLocationsAgentSessionsContextsCreateResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSessionsContextsCreateResponse, _super);
    function DialogflowProjectsLocationsAgentSessionsContextsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsContextsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowV2beta1Context)
    ], DialogflowProjectsLocationsAgentSessionsContextsCreateResponse.prototype, "googleCloudDialogflowV2beta1Context", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentSessionsContextsCreateResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentSessionsContextsCreateResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSessionsContextsCreateResponse };
