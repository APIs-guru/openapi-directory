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
var CloudidentityDevicesDeviceUsersListPathParams = /** @class */ (function (_super) {
    __extends(CloudidentityDevicesDeviceUsersListPathParams, _super);
    function CloudidentityDevicesDeviceUsersListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudidentityDevicesDeviceUsersListPathParams.prototype, "parent", void 0);
    return CloudidentityDevicesDeviceUsersListPathParams;
}(SpeakeasyBase));
export { CloudidentityDevicesDeviceUsersListPathParams };
var CloudidentityDevicesDeviceUsersListQueryParams = /** @class */ (function (_super) {
    __extends(CloudidentityDevicesDeviceUsersListQueryParams, _super);
    function CloudidentityDevicesDeviceUsersListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudidentityDevicesDeviceUsersListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudidentityDevicesDeviceUsersListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudidentityDevicesDeviceUsersListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudidentityDevicesDeviceUsersListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudidentityDevicesDeviceUsersListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], CloudidentityDevicesDeviceUsersListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudidentityDevicesDeviceUsersListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudidentityDevicesDeviceUsersListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], CloudidentityDevicesDeviceUsersListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudidentityDevicesDeviceUsersListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudidentityDevicesDeviceUsersListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudidentityDevicesDeviceUsersListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudidentityDevicesDeviceUsersListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudidentityDevicesDeviceUsersListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudidentityDevicesDeviceUsersListQueryParams.prototype, "uploadProtocol", void 0);
    return CloudidentityDevicesDeviceUsersListQueryParams;
}(SpeakeasyBase));
export { CloudidentityDevicesDeviceUsersListQueryParams };
var CloudidentityDevicesDeviceUsersListSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudidentityDevicesDeviceUsersListSecurityOption1, _super);
    function CloudidentityDevicesDeviceUsersListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityDevicesDeviceUsersListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityDevicesDeviceUsersListSecurityOption1.prototype, "oauth2c", void 0);
    return CloudidentityDevicesDeviceUsersListSecurityOption1;
}(SpeakeasyBase));
export { CloudidentityDevicesDeviceUsersListSecurityOption1 };
var CloudidentityDevicesDeviceUsersListSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudidentityDevicesDeviceUsersListSecurityOption2, _super);
    function CloudidentityDevicesDeviceUsersListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityDevicesDeviceUsersListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityDevicesDeviceUsersListSecurityOption2.prototype, "oauth2c", void 0);
    return CloudidentityDevicesDeviceUsersListSecurityOption2;
}(SpeakeasyBase));
export { CloudidentityDevicesDeviceUsersListSecurityOption2 };
var CloudidentityDevicesDeviceUsersListSecurity = /** @class */ (function (_super) {
    __extends(CloudidentityDevicesDeviceUsersListSecurity, _super);
    function CloudidentityDevicesDeviceUsersListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityDevicesDeviceUsersListSecurityOption1)
    ], CloudidentityDevicesDeviceUsersListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityDevicesDeviceUsersListSecurityOption2)
    ], CloudidentityDevicesDeviceUsersListSecurity.prototype, "option2", void 0);
    return CloudidentityDevicesDeviceUsersListSecurity;
}(SpeakeasyBase));
export { CloudidentityDevicesDeviceUsersListSecurity };
var CloudidentityDevicesDeviceUsersListRequest = /** @class */ (function (_super) {
    __extends(CloudidentityDevicesDeviceUsersListRequest, _super);
    function CloudidentityDevicesDeviceUsersListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudidentityDevicesDeviceUsersListPathParams)
    ], CloudidentityDevicesDeviceUsersListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudidentityDevicesDeviceUsersListQueryParams)
    ], CloudidentityDevicesDeviceUsersListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudidentityDevicesDeviceUsersListSecurity)
    ], CloudidentityDevicesDeviceUsersListRequest.prototype, "security", void 0);
    return CloudidentityDevicesDeviceUsersListRequest;
}(SpeakeasyBase));
export { CloudidentityDevicesDeviceUsersListRequest };
var CloudidentityDevicesDeviceUsersListResponse = /** @class */ (function (_super) {
    __extends(CloudidentityDevicesDeviceUsersListResponse, _super);
    function CloudidentityDevicesDeviceUsersListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudidentityDevicesDeviceUsersListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListDeviceUsersResponse)
    ], CloudidentityDevicesDeviceUsersListResponse.prototype, "listDeviceUsersResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudidentityDevicesDeviceUsersListResponse.prototype, "statusCode", void 0);
    return CloudidentityDevicesDeviceUsersListResponse;
}(SpeakeasyBase));
export { CloudidentityDevicesDeviceUsersListResponse };
