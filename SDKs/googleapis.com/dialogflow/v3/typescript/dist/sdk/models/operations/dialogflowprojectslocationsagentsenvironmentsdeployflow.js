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
var DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowPathParams, _super);
    function DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environment" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowPathParams.prototype, "environment", void 0);
    return DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowPathParams };
var DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowQueryParams, _super);
    function DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowQueryParams };
var DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowSecurityOption1 };
var DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowSecurityOption2 };
var DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowSecurity, _super);
    function DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowSecurityOption1)
    ], DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowSecurityOption2)
    ], DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowSecurity };
var DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowRequest, _super);
    function DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowPathParams)
    ], DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowQueryParams)
    ], DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowCxV3DeployFlowRequest)
    ], DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowSecurity)
    ], DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowRequest };
var DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowResponse, _super);
    function DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowResponse };
