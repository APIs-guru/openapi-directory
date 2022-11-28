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
var DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreatePathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreatePathParams, _super);
    function DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreatePathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreatePathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreatePathParams };
var DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateQueryParams, _super);
    function DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=languageCode" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateQueryParams.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateQueryParams };
var DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateSecurityOption1 };
var DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateSecurityOption2 };
var DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateSecurity, _super);
    function DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateSecurityOption1)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateSecurityOption2)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateSecurity };
var DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateRequest, _super);
    function DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreatePathParams)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateQueryParams)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowCxV3TransitionRouteGroupInput)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateSecurity)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateRequest };
var DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateResponse, _super);
    function DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowCxV3TransitionRouteGroup)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateResponse.prototype, "googleCloudDialogflowCxV3TransitionRouteGroup", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateResponse };
