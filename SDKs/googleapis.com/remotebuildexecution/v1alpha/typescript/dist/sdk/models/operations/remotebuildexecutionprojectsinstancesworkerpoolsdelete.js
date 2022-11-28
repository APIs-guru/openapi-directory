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
var RemotebuildexecutionProjectsInstancesWorkerpoolsDeletePathParams = /** @class */ (function (_super) {
    __extends(RemotebuildexecutionProjectsInstancesWorkerpoolsDeletePathParams, _super);
    function RemotebuildexecutionProjectsInstancesWorkerpoolsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsDeletePathParams.prototype, "name", void 0);
    return RemotebuildexecutionProjectsInstancesWorkerpoolsDeletePathParams;
}(SpeakeasyBase));
export { RemotebuildexecutionProjectsInstancesWorkerpoolsDeletePathParams };
var RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteQueryParams, _super);
    function RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteQueryParams;
}(SpeakeasyBase));
export { RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteQueryParams };
var RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteSecurity = /** @class */ (function (_super) {
    __extends(RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteSecurity, _super);
    function RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteSecurity.prototype, "oauth2c", void 0);
    return RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteSecurity;
}(SpeakeasyBase));
export { RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteSecurity };
var RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteRequest = /** @class */ (function (_super) {
    __extends(RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteRequest, _super);
    function RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemotebuildexecutionProjectsInstancesWorkerpoolsDeletePathParams)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteQueryParams)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteSecurity)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteRequest.prototype, "security", void 0);
    return RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteRequest;
}(SpeakeasyBase));
export { RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteRequest };
var RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteResponse = /** @class */ (function (_super) {
    __extends(RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteResponse, _super);
    function RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteResponse.prototype, "statusCode", void 0);
    return RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteResponse;
}(SpeakeasyBase));
export { RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteResponse };
