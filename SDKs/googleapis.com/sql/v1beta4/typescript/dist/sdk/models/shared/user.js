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
import { UserPasswordValidationPolicy } from "./userpasswordvalidationpolicy";
import { SqlServerUserDetails } from "./sqlserveruserdetails";
export var UserDualPasswordTypeEnum;
(function (UserDualPasswordTypeEnum) {
    UserDualPasswordTypeEnum["DualPasswordTypeUnspecified"] = "DUAL_PASSWORD_TYPE_UNSPECIFIED";
    UserDualPasswordTypeEnum["NoModifyDualPassword"] = "NO_MODIFY_DUAL_PASSWORD";
    UserDualPasswordTypeEnum["NoDualPassword"] = "NO_DUAL_PASSWORD";
    UserDualPasswordTypeEnum["DualPassword"] = "DUAL_PASSWORD";
})(UserDualPasswordTypeEnum || (UserDualPasswordTypeEnum = {}));
export var UserTypeEnum;
(function (UserTypeEnum) {
    UserTypeEnum["BuiltIn"] = "BUILT_IN";
    UserTypeEnum["CloudIamUser"] = "CLOUD_IAM_USER";
    UserTypeEnum["CloudIamServiceAccount"] = "CLOUD_IAM_SERVICE_ACCOUNT";
})(UserTypeEnum || (UserTypeEnum = {}));
// User
/**
 * A Cloud SQL user resource.
**/
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dualPasswordType" }),
        __metadata("design:type", String)
    ], User.prototype, "dualPasswordType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], User.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=host" }),
        __metadata("design:type", String)
    ], User.prototype, "host", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instance" }),
        __metadata("design:type", String)
    ], User.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], User.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], User.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], User.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passwordPolicy" }),
        __metadata("design:type", UserPasswordValidationPolicy)
    ], User.prototype, "passwordPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=project" }),
        __metadata("design:type", String)
    ], User.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sqlserverUserDetails" }),
        __metadata("design:type", SqlServerUserDetails)
    ], User.prototype, "sqlserverUserDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], User.prototype, "type", void 0);
    return User;
}(SpeakeasyBase));
export { User };
