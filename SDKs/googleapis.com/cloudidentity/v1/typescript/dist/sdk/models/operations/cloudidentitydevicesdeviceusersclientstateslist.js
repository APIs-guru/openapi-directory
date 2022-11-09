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
var CloudidentityDevicesDeviceUsersClientStatesListPathParams = /** @class */ (function (_super) {
    __extends(CloudidentityDevicesDeviceUsersClientStatesListPathParams, _super);
    function CloudidentityDevicesDeviceUsersClientStatesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudidentityDevicesDeviceUsersClientStatesListPathParams.prototype, "parent", void 0);
    return CloudidentityDevicesDeviceUsersClientStatesListPathParams;
}(SpeakeasyBase));
export { CloudidentityDevicesDeviceUsersClientStatesListPathParams };
var CloudidentityDevicesDeviceUsersClientStatesListQueryParams = /** @class */ (function (_super) {
    __extends(CloudidentityDevicesDeviceUsersClientStatesListQueryParams, _super);
    function CloudidentityDevicesDeviceUsersClientStatesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudidentityDevicesDeviceUsersClientStatesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudidentityDevicesDeviceUsersClientStatesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudidentityDevicesDeviceUsersClientStatesListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudidentityDevicesDeviceUsersClientStatesListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=customer" }),
        __metadata("design:type", String)
    ], CloudidentityDevicesDeviceUsersClientStatesListQueryParams.prototype, "customer", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudidentityDevicesDeviceUsersClientStatesListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], CloudidentityDevicesDeviceUsersClientStatesListQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudidentityDevicesDeviceUsersClientStatesListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudidentityDevicesDeviceUsersClientStatesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], CloudidentityDevicesDeviceUsersClientStatesListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudidentityDevicesDeviceUsersClientStatesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudidentityDevicesDeviceUsersClientStatesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudidentityDevicesDeviceUsersClientStatesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudidentityDevicesDeviceUsersClientStatesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudidentityDevicesDeviceUsersClientStatesListQueryParams.prototype, "uploadProtocol", void 0);
    return CloudidentityDevicesDeviceUsersClientStatesListQueryParams;
}(SpeakeasyBase));
export { CloudidentityDevicesDeviceUsersClientStatesListQueryParams };
var CloudidentityDevicesDeviceUsersClientStatesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudidentityDevicesDeviceUsersClientStatesListSecurityOption1, _super);
    function CloudidentityDevicesDeviceUsersClientStatesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityDevicesDeviceUsersClientStatesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityDevicesDeviceUsersClientStatesListSecurityOption1.prototype, "oauth2c", void 0);
    return CloudidentityDevicesDeviceUsersClientStatesListSecurityOption1;
}(SpeakeasyBase));
export { CloudidentityDevicesDeviceUsersClientStatesListSecurityOption1 };
var CloudidentityDevicesDeviceUsersClientStatesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudidentityDevicesDeviceUsersClientStatesListSecurityOption2, _super);
    function CloudidentityDevicesDeviceUsersClientStatesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityDevicesDeviceUsersClientStatesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityDevicesDeviceUsersClientStatesListSecurityOption2.prototype, "oauth2c", void 0);
    return CloudidentityDevicesDeviceUsersClientStatesListSecurityOption2;
}(SpeakeasyBase));
export { CloudidentityDevicesDeviceUsersClientStatesListSecurityOption2 };
var CloudidentityDevicesDeviceUsersClientStatesListSecurity = /** @class */ (function (_super) {
    __extends(CloudidentityDevicesDeviceUsersClientStatesListSecurity, _super);
    function CloudidentityDevicesDeviceUsersClientStatesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityDevicesDeviceUsersClientStatesListSecurityOption1)
    ], CloudidentityDevicesDeviceUsersClientStatesListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityDevicesDeviceUsersClientStatesListSecurityOption2)
    ], CloudidentityDevicesDeviceUsersClientStatesListSecurity.prototype, "option2", void 0);
    return CloudidentityDevicesDeviceUsersClientStatesListSecurity;
}(SpeakeasyBase));
export { CloudidentityDevicesDeviceUsersClientStatesListSecurity };
var CloudidentityDevicesDeviceUsersClientStatesListRequest = /** @class */ (function (_super) {
    __extends(CloudidentityDevicesDeviceUsersClientStatesListRequest, _super);
    function CloudidentityDevicesDeviceUsersClientStatesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudidentityDevicesDeviceUsersClientStatesListPathParams)
    ], CloudidentityDevicesDeviceUsersClientStatesListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudidentityDevicesDeviceUsersClientStatesListQueryParams)
    ], CloudidentityDevicesDeviceUsersClientStatesListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudidentityDevicesDeviceUsersClientStatesListSecurity)
    ], CloudidentityDevicesDeviceUsersClientStatesListRequest.prototype, "security", void 0);
    return CloudidentityDevicesDeviceUsersClientStatesListRequest;
}(SpeakeasyBase));
export { CloudidentityDevicesDeviceUsersClientStatesListRequest };
var CloudidentityDevicesDeviceUsersClientStatesListResponse = /** @class */ (function (_super) {
    __extends(CloudidentityDevicesDeviceUsersClientStatesListResponse, _super);
    function CloudidentityDevicesDeviceUsersClientStatesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudidentityDevicesDeviceUsersClientStatesListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleAppsCloudidentityDevicesV1ListClientStatesResponse)
    ], CloudidentityDevicesDeviceUsersClientStatesListResponse.prototype, "googleAppsCloudidentityDevicesV1ListClientStatesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudidentityDevicesDeviceUsersClientStatesListResponse.prototype, "statusCode", void 0);
    return CloudidentityDevicesDeviceUsersClientStatesListResponse;
}(SpeakeasyBase));
export { CloudidentityDevicesDeviceUsersClientStatesListResponse };
