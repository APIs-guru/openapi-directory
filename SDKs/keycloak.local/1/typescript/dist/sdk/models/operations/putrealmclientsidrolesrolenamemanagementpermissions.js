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
var PutRealmClientsIdRolesRoleNameManagementPermissionsPathParams = /** @class */ (function (_super) {
    __extends(PutRealmClientsIdRolesRoleNameManagementPermissionsPathParams, _super);
    function PutRealmClientsIdRolesRoleNameManagementPermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutRealmClientsIdRolesRoleNameManagementPermissionsPathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" }),
        __metadata("design:type", String)
    ], PutRealmClientsIdRolesRoleNameManagementPermissionsPathParams.prototype, "realm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=role-name" }),
        __metadata("design:type", String)
    ], PutRealmClientsIdRolesRoleNameManagementPermissionsPathParams.prototype, "roleName", void 0);
    return PutRealmClientsIdRolesRoleNameManagementPermissionsPathParams;
}(SpeakeasyBase));
export { PutRealmClientsIdRolesRoleNameManagementPermissionsPathParams };
var PutRealmClientsIdRolesRoleNameManagementPermissionsRequest = /** @class */ (function (_super) {
    __extends(PutRealmClientsIdRolesRoleNameManagementPermissionsRequest, _super);
    function PutRealmClientsIdRolesRoleNameManagementPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutRealmClientsIdRolesRoleNameManagementPermissionsPathParams)
    ], PutRealmClientsIdRolesRoleNameManagementPermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ManagementPermissionReference)
    ], PutRealmClientsIdRolesRoleNameManagementPermissionsRequest.prototype, "request", void 0);
    return PutRealmClientsIdRolesRoleNameManagementPermissionsRequest;
}(SpeakeasyBase));
export { PutRealmClientsIdRolesRoleNameManagementPermissionsRequest };
var PutRealmClientsIdRolesRoleNameManagementPermissionsResponse = /** @class */ (function (_super) {
    __extends(PutRealmClientsIdRolesRoleNameManagementPermissionsResponse, _super);
    function PutRealmClientsIdRolesRoleNameManagementPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutRealmClientsIdRolesRoleNameManagementPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ManagementPermissionReference)
    ], PutRealmClientsIdRolesRoleNameManagementPermissionsResponse.prototype, "managementPermissionReference", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutRealmClientsIdRolesRoleNameManagementPermissionsResponse.prototype, "statusCode", void 0);
    return PutRealmClientsIdRolesRoleNameManagementPermissionsResponse;
}(SpeakeasyBase));
export { PutRealmClientsIdRolesRoleNameManagementPermissionsResponse };
