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
var RemotebuildexecutionProjectsInstancesWorkerpoolsCreatePathParams = /** @class */ (function (_super) {
    __extends(RemotebuildexecutionProjectsInstancesWorkerpoolsCreatePathParams, _super);
    function RemotebuildexecutionProjectsInstancesWorkerpoolsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsCreatePathParams.prototype, "parent", void 0);
    return RemotebuildexecutionProjectsInstancesWorkerpoolsCreatePathParams;
}(SpeakeasyBase));
export { RemotebuildexecutionProjectsInstancesWorkerpoolsCreatePathParams };
var RemotebuildexecutionProjectsInstancesWorkerpoolsCreateQueryParams = /** @class */ (function (_super) {
    __extends(RemotebuildexecutionProjectsInstancesWorkerpoolsCreateQueryParams, _super);
    function RemotebuildexecutionProjectsInstancesWorkerpoolsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return RemotebuildexecutionProjectsInstancesWorkerpoolsCreateQueryParams;
}(SpeakeasyBase));
export { RemotebuildexecutionProjectsInstancesWorkerpoolsCreateQueryParams };
var RemotebuildexecutionProjectsInstancesWorkerpoolsCreateSecurity = /** @class */ (function (_super) {
    __extends(RemotebuildexecutionProjectsInstancesWorkerpoolsCreateSecurity, _super);
    function RemotebuildexecutionProjectsInstancesWorkerpoolsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsCreateSecurity.prototype, "oauth2c", void 0);
    return RemotebuildexecutionProjectsInstancesWorkerpoolsCreateSecurity;
}(SpeakeasyBase));
export { RemotebuildexecutionProjectsInstancesWorkerpoolsCreateSecurity };
var RemotebuildexecutionProjectsInstancesWorkerpoolsCreateRequest = /** @class */ (function (_super) {
    __extends(RemotebuildexecutionProjectsInstancesWorkerpoolsCreateRequest, _super);
    function RemotebuildexecutionProjectsInstancesWorkerpoolsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemotebuildexecutionProjectsInstancesWorkerpoolsCreatePathParams)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemotebuildexecutionProjectsInstancesWorkerpoolsCreateQueryParams)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemotebuildexecutionProjectsInstancesWorkerpoolsCreateSecurity)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsCreateRequest.prototype, "security", void 0);
    return RemotebuildexecutionProjectsInstancesWorkerpoolsCreateRequest;
}(SpeakeasyBase));
export { RemotebuildexecutionProjectsInstancesWorkerpoolsCreateRequest };
var RemotebuildexecutionProjectsInstancesWorkerpoolsCreateResponse = /** @class */ (function (_super) {
    __extends(RemotebuildexecutionProjectsInstancesWorkerpoolsCreateResponse, _super);
    function RemotebuildexecutionProjectsInstancesWorkerpoolsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsCreateResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsCreateResponse.prototype, "statusCode", void 0);
    return RemotebuildexecutionProjectsInstancesWorkerpoolsCreateResponse;
}(SpeakeasyBase));
export { RemotebuildexecutionProjectsInstancesWorkerpoolsCreateResponse };
