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
var StoragetransferProjectsAgentPoolsListPathParams = /** @class */ (function (_super) {
    __extends(StoragetransferProjectsAgentPoolsListPathParams, _super);
    function StoragetransferProjectsAgentPoolsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsListPathParams.prototype, "projectId", void 0);
    return StoragetransferProjectsAgentPoolsListPathParams;
}(SpeakeasyBase));
export { StoragetransferProjectsAgentPoolsListPathParams };
var StoragetransferProjectsAgentPoolsListQueryParams = /** @class */ (function (_super) {
    __extends(StoragetransferProjectsAgentPoolsListQueryParams, _super);
    function StoragetransferProjectsAgentPoolsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], StoragetransferProjectsAgentPoolsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StoragetransferProjectsAgentPoolsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsListQueryParams.prototype, "uploadProtocol", void 0);
    return StoragetransferProjectsAgentPoolsListQueryParams;
}(SpeakeasyBase));
export { StoragetransferProjectsAgentPoolsListQueryParams };
var StoragetransferProjectsAgentPoolsListSecurity = /** @class */ (function (_super) {
    __extends(StoragetransferProjectsAgentPoolsListSecurity, _super);
    function StoragetransferProjectsAgentPoolsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StoragetransferProjectsAgentPoolsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StoragetransferProjectsAgentPoolsListSecurity.prototype, "oauth2c", void 0);
    return StoragetransferProjectsAgentPoolsListSecurity;
}(SpeakeasyBase));
export { StoragetransferProjectsAgentPoolsListSecurity };
var StoragetransferProjectsAgentPoolsListRequest = /** @class */ (function (_super) {
    __extends(StoragetransferProjectsAgentPoolsListRequest, _super);
    function StoragetransferProjectsAgentPoolsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StoragetransferProjectsAgentPoolsListPathParams)
    ], StoragetransferProjectsAgentPoolsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StoragetransferProjectsAgentPoolsListQueryParams)
    ], StoragetransferProjectsAgentPoolsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StoragetransferProjectsAgentPoolsListSecurity)
    ], StoragetransferProjectsAgentPoolsListRequest.prototype, "security", void 0);
    return StoragetransferProjectsAgentPoolsListRequest;
}(SpeakeasyBase));
export { StoragetransferProjectsAgentPoolsListRequest };
var StoragetransferProjectsAgentPoolsListResponse = /** @class */ (function (_super) {
    __extends(StoragetransferProjectsAgentPoolsListResponse, _super);
    function StoragetransferProjectsAgentPoolsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StoragetransferProjectsAgentPoolsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListAgentPoolsResponse)
    ], StoragetransferProjectsAgentPoolsListResponse.prototype, "listAgentPoolsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StoragetransferProjectsAgentPoolsListResponse.prototype, "statusCode", void 0);
    return StoragetransferProjectsAgentPoolsListResponse;
}(SpeakeasyBase));
export { StoragetransferProjectsAgentPoolsListResponse };
