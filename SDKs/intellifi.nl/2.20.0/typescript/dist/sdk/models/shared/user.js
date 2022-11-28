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
var UserInput = /** @class */ (function (_super) {
    __extends(UserInput, _super);
    function UserInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], UserInput.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], UserInput.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_admin" }),
        __metadata("design:type", Boolean)
    ], UserInput.prototype, "isAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_locked" }),
        __metadata("design:type", Boolean)
    ], UserInput.prototype, "isLocked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], UserInput.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], UserInput.prototype, "password", void 0);
    return UserInput;
}(SpeakeasyBase));
export { UserInput };
var UserOutput = /** @class */ (function (_super) {
    __extends(UserOutput, _super);
    function UserOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], UserOutput.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], UserOutput.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UserOutput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_admin" }),
        __metadata("design:type", Boolean)
    ], UserOutput.prototype, "isAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_locked" }),
        __metadata("design:type", Boolean)
    ], UserOutput.prototype, "isLocked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], UserOutput.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time_created" }),
        __metadata("design:type", String)
    ], UserOutput.prototype, "timeCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time_updated" }),
        __metadata("design:type", String)
    ], UserOutput.prototype, "timeUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], UserOutput.prototype, "url", void 0);
    return UserOutput;
}(SpeakeasyBase));
export { UserOutput };
