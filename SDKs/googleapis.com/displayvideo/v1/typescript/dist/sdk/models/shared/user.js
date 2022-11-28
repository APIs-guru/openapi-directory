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
import { AssignedUserRoleInput } from "./assigneduserrole";
import { AssignedUserRole } from "./assigneduserrole";
// UserInput
/**
 * A single user in Display & Video 360.
**/
var UserInput = /** @class */ (function (_super) {
    __extends(UserInput, _super);
    function UserInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assignedUserRoles", elemType: AssignedUserRoleInput }),
        __metadata("design:type", Array)
    ], UserInput.prototype, "assignedUserRoles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], UserInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], UserInput.prototype, "email", void 0);
    return UserInput;
}(SpeakeasyBase));
export { UserInput };
// User
/**
 * A single user in Display & Video 360.
**/
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assignedUserRoles", elemType: AssignedUserRole }),
        __metadata("design:type", Array)
    ], User.prototype, "assignedUserRoles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], User.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], User.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userId" }),
        __metadata("design:type", String)
    ], User.prototype, "userId", void 0);
    return User;
}(SpeakeasyBase));
export { User };
