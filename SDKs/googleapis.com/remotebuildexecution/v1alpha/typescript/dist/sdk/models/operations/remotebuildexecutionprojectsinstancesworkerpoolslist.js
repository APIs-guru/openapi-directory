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
var RemotebuildexecutionProjectsInstancesWorkerpoolsListPathParams = /** @class */ (function (_super) {
    __extends(RemotebuildexecutionProjectsInstancesWorkerpoolsListPathParams, _super);
    function RemotebuildexecutionProjectsInstancesWorkerpoolsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsListPathParams.prototype, "parent", void 0);
    return RemotebuildexecutionProjectsInstancesWorkerpoolsListPathParams;
}(SpeakeasyBase));
export { RemotebuildexecutionProjectsInstancesWorkerpoolsListPathParams };
var RemotebuildexecutionProjectsInstancesWorkerpoolsListQueryParams = /** @class */ (function (_super) {
    __extends(RemotebuildexecutionProjectsInstancesWorkerpoolsListQueryParams, _super);
    function RemotebuildexecutionProjectsInstancesWorkerpoolsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsListQueryParams.prototype, "uploadProtocol", void 0);
    return RemotebuildexecutionProjectsInstancesWorkerpoolsListQueryParams;
}(SpeakeasyBase));
export { RemotebuildexecutionProjectsInstancesWorkerpoolsListQueryParams };
var RemotebuildexecutionProjectsInstancesWorkerpoolsListSecurity = /** @class */ (function (_super) {
    __extends(RemotebuildexecutionProjectsInstancesWorkerpoolsListSecurity, _super);
    function RemotebuildexecutionProjectsInstancesWorkerpoolsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsListSecurity.prototype, "oauth2c", void 0);
    return RemotebuildexecutionProjectsInstancesWorkerpoolsListSecurity;
}(SpeakeasyBase));
export { RemotebuildexecutionProjectsInstancesWorkerpoolsListSecurity };
var RemotebuildexecutionProjectsInstancesWorkerpoolsListRequest = /** @class */ (function (_super) {
    __extends(RemotebuildexecutionProjectsInstancesWorkerpoolsListRequest, _super);
    function RemotebuildexecutionProjectsInstancesWorkerpoolsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemotebuildexecutionProjectsInstancesWorkerpoolsListPathParams)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemotebuildexecutionProjectsInstancesWorkerpoolsListQueryParams)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemotebuildexecutionProjectsInstancesWorkerpoolsListSecurity)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsListRequest.prototype, "security", void 0);
    return RemotebuildexecutionProjectsInstancesWorkerpoolsListRequest;
}(SpeakeasyBase));
export { RemotebuildexecutionProjectsInstancesWorkerpoolsListRequest };
var RemotebuildexecutionProjectsInstancesWorkerpoolsListResponse = /** @class */ (function (_super) {
    __extends(RemotebuildexecutionProjectsInstancesWorkerpoolsListResponse, _super);
    function RemotebuildexecutionProjectsInstancesWorkerpoolsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsResponse)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsListResponse.prototype, "googleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsListResponse.prototype, "statusCode", void 0);
    return RemotebuildexecutionProjectsInstancesWorkerpoolsListResponse;
}(SpeakeasyBase));
export { RemotebuildexecutionProjectsInstancesWorkerpoolsListResponse };
