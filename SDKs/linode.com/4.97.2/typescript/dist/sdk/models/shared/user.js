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
// User
/**
 * A User on your Account. Unrestricted users can log in and access information about your Account, while restricted users may only access entities or perform actions they've been granted access to.
 *
**/
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restricted" }),
        __metadata("design:type", Boolean)
    ], User.prototype, "restricted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssh_keys" }),
        __metadata("design:type", Array)
    ], User.prototype, "sshKeys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tfa_enabled" }),
        __metadata("design:type", Boolean)
    ], User.prototype, "tfaEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], User.prototype, "username", void 0);
    return User;
}(SpeakeasyBase));
export { User };
// UserInput
/**
 * A User on your Account. Unrestricted users can log in and access information about your Account, while restricted users may only access entities or perform actions they've been granted access to.
 *
**/
var UserInput = /** @class */ (function (_super) {
    __extends(UserInput, _super);
    function UserInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restricted" }),
        __metadata("design:type", Boolean)
    ], UserInput.prototype, "restricted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssh_keys" }),
        __metadata("design:type", Array)
    ], UserInput.prototype, "sshKeys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], UserInput.prototype, "username", void 0);
    return UserInput;
}(SpeakeasyBase));
export { UserInput };
