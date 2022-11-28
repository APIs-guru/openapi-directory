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
var RemotebuildexecutionProjectsInstancesWorkerpoolsPatchPathParams = /** @class */ (function (_super) {
    __extends(RemotebuildexecutionProjectsInstancesWorkerpoolsPatchPathParams, _super);
    function RemotebuildexecutionProjectsInstancesWorkerpoolsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsPatchPathParams.prototype, "name", void 0);
    return RemotebuildexecutionProjectsInstancesWorkerpoolsPatchPathParams;
}(SpeakeasyBase));
export { RemotebuildexecutionProjectsInstancesWorkerpoolsPatchPathParams };
var RemotebuildexecutionProjectsInstancesWorkerpoolsPatchQueryParams = /** @class */ (function (_super) {
    __extends(RemotebuildexecutionProjectsInstancesWorkerpoolsPatchQueryParams, _super);
    function RemotebuildexecutionProjectsInstancesWorkerpoolsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=loggingEnabled" }),
        __metadata("design:type", Boolean)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsPatchQueryParams.prototype, "loggingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name1" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsPatchQueryParams.prototype, "name1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return RemotebuildexecutionProjectsInstancesWorkerpoolsPatchQueryParams;
}(SpeakeasyBase));
export { RemotebuildexecutionProjectsInstancesWorkerpoolsPatchQueryParams };
var RemotebuildexecutionProjectsInstancesWorkerpoolsPatchSecurity = /** @class */ (function (_super) {
    __extends(RemotebuildexecutionProjectsInstancesWorkerpoolsPatchSecurity, _super);
    function RemotebuildexecutionProjectsInstancesWorkerpoolsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsPatchSecurity.prototype, "oauth2c", void 0);
    return RemotebuildexecutionProjectsInstancesWorkerpoolsPatchSecurity;
}(SpeakeasyBase));
export { RemotebuildexecutionProjectsInstancesWorkerpoolsPatchSecurity };
var RemotebuildexecutionProjectsInstancesWorkerpoolsPatchRequest = /** @class */ (function (_super) {
    __extends(RemotebuildexecutionProjectsInstancesWorkerpoolsPatchRequest, _super);
    function RemotebuildexecutionProjectsInstancesWorkerpoolsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemotebuildexecutionProjectsInstancesWorkerpoolsPatchPathParams)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemotebuildexecutionProjectsInstancesWorkerpoolsPatchQueryParams)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemotebuildexecutionProjectsInstancesWorkerpoolsPatchSecurity)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsPatchRequest.prototype, "security", void 0);
    return RemotebuildexecutionProjectsInstancesWorkerpoolsPatchRequest;
}(SpeakeasyBase));
export { RemotebuildexecutionProjectsInstancesWorkerpoolsPatchRequest };
var RemotebuildexecutionProjectsInstancesWorkerpoolsPatchResponse = /** @class */ (function (_super) {
    __extends(RemotebuildexecutionProjectsInstancesWorkerpoolsPatchResponse, _super);
    function RemotebuildexecutionProjectsInstancesWorkerpoolsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsPatchResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsPatchResponse.prototype, "statusCode", void 0);
    return RemotebuildexecutionProjectsInstancesWorkerpoolsPatchResponse;
}(SpeakeasyBase));
export { RemotebuildexecutionProjectsInstancesWorkerpoolsPatchResponse };
