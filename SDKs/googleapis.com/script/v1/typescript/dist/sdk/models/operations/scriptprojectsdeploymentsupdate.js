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
var ScriptProjectsDeploymentsUpdatePathParams = /** @class */ (function (_super) {
    __extends(ScriptProjectsDeploymentsUpdatePathParams, _super);
    function ScriptProjectsDeploymentsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deploymentId" }),
        __metadata("design:type", String)
    ], ScriptProjectsDeploymentsUpdatePathParams.prototype, "deploymentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scriptId" }),
        __metadata("design:type", String)
    ], ScriptProjectsDeploymentsUpdatePathParams.prototype, "scriptId", void 0);
    return ScriptProjectsDeploymentsUpdatePathParams;
}(SpeakeasyBase));
export { ScriptProjectsDeploymentsUpdatePathParams };
var ScriptProjectsDeploymentsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(ScriptProjectsDeploymentsUpdateQueryParams, _super);
    function ScriptProjectsDeploymentsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ScriptProjectsDeploymentsUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ScriptProjectsDeploymentsUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ScriptProjectsDeploymentsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ScriptProjectsDeploymentsUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ScriptProjectsDeploymentsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ScriptProjectsDeploymentsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ScriptProjectsDeploymentsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ScriptProjectsDeploymentsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ScriptProjectsDeploymentsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ScriptProjectsDeploymentsUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ScriptProjectsDeploymentsUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return ScriptProjectsDeploymentsUpdateQueryParams;
}(SpeakeasyBase));
export { ScriptProjectsDeploymentsUpdateQueryParams };
var ScriptProjectsDeploymentsUpdateSecurity = /** @class */ (function (_super) {
    __extends(ScriptProjectsDeploymentsUpdateSecurity, _super);
    function ScriptProjectsDeploymentsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ScriptProjectsDeploymentsUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ScriptProjectsDeploymentsUpdateSecurity.prototype, "oauth2c", void 0);
    return ScriptProjectsDeploymentsUpdateSecurity;
}(SpeakeasyBase));
export { ScriptProjectsDeploymentsUpdateSecurity };
var ScriptProjectsDeploymentsUpdateRequest = /** @class */ (function (_super) {
    __extends(ScriptProjectsDeploymentsUpdateRequest, _super);
    function ScriptProjectsDeploymentsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ScriptProjectsDeploymentsUpdatePathParams)
    ], ScriptProjectsDeploymentsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ScriptProjectsDeploymentsUpdateQueryParams)
    ], ScriptProjectsDeploymentsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateDeploymentRequest)
    ], ScriptProjectsDeploymentsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ScriptProjectsDeploymentsUpdateSecurity)
    ], ScriptProjectsDeploymentsUpdateRequest.prototype, "security", void 0);
    return ScriptProjectsDeploymentsUpdateRequest;
}(SpeakeasyBase));
export { ScriptProjectsDeploymentsUpdateRequest };
var ScriptProjectsDeploymentsUpdateResponse = /** @class */ (function (_super) {
    __extends(ScriptProjectsDeploymentsUpdateResponse, _super);
    function ScriptProjectsDeploymentsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ScriptProjectsDeploymentsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Deployment)
    ], ScriptProjectsDeploymentsUpdateResponse.prototype, "deployment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ScriptProjectsDeploymentsUpdateResponse.prototype, "statusCode", void 0);
    return ScriptProjectsDeploymentsUpdateResponse;
}(SpeakeasyBase));
export { ScriptProjectsDeploymentsUpdateResponse };
