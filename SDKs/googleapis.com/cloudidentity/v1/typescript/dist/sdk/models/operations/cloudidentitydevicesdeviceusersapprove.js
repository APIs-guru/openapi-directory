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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var CloudidentityDevicesDeviceUsersApprovePathParams = /** @class */ (function (_super) {
    __extends(CloudidentityDevicesDeviceUsersApprovePathParams, _super);
    function CloudidentityDevicesDeviceUsersApprovePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudidentityDevicesDeviceUsersApprovePathParams.prototype, "name", void 0);
    return CloudidentityDevicesDeviceUsersApprovePathParams;
}(SpeakeasyBase));
export { CloudidentityDevicesDeviceUsersApprovePathParams };
var CloudidentityDevicesDeviceUsersApproveQueryParams = /** @class */ (function (_super) {
    __extends(CloudidentityDevicesDeviceUsersApproveQueryParams, _super);
    function CloudidentityDevicesDeviceUsersApproveQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudidentityDevicesDeviceUsersApproveQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudidentityDevicesDeviceUsersApproveQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudidentityDevicesDeviceUsersApproveQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudidentityDevicesDeviceUsersApproveQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudidentityDevicesDeviceUsersApproveQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudidentityDevicesDeviceUsersApproveQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudidentityDevicesDeviceUsersApproveQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudidentityDevicesDeviceUsersApproveQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudidentityDevicesDeviceUsersApproveQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudidentityDevicesDeviceUsersApproveQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudidentityDevicesDeviceUsersApproveQueryParams.prototype, "uploadProtocol", void 0);
    return CloudidentityDevicesDeviceUsersApproveQueryParams;
}(SpeakeasyBase));
export { CloudidentityDevicesDeviceUsersApproveQueryParams };
var CloudidentityDevicesDeviceUsersApproveSecurity = /** @class */ (function (_super) {
    __extends(CloudidentityDevicesDeviceUsersApproveSecurity, _super);
    function CloudidentityDevicesDeviceUsersApproveSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityDevicesDeviceUsersApproveSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityDevicesDeviceUsersApproveSecurity.prototype, "oauth2c", void 0);
    return CloudidentityDevicesDeviceUsersApproveSecurity;
}(SpeakeasyBase));
export { CloudidentityDevicesDeviceUsersApproveSecurity };
var CloudidentityDevicesDeviceUsersApproveRequest = /** @class */ (function (_super) {
    __extends(CloudidentityDevicesDeviceUsersApproveRequest, _super);
    function CloudidentityDevicesDeviceUsersApproveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudidentityDevicesDeviceUsersApprovePathParams)
    ], CloudidentityDevicesDeviceUsersApproveRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudidentityDevicesDeviceUsersApproveQueryParams)
    ], CloudidentityDevicesDeviceUsersApproveRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleAppsCloudidentityDevicesV1ApproveDeviceUserRequest)
    ], CloudidentityDevicesDeviceUsersApproveRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudidentityDevicesDeviceUsersApproveSecurity)
    ], CloudidentityDevicesDeviceUsersApproveRequest.prototype, "security", void 0);
    return CloudidentityDevicesDeviceUsersApproveRequest;
}(SpeakeasyBase));
export { CloudidentityDevicesDeviceUsersApproveRequest };
var CloudidentityDevicesDeviceUsersApproveResponse = /** @class */ (function (_super) {
    __extends(CloudidentityDevicesDeviceUsersApproveResponse, _super);
    function CloudidentityDevicesDeviceUsersApproveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudidentityDevicesDeviceUsersApproveResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], CloudidentityDevicesDeviceUsersApproveResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudidentityDevicesDeviceUsersApproveResponse.prototype, "statusCode", void 0);
    return CloudidentityDevicesDeviceUsersApproveResponse;
}(SpeakeasyBase));
export { CloudidentityDevicesDeviceUsersApproveResponse };
