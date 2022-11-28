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
var GetRealmClientsIdRolesRoleNamePathParams = /** @class */ (function (_super) {
    __extends(GetRealmClientsIdRolesRoleNamePathParams, _super);
    function GetRealmClientsIdRolesRoleNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetRealmClientsIdRolesRoleNamePathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" }),
        __metadata("design:type", String)
    ], GetRealmClientsIdRolesRoleNamePathParams.prototype, "realm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=role-name" }),
        __metadata("design:type", String)
    ], GetRealmClientsIdRolesRoleNamePathParams.prototype, "roleName", void 0);
    return GetRealmClientsIdRolesRoleNamePathParams;
}(SpeakeasyBase));
export { GetRealmClientsIdRolesRoleNamePathParams };
var GetRealmClientsIdRolesRoleNameRequest = /** @class */ (function (_super) {
    __extends(GetRealmClientsIdRolesRoleNameRequest, _super);
    function GetRealmClientsIdRolesRoleNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRealmClientsIdRolesRoleNamePathParams)
    ], GetRealmClientsIdRolesRoleNameRequest.prototype, "pathParams", void 0);
    return GetRealmClientsIdRolesRoleNameRequest;
}(SpeakeasyBase));
export { GetRealmClientsIdRolesRoleNameRequest };
var GetRealmClientsIdRolesRoleNameResponse = /** @class */ (function (_super) {
    __extends(GetRealmClientsIdRolesRoleNameResponse, _super);
    function GetRealmClientsIdRolesRoleNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRealmClientsIdRolesRoleNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RoleRepresentation)
    ], GetRealmClientsIdRolesRoleNameResponse.prototype, "roleRepresentation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRealmClientsIdRolesRoleNameResponse.prototype, "statusCode", void 0);
    return GetRealmClientsIdRolesRoleNameResponse;
}(SpeakeasyBase));
export { GetRealmClientsIdRolesRoleNameResponse };
