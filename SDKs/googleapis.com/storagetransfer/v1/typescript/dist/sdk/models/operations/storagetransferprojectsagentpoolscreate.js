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
var StoragetransferProjectsAgentPoolsCreatePathParams = /** @class */ (function (_super) {
    __extends(StoragetransferProjectsAgentPoolsCreatePathParams, _super);
    function StoragetransferProjectsAgentPoolsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsCreatePathParams.prototype, "projectId", void 0);
    return StoragetransferProjectsAgentPoolsCreatePathParams;
}(SpeakeasyBase));
export { StoragetransferProjectsAgentPoolsCreatePathParams };
var StoragetransferProjectsAgentPoolsCreateQueryParams = /** @class */ (function (_super) {
    __extends(StoragetransferProjectsAgentPoolsCreateQueryParams, _super);
    function StoragetransferProjectsAgentPoolsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=agentPoolId" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsCreateQueryParams.prototype, "agentPoolId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StoragetransferProjectsAgentPoolsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return StoragetransferProjectsAgentPoolsCreateQueryParams;
}(SpeakeasyBase));
export { StoragetransferProjectsAgentPoolsCreateQueryParams };
var StoragetransferProjectsAgentPoolsCreateSecurity = /** @class */ (function (_super) {
    __extends(StoragetransferProjectsAgentPoolsCreateSecurity, _super);
    function StoragetransferProjectsAgentPoolsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StoragetransferProjectsAgentPoolsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StoragetransferProjectsAgentPoolsCreateSecurity.prototype, "oauth2c", void 0);
    return StoragetransferProjectsAgentPoolsCreateSecurity;
}(SpeakeasyBase));
export { StoragetransferProjectsAgentPoolsCreateSecurity };
var StoragetransferProjectsAgentPoolsCreateRequest = /** @class */ (function (_super) {
    __extends(StoragetransferProjectsAgentPoolsCreateRequest, _super);
    function StoragetransferProjectsAgentPoolsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StoragetransferProjectsAgentPoolsCreatePathParams)
    ], StoragetransferProjectsAgentPoolsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StoragetransferProjectsAgentPoolsCreateQueryParams)
    ], StoragetransferProjectsAgentPoolsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AgentPoolInput)
    ], StoragetransferProjectsAgentPoolsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StoragetransferProjectsAgentPoolsCreateSecurity)
    ], StoragetransferProjectsAgentPoolsCreateRequest.prototype, "security", void 0);
    return StoragetransferProjectsAgentPoolsCreateRequest;
}(SpeakeasyBase));
export { StoragetransferProjectsAgentPoolsCreateRequest };
var StoragetransferProjectsAgentPoolsCreateResponse = /** @class */ (function (_super) {
    __extends(StoragetransferProjectsAgentPoolsCreateResponse, _super);
    function StoragetransferProjectsAgentPoolsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AgentPool)
    ], StoragetransferProjectsAgentPoolsCreateResponse.prototype, "agentPool", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StoragetransferProjectsAgentPoolsCreateResponse.prototype, "statusCode", void 0);
    return StoragetransferProjectsAgentPoolsCreateResponse;
}(SpeakeasyBase));
export { StoragetransferProjectsAgentPoolsCreateResponse };
