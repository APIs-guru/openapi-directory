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
var RemotebuildexecutionProjectsInstancesCreatePathParams = /** @class */ (function (_super) {
    __extends(RemotebuildexecutionProjectsInstancesCreatePathParams, _super);
    function RemotebuildexecutionProjectsInstancesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesCreatePathParams.prototype, "parent", void 0);
    return RemotebuildexecutionProjectsInstancesCreatePathParams;
}(SpeakeasyBase));
export { RemotebuildexecutionProjectsInstancesCreatePathParams };
var RemotebuildexecutionProjectsInstancesCreateQueryParams = /** @class */ (function (_super) {
    __extends(RemotebuildexecutionProjectsInstancesCreateQueryParams, _super);
    function RemotebuildexecutionProjectsInstancesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RemotebuildexecutionProjectsInstancesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return RemotebuildexecutionProjectsInstancesCreateQueryParams;
}(SpeakeasyBase));
export { RemotebuildexecutionProjectsInstancesCreateQueryParams };
var RemotebuildexecutionProjectsInstancesCreateSecurity = /** @class */ (function (_super) {
    __extends(RemotebuildexecutionProjectsInstancesCreateSecurity, _super);
    function RemotebuildexecutionProjectsInstancesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RemotebuildexecutionProjectsInstancesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RemotebuildexecutionProjectsInstancesCreateSecurity.prototype, "oauth2c", void 0);
    return RemotebuildexecutionProjectsInstancesCreateSecurity;
}(SpeakeasyBase));
export { RemotebuildexecutionProjectsInstancesCreateSecurity };
var RemotebuildexecutionProjectsInstancesCreateRequest = /** @class */ (function (_super) {
    __extends(RemotebuildexecutionProjectsInstancesCreateRequest, _super);
    function RemotebuildexecutionProjectsInstancesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemotebuildexecutionProjectsInstancesCreatePathParams)
    ], RemotebuildexecutionProjectsInstancesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemotebuildexecutionProjectsInstancesCreateQueryParams)
    ], RemotebuildexecutionProjectsInstancesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequest)
    ], RemotebuildexecutionProjectsInstancesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemotebuildexecutionProjectsInstancesCreateSecurity)
    ], RemotebuildexecutionProjectsInstancesCreateRequest.prototype, "security", void 0);
    return RemotebuildexecutionProjectsInstancesCreateRequest;
}(SpeakeasyBase));
export { RemotebuildexecutionProjectsInstancesCreateRequest };
var RemotebuildexecutionProjectsInstancesCreateResponse = /** @class */ (function (_super) {
    __extends(RemotebuildexecutionProjectsInstancesCreateResponse, _super);
    function RemotebuildexecutionProjectsInstancesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsInstancesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], RemotebuildexecutionProjectsInstancesCreateResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RemotebuildexecutionProjectsInstancesCreateResponse.prototype, "statusCode", void 0);
    return RemotebuildexecutionProjectsInstancesCreateResponse;
}(SpeakeasyBase));
export { RemotebuildexecutionProjectsInstancesCreateResponse };
