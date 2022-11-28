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
var DialogflowProjectsLocationsAgentsWebhooksCreatePathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsWebhooksCreatePathParams, _super);
    function DialogflowProjectsLocationsAgentsWebhooksCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsWebhooksCreatePathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsAgentsWebhooksCreatePathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsWebhooksCreatePathParams };
var DialogflowProjectsLocationsAgentsWebhooksCreateQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsWebhooksCreateQueryParams, _super);
    function DialogflowProjectsLocationsAgentsWebhooksCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsWebhooksCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsWebhooksCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsWebhooksCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsWebhooksCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsWebhooksCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsWebhooksCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsWebhooksCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentsWebhooksCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsWebhooksCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsWebhooksCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsWebhooksCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentsWebhooksCreateQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsWebhooksCreateQueryParams };
var DialogflowProjectsLocationsAgentsWebhooksCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsWebhooksCreateSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentsWebhooksCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsWebhooksCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsWebhooksCreateSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsWebhooksCreateSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsWebhooksCreateSecurityOption1 };
var DialogflowProjectsLocationsAgentsWebhooksCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsWebhooksCreateSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentsWebhooksCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsWebhooksCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsWebhooksCreateSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsWebhooksCreateSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsWebhooksCreateSecurityOption2 };
var DialogflowProjectsLocationsAgentsWebhooksCreateSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsWebhooksCreateSecurity, _super);
    function DialogflowProjectsLocationsAgentsWebhooksCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsWebhooksCreateSecurityOption1)
    ], DialogflowProjectsLocationsAgentsWebhooksCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsWebhooksCreateSecurityOption2)
    ], DialogflowProjectsLocationsAgentsWebhooksCreateSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentsWebhooksCreateSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsWebhooksCreateSecurity };
var DialogflowProjectsLocationsAgentsWebhooksCreateRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsWebhooksCreateRequest, _super);
    function DialogflowProjectsLocationsAgentsWebhooksCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsWebhooksCreatePathParams)
    ], DialogflowProjectsLocationsAgentsWebhooksCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsWebhooksCreateQueryParams)
    ], DialogflowProjectsLocationsAgentsWebhooksCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowCxV3beta1Webhook)
    ], DialogflowProjectsLocationsAgentsWebhooksCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsWebhooksCreateSecurity)
    ], DialogflowProjectsLocationsAgentsWebhooksCreateRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentsWebhooksCreateRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsWebhooksCreateRequest };
var DialogflowProjectsLocationsAgentsWebhooksCreateResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsWebhooksCreateResponse, _super);
    function DialogflowProjectsLocationsAgentsWebhooksCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsWebhooksCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowCxV3beta1Webhook)
    ], DialogflowProjectsLocationsAgentsWebhooksCreateResponse.prototype, "googleCloudDialogflowCxV3beta1Webhook", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentsWebhooksCreateResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentsWebhooksCreateResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsWebhooksCreateResponse };
