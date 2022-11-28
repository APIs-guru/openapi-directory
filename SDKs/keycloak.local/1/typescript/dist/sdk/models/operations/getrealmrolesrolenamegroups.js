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
var GetRealmRolesRoleNameGroupsPathParams = /** @class */ (function (_super) {
    __extends(GetRealmRolesRoleNameGroupsPathParams, _super);
    function GetRealmRolesRoleNameGroupsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" }),
        __metadata("design:type", String)
    ], GetRealmRolesRoleNameGroupsPathParams.prototype, "realm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=role-name" }),
        __metadata("design:type", String)
    ], GetRealmRolesRoleNameGroupsPathParams.prototype, "roleName", void 0);
    return GetRealmRolesRoleNameGroupsPathParams;
}(SpeakeasyBase));
export { GetRealmRolesRoleNameGroupsPathParams };
var GetRealmRolesRoleNameGroupsQueryParams = /** @class */ (function (_super) {
    __extends(GetRealmRolesRoleNameGroupsQueryParams, _super);
    function GetRealmRolesRoleNameGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=briefRepresentation" }),
        __metadata("design:type", Boolean)
    ], GetRealmRolesRoleNameGroupsQueryParams.prototype, "briefRepresentation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first" }),
        __metadata("design:type", Number)
    ], GetRealmRolesRoleNameGroupsQueryParams.prototype, "first", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", Number)
    ], GetRealmRolesRoleNameGroupsQueryParams.prototype, "max", void 0);
    return GetRealmRolesRoleNameGroupsQueryParams;
}(SpeakeasyBase));
export { GetRealmRolesRoleNameGroupsQueryParams };
var GetRealmRolesRoleNameGroupsRequest = /** @class */ (function (_super) {
    __extends(GetRealmRolesRoleNameGroupsRequest, _super);
    function GetRealmRolesRoleNameGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRealmRolesRoleNameGroupsPathParams)
    ], GetRealmRolesRoleNameGroupsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRealmRolesRoleNameGroupsQueryParams)
    ], GetRealmRolesRoleNameGroupsRequest.prototype, "queryParams", void 0);
    return GetRealmRolesRoleNameGroupsRequest;
}(SpeakeasyBase));
export { GetRealmRolesRoleNameGroupsRequest };
var GetRealmRolesRoleNameGroupsResponse = /** @class */ (function (_super) {
    __extends(GetRealmRolesRoleNameGroupsResponse, _super);
    function GetRealmRolesRoleNameGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRealmRolesRoleNameGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.GroupRepresentation }),
        __metadata("design:type", Array)
    ], GetRealmRolesRoleNameGroupsResponse.prototype, "groupRepresentations", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRealmRolesRoleNameGroupsResponse.prototype, "statusCode", void 0);
    return GetRealmRolesRoleNameGroupsResponse;
}(SpeakeasyBase));
export { GetRealmRolesRoleNameGroupsResponse };
