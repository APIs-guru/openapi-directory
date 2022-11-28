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
var StoragetransferProjectsAgentPoolsPatchPathParams = /** @class */ (function (_super) {
    __extends(StoragetransferProjectsAgentPoolsPatchPathParams, _super);
    function StoragetransferProjectsAgentPoolsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsPatchPathParams.prototype, "name", void 0);
    return StoragetransferProjectsAgentPoolsPatchPathParams;
}(SpeakeasyBase));
export { StoragetransferProjectsAgentPoolsPatchPathParams };
var StoragetransferProjectsAgentPoolsPatchQueryParams = /** @class */ (function (_super) {
    __extends(StoragetransferProjectsAgentPoolsPatchQueryParams, _super);
    function StoragetransferProjectsAgentPoolsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StoragetransferProjectsAgentPoolsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return StoragetransferProjectsAgentPoolsPatchQueryParams;
}(SpeakeasyBase));
export { StoragetransferProjectsAgentPoolsPatchQueryParams };
var StoragetransferProjectsAgentPoolsPatchSecurity = /** @class */ (function (_super) {
    __extends(StoragetransferProjectsAgentPoolsPatchSecurity, _super);
    function StoragetransferProjectsAgentPoolsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StoragetransferProjectsAgentPoolsPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StoragetransferProjectsAgentPoolsPatchSecurity.prototype, "oauth2c", void 0);
    return StoragetransferProjectsAgentPoolsPatchSecurity;
}(SpeakeasyBase));
export { StoragetransferProjectsAgentPoolsPatchSecurity };
var StoragetransferProjectsAgentPoolsPatchRequest = /** @class */ (function (_super) {
    __extends(StoragetransferProjectsAgentPoolsPatchRequest, _super);
    function StoragetransferProjectsAgentPoolsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StoragetransferProjectsAgentPoolsPatchPathParams)
    ], StoragetransferProjectsAgentPoolsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StoragetransferProjectsAgentPoolsPatchQueryParams)
    ], StoragetransferProjectsAgentPoolsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AgentPoolInput)
    ], StoragetransferProjectsAgentPoolsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StoragetransferProjectsAgentPoolsPatchSecurity)
    ], StoragetransferProjectsAgentPoolsPatchRequest.prototype, "security", void 0);
    return StoragetransferProjectsAgentPoolsPatchRequest;
}(SpeakeasyBase));
export { StoragetransferProjectsAgentPoolsPatchRequest };
var StoragetransferProjectsAgentPoolsPatchResponse = /** @class */ (function (_super) {
    __extends(StoragetransferProjectsAgentPoolsPatchResponse, _super);
    function StoragetransferProjectsAgentPoolsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AgentPool)
    ], StoragetransferProjectsAgentPoolsPatchResponse.prototype, "agentPool", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StoragetransferProjectsAgentPoolsPatchResponse.prototype, "statusCode", void 0);
    return StoragetransferProjectsAgentPoolsPatchResponse;
}(SpeakeasyBase));
export { StoragetransferProjectsAgentPoolsPatchResponse };
