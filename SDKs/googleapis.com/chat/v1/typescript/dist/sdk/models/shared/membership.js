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
import { User } from "./user";
export var MembershipRoleEnum;
(function (MembershipRoleEnum) {
    MembershipRoleEnum["MembershipRoleUnspecified"] = "MEMBERSHIP_ROLE_UNSPECIFIED";
    MembershipRoleEnum["RoleMember"] = "ROLE_MEMBER";
    MembershipRoleEnum["RoleManager"] = "ROLE_MANAGER";
})(MembershipRoleEnum || (MembershipRoleEnum = {}));
export var MembershipStateEnum;
(function (MembershipStateEnum) {
    MembershipStateEnum["MembershipStateUnspecified"] = "MEMBERSHIP_STATE_UNSPECIFIED";
    MembershipStateEnum["Joined"] = "JOINED";
    MembershipStateEnum["Invited"] = "INVITED";
    MembershipStateEnum["NotAMember"] = "NOT_A_MEMBER";
})(MembershipStateEnum || (MembershipStateEnum = {}));
// Membership
/**
 * Represents a membership relation in Google Chat, such as whether a user or Chat app is invited to, part of, or absent from a space.
**/
var Membership = /** @class */ (function (_super) {
    __extends(Membership, _super);
    function Membership() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Membership.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=member" }),
        __metadata("design:type", User)
    ], Membership.prototype, "member", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Membership.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], Membership.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Membership.prototype, "state", void 0);
    return Membership;
}(SpeakeasyBase));
export { Membership };
