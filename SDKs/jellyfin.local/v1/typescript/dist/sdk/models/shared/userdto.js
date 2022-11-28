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
import { UserConfiguration } from "./userconfiguration";
import { UserPolicyInput } from "./userpolicy";
import { UserPolicy } from "./userpolicy";
// UserDtoInput
/**
 * Class UserDto.
**/
var UserDtoInput = /** @class */ (function (_super) {
    __extends(UserDtoInput, _super);
    function UserDtoInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Configuration" }),
        __metadata("design:type", UserConfiguration)
    ], UserDtoInput.prototype, "configuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableAutoLogin" }),
        __metadata("design:type", Boolean)
    ], UserDtoInput.prototype, "enableAutoLogin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HasConfiguredEasyPassword" }),
        __metadata("design:type", Boolean)
    ], UserDtoInput.prototype, "hasConfiguredEasyPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HasConfiguredPassword" }),
        __metadata("design:type", Boolean)
    ], UserDtoInput.prototype, "hasConfiguredPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HasPassword" }),
        __metadata("design:type", Boolean)
    ], UserDtoInput.prototype, "hasPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], UserDtoInput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastActivityDate" }),
        __metadata("design:type", Date)
    ], UserDtoInput.prototype, "lastActivityDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastLoginDate" }),
        __metadata("design:type", Date)
    ], UserDtoInput.prototype, "lastLoginDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], UserDtoInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Policy" }),
        __metadata("design:type", UserPolicyInput)
    ], UserDtoInput.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PrimaryImageAspectRatio" }),
        __metadata("design:type", Number)
    ], UserDtoInput.prototype, "primaryImageAspectRatio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PrimaryImageTag" }),
        __metadata("design:type", String)
    ], UserDtoInput.prototype, "primaryImageTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServerId" }),
        __metadata("design:type", String)
    ], UserDtoInput.prototype, "serverId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServerName" }),
        __metadata("design:type", String)
    ], UserDtoInput.prototype, "serverName", void 0);
    return UserDtoInput;
}(SpeakeasyBase));
export { UserDtoInput };
// UserDto
/**
 * Class UserDto.
**/
var UserDto = /** @class */ (function (_super) {
    __extends(UserDto, _super);
    function UserDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Configuration" }),
        __metadata("design:type", UserConfiguration)
    ], UserDto.prototype, "configuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableAutoLogin" }),
        __metadata("design:type", Boolean)
    ], UserDto.prototype, "enableAutoLogin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HasConfiguredEasyPassword" }),
        __metadata("design:type", Boolean)
    ], UserDto.prototype, "hasConfiguredEasyPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HasConfiguredPassword" }),
        __metadata("design:type", Boolean)
    ], UserDto.prototype, "hasConfiguredPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HasPassword" }),
        __metadata("design:type", Boolean)
    ], UserDto.prototype, "hasPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], UserDto.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastActivityDate" }),
        __metadata("design:type", Date)
    ], UserDto.prototype, "lastActivityDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastLoginDate" }),
        __metadata("design:type", Date)
    ], UserDto.prototype, "lastLoginDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], UserDto.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Policy" }),
        __metadata("design:type", UserPolicy)
    ], UserDto.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PrimaryImageAspectRatio" }),
        __metadata("design:type", Number)
    ], UserDto.prototype, "primaryImageAspectRatio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PrimaryImageTag" }),
        __metadata("design:type", String)
    ], UserDto.prototype, "primaryImageTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServerId" }),
        __metadata("design:type", String)
    ], UserDto.prototype, "serverId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServerName" }),
        __metadata("design:type", String)
    ], UserDto.prototype, "serverName", void 0);
    return UserDto;
}(SpeakeasyBase));
export { UserDto };
