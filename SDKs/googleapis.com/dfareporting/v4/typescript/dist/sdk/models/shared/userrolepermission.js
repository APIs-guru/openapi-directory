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
export var UserRolePermissionAvailabilityEnum;
(function (UserRolePermissionAvailabilityEnum) {
    UserRolePermissionAvailabilityEnum["NotAvailableByDefault"] = "NOT_AVAILABLE_BY_DEFAULT";
    UserRolePermissionAvailabilityEnum["AccountByDefault"] = "ACCOUNT_BY_DEFAULT";
    UserRolePermissionAvailabilityEnum["SubaccountAndAccountByDefault"] = "SUBACCOUNT_AND_ACCOUNT_BY_DEFAULT";
    UserRolePermissionAvailabilityEnum["AccountAlways"] = "ACCOUNT_ALWAYS";
    UserRolePermissionAvailabilityEnum["SubaccountAndAccountAlways"] = "SUBACCOUNT_AND_ACCOUNT_ALWAYS";
    UserRolePermissionAvailabilityEnum["UserProfileOnly"] = "USER_PROFILE_ONLY";
})(UserRolePermissionAvailabilityEnum || (UserRolePermissionAvailabilityEnum = {}));
// UserRolePermission
/**
 * Contains properties of a user role permission.
**/
var UserRolePermission = /** @class */ (function (_super) {
    __extends(UserRolePermission, _super);
    function UserRolePermission() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availability" }),
        __metadata("design:type", String)
    ], UserRolePermission.prototype, "availability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UserRolePermission.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], UserRolePermission.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UserRolePermission.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissionGroupId" }),
        __metadata("design:type", String)
    ], UserRolePermission.prototype, "permissionGroupId", void 0);
    return UserRolePermission;
}(SpeakeasyBase));
export { UserRolePermission };
