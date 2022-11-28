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
var StoragetransferProjectsAgentPoolsDeletePathParams = /** @class */ (function (_super) {
    __extends(StoragetransferProjectsAgentPoolsDeletePathParams, _super);
    function StoragetransferProjectsAgentPoolsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsDeletePathParams.prototype, "name", void 0);
    return StoragetransferProjectsAgentPoolsDeletePathParams;
}(SpeakeasyBase));
export { StoragetransferProjectsAgentPoolsDeletePathParams };
var StoragetransferProjectsAgentPoolsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(StoragetransferProjectsAgentPoolsDeleteQueryParams, _super);
    function StoragetransferProjectsAgentPoolsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StoragetransferProjectsAgentPoolsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return StoragetransferProjectsAgentPoolsDeleteQueryParams;
}(SpeakeasyBase));
export { StoragetransferProjectsAgentPoolsDeleteQueryParams };
var StoragetransferProjectsAgentPoolsDeleteSecurity = /** @class */ (function (_super) {
    __extends(StoragetransferProjectsAgentPoolsDeleteSecurity, _super);
    function StoragetransferProjectsAgentPoolsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StoragetransferProjectsAgentPoolsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StoragetransferProjectsAgentPoolsDeleteSecurity.prototype, "oauth2c", void 0);
    return StoragetransferProjectsAgentPoolsDeleteSecurity;
}(SpeakeasyBase));
export { StoragetransferProjectsAgentPoolsDeleteSecurity };
var StoragetransferProjectsAgentPoolsDeleteRequest = /** @class */ (function (_super) {
    __extends(StoragetransferProjectsAgentPoolsDeleteRequest, _super);
    function StoragetransferProjectsAgentPoolsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StoragetransferProjectsAgentPoolsDeletePathParams)
    ], StoragetransferProjectsAgentPoolsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StoragetransferProjectsAgentPoolsDeleteQueryParams)
    ], StoragetransferProjectsAgentPoolsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StoragetransferProjectsAgentPoolsDeleteSecurity)
    ], StoragetransferProjectsAgentPoolsDeleteRequest.prototype, "security", void 0);
    return StoragetransferProjectsAgentPoolsDeleteRequest;
}(SpeakeasyBase));
export { StoragetransferProjectsAgentPoolsDeleteRequest };
var StoragetransferProjectsAgentPoolsDeleteResponse = /** @class */ (function (_super) {
    __extends(StoragetransferProjectsAgentPoolsDeleteResponse, _super);
    function StoragetransferProjectsAgentPoolsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], StoragetransferProjectsAgentPoolsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StoragetransferProjectsAgentPoolsDeleteResponse.prototype, "statusCode", void 0);
    return StoragetransferProjectsAgentPoolsDeleteResponse;
}(SpeakeasyBase));
export { StoragetransferProjectsAgentPoolsDeleteResponse };
