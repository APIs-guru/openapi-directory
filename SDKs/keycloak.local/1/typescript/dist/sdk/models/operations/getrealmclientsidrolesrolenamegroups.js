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
var GetRealmClientsIdRolesRoleNameGroupsPathParams = /** @class */ (function (_super) {
    __extends(GetRealmClientsIdRolesRoleNameGroupsPathParams, _super);
    function GetRealmClientsIdRolesRoleNameGroupsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetRealmClientsIdRolesRoleNameGroupsPathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" }),
        __metadata("design:type", String)
    ], GetRealmClientsIdRolesRoleNameGroupsPathParams.prototype, "realm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=role-name" }),
        __metadata("design:type", String)
    ], GetRealmClientsIdRolesRoleNameGroupsPathParams.prototype, "roleName", void 0);
    return GetRealmClientsIdRolesRoleNameGroupsPathParams;
}(SpeakeasyBase));
export { GetRealmClientsIdRolesRoleNameGroupsPathParams };
var GetRealmClientsIdRolesRoleNameGroupsQueryParams = /** @class */ (function (_super) {
    __extends(GetRealmClientsIdRolesRoleNameGroupsQueryParams, _super);
    function GetRealmClientsIdRolesRoleNameGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=briefRepresentation" }),
        __metadata("design:type", Boolean)
    ], GetRealmClientsIdRolesRoleNameGroupsQueryParams.prototype, "briefRepresentation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first" }),
        __metadata("design:type", Number)
    ], GetRealmClientsIdRolesRoleNameGroupsQueryParams.prototype, "first", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", Number)
    ], GetRealmClientsIdRolesRoleNameGroupsQueryParams.prototype, "max", void 0);
    return GetRealmClientsIdRolesRoleNameGroupsQueryParams;
}(SpeakeasyBase));
export { GetRealmClientsIdRolesRoleNameGroupsQueryParams };
var GetRealmClientsIdRolesRoleNameGroupsRequest = /** @class */ (function (_super) {
    __extends(GetRealmClientsIdRolesRoleNameGroupsRequest, _super);
    function GetRealmClientsIdRolesRoleNameGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRealmClientsIdRolesRoleNameGroupsPathParams)
    ], GetRealmClientsIdRolesRoleNameGroupsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRealmClientsIdRolesRoleNameGroupsQueryParams)
    ], GetRealmClientsIdRolesRoleNameGroupsRequest.prototype, "queryParams", void 0);
    return GetRealmClientsIdRolesRoleNameGroupsRequest;
}(SpeakeasyBase));
export { GetRealmClientsIdRolesRoleNameGroupsRequest };
var GetRealmClientsIdRolesRoleNameGroupsResponse = /** @class */ (function (_super) {
    __extends(GetRealmClientsIdRolesRoleNameGroupsResponse, _super);
    function GetRealmClientsIdRolesRoleNameGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRealmClientsIdRolesRoleNameGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.GroupRepresentation }),
        __metadata("design:type", Array)
    ], GetRealmClientsIdRolesRoleNameGroupsResponse.prototype, "groupRepresentations", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRealmClientsIdRolesRoleNameGroupsResponse.prototype, "statusCode", void 0);
    return GetRealmClientsIdRolesRoleNameGroupsResponse;
}(SpeakeasyBase));
export { GetRealmClientsIdRolesRoleNameGroupsResponse };
