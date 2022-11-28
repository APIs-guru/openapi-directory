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
var DfareportingUserRolePermissionGroupsListPathParams = /** @class */ (function (_super) {
    __extends(DfareportingUserRolePermissionGroupsListPathParams, _super);
    function DfareportingUserRolePermissionGroupsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingUserRolePermissionGroupsListPathParams.prototype, "profileId", void 0);
    return DfareportingUserRolePermissionGroupsListPathParams;
}(SpeakeasyBase));
export { DfareportingUserRolePermissionGroupsListPathParams };
var DfareportingUserRolePermissionGroupsListQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingUserRolePermissionGroupsListQueryParams, _super);
    function DfareportingUserRolePermissionGroupsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingUserRolePermissionGroupsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingUserRolePermissionGroupsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingUserRolePermissionGroupsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingUserRolePermissionGroupsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingUserRolePermissionGroupsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingUserRolePermissionGroupsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingUserRolePermissionGroupsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingUserRolePermissionGroupsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingUserRolePermissionGroupsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingUserRolePermissionGroupsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingUserRolePermissionGroupsListQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingUserRolePermissionGroupsListQueryParams;
}(SpeakeasyBase));
export { DfareportingUserRolePermissionGroupsListQueryParams };
var DfareportingUserRolePermissionGroupsListSecurity = /** @class */ (function (_super) {
    __extends(DfareportingUserRolePermissionGroupsListSecurity, _super);
    function DfareportingUserRolePermissionGroupsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingUserRolePermissionGroupsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingUserRolePermissionGroupsListSecurity.prototype, "oauth2c", void 0);
    return DfareportingUserRolePermissionGroupsListSecurity;
}(SpeakeasyBase));
export { DfareportingUserRolePermissionGroupsListSecurity };
var DfareportingUserRolePermissionGroupsListRequest = /** @class */ (function (_super) {
    __extends(DfareportingUserRolePermissionGroupsListRequest, _super);
    function DfareportingUserRolePermissionGroupsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingUserRolePermissionGroupsListPathParams)
    ], DfareportingUserRolePermissionGroupsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingUserRolePermissionGroupsListQueryParams)
    ], DfareportingUserRolePermissionGroupsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingUserRolePermissionGroupsListSecurity)
    ], DfareportingUserRolePermissionGroupsListRequest.prototype, "security", void 0);
    return DfareportingUserRolePermissionGroupsListRequest;
}(SpeakeasyBase));
export { DfareportingUserRolePermissionGroupsListRequest };
var DfareportingUserRolePermissionGroupsListResponse = /** @class */ (function (_super) {
    __extends(DfareportingUserRolePermissionGroupsListResponse, _super);
    function DfareportingUserRolePermissionGroupsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingUserRolePermissionGroupsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingUserRolePermissionGroupsListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UserRolePermissionGroupsListResponse)
    ], DfareportingUserRolePermissionGroupsListResponse.prototype, "userRolePermissionGroupsListResponse", void 0);
    return DfareportingUserRolePermissionGroupsListResponse;
}(SpeakeasyBase));
export { DfareportingUserRolePermissionGroupsListResponse };
