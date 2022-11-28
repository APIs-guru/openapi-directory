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
var DeleteRealmRolesRoleNamePathParams = /** @class */ (function (_super) {
    __extends(DeleteRealmRolesRoleNamePathParams, _super);
    function DeleteRealmRolesRoleNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" }),
        __metadata("design:type", String)
    ], DeleteRealmRolesRoleNamePathParams.prototype, "realm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=role-name" }),
        __metadata("design:type", String)
    ], DeleteRealmRolesRoleNamePathParams.prototype, "roleName", void 0);
    return DeleteRealmRolesRoleNamePathParams;
}(SpeakeasyBase));
export { DeleteRealmRolesRoleNamePathParams };
var DeleteRealmRolesRoleNameRequest = /** @class */ (function (_super) {
    __extends(DeleteRealmRolesRoleNameRequest, _super);
    function DeleteRealmRolesRoleNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteRealmRolesRoleNamePathParams)
    ], DeleteRealmRolesRoleNameRequest.prototype, "pathParams", void 0);
    return DeleteRealmRolesRoleNameRequest;
}(SpeakeasyBase));
export { DeleteRealmRolesRoleNameRequest };
var DeleteRealmRolesRoleNameResponse = /** @class */ (function (_super) {
    __extends(DeleteRealmRolesRoleNameResponse, _super);
    function DeleteRealmRolesRoleNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteRealmRolesRoleNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteRealmRolesRoleNameResponse.prototype, "statusCode", void 0);
    return DeleteRealmRolesRoleNameResponse;
}(SpeakeasyBase));
export { DeleteRealmRolesRoleNameResponse };
