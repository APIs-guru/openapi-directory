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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var DeploymentmanagerDeploymentsStopPathParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsStopPathParams, _super);
    function DeploymentmanagerDeploymentsStopPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=deployment" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsStopPathParams.prototype, "deployment", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsStopPathParams.prototype, "project", void 0);
    return DeploymentmanagerDeploymentsStopPathParams;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsStopPathParams };
var DeploymentmanagerDeploymentsStopQueryParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsStopQueryParams, _super);
    function DeploymentmanagerDeploymentsStopQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsStopQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsStopQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsStopQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsStopQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsStopQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsStopQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsStopQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DeploymentmanagerDeploymentsStopQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsStopQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsStopQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsStopQueryParams.prototype, "uploadProtocol", void 0);
    return DeploymentmanagerDeploymentsStopQueryParams;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsStopQueryParams };
var DeploymentmanagerDeploymentsStopSecurityOption1 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsStopSecurityOption1, _super);
    function DeploymentmanagerDeploymentsStopSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerDeploymentsStopSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerDeploymentsStopSecurityOption1.prototype, "oauth2c", void 0);
    return DeploymentmanagerDeploymentsStopSecurityOption1;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsStopSecurityOption1 };
var DeploymentmanagerDeploymentsStopSecurityOption2 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsStopSecurityOption2, _super);
    function DeploymentmanagerDeploymentsStopSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerDeploymentsStopSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerDeploymentsStopSecurityOption2.prototype, "oauth2c", void 0);
    return DeploymentmanagerDeploymentsStopSecurityOption2;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsStopSecurityOption2 };
var DeploymentmanagerDeploymentsStopSecurity = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsStopSecurity, _super);
    function DeploymentmanagerDeploymentsStopSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerDeploymentsStopSecurityOption1)
    ], DeploymentmanagerDeploymentsStopSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerDeploymentsStopSecurityOption2)
    ], DeploymentmanagerDeploymentsStopSecurity.prototype, "option2", void 0);
    return DeploymentmanagerDeploymentsStopSecurity;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsStopSecurity };
var DeploymentmanagerDeploymentsStopRequest = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsStopRequest, _super);
    function DeploymentmanagerDeploymentsStopRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeploymentmanagerDeploymentsStopPathParams)
    ], DeploymentmanagerDeploymentsStopRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeploymentmanagerDeploymentsStopQueryParams)
    ], DeploymentmanagerDeploymentsStopRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DeploymentsStopRequest)
    ], DeploymentmanagerDeploymentsStopRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeploymentmanagerDeploymentsStopSecurity)
    ], DeploymentmanagerDeploymentsStopRequest.prototype, "security", void 0);
    return DeploymentmanagerDeploymentsStopRequest;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsStopRequest };
var DeploymentmanagerDeploymentsStopResponse = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsStopResponse, _super);
    function DeploymentmanagerDeploymentsStopResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsStopResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], DeploymentmanagerDeploymentsStopResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeploymentmanagerDeploymentsStopResponse.prototype, "statusCode", void 0);
    return DeploymentmanagerDeploymentsStopResponse;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsStopResponse };
