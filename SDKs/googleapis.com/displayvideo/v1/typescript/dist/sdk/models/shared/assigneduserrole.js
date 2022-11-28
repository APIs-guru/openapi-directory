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
export var AssignedUserRoleUserRoleEnum;
(function (AssignedUserRoleUserRoleEnum) {
    AssignedUserRoleUserRoleEnum["UserRoleUnspecified"] = "USER_ROLE_UNSPECIFIED";
    AssignedUserRoleUserRoleEnum["Admin"] = "ADMIN";
    AssignedUserRoleUserRoleEnum["AdminPartnerClient"] = "ADMIN_PARTNER_CLIENT";
    AssignedUserRoleUserRoleEnum["Standard"] = "STANDARD";
    AssignedUserRoleUserRoleEnum["StandardPlanner"] = "STANDARD_PLANNER";
    AssignedUserRoleUserRoleEnum["StandardPlannerLimited"] = "STANDARD_PLANNER_LIMITED";
    AssignedUserRoleUserRoleEnum["StandardPartnerClient"] = "STANDARD_PARTNER_CLIENT";
    AssignedUserRoleUserRoleEnum["ReadOnly"] = "READ_ONLY";
    AssignedUserRoleUserRoleEnum["ReportingOnly"] = "REPORTING_ONLY";
    AssignedUserRoleUserRoleEnum["LimitedReportingOnly"] = "LIMITED_REPORTING_ONLY";
    AssignedUserRoleUserRoleEnum["Creative"] = "CREATIVE";
    AssignedUserRoleUserRoleEnum["CreativeAdmin"] = "CREATIVE_ADMIN";
})(AssignedUserRoleUserRoleEnum || (AssignedUserRoleUserRoleEnum = {}));
// AssignedUserRole
/**
 * A single assigned user role, which defines a user's authorized interaction with a specified partner or advertiser.
**/
var AssignedUserRole = /** @class */ (function (_super) {
    __extends(AssignedUserRole, _super);
    function AssignedUserRole() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserId" }),
        __metadata("design:type", String)
    ], AssignedUserRole.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assignedUserRoleId" }),
        __metadata("design:type", String)
    ], AssignedUserRole.prototype, "assignedUserRoleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=partnerId" }),
        __metadata("design:type", String)
    ], AssignedUserRole.prototype, "partnerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userRole" }),
        __metadata("design:type", String)
    ], AssignedUserRole.prototype, "userRole", void 0);
    return AssignedUserRole;
}(SpeakeasyBase));
export { AssignedUserRole };
// AssignedUserRoleInput
/**
 * A single assigned user role, which defines a user's authorized interaction with a specified partner or advertiser.
**/
var AssignedUserRoleInput = /** @class */ (function (_super) {
    __extends(AssignedUserRoleInput, _super);
    function AssignedUserRoleInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserId" }),
        __metadata("design:type", String)
    ], AssignedUserRoleInput.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=partnerId" }),
        __metadata("design:type", String)
    ], AssignedUserRoleInput.prototype, "partnerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userRole" }),
        __metadata("design:type", String)
    ], AssignedUserRoleInput.prototype, "userRole", void 0);
    return AssignedUserRoleInput;
}(SpeakeasyBase));
export { AssignedUserRoleInput };
