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
export var PosixAccountOperatingSystemTypeEnum;
(function (PosixAccountOperatingSystemTypeEnum) {
    PosixAccountOperatingSystemTypeEnum["OperatingSystemTypeUnspecified"] = "OPERATING_SYSTEM_TYPE_UNSPECIFIED";
    PosixAccountOperatingSystemTypeEnum["Linux"] = "LINUX";
    PosixAccountOperatingSystemTypeEnum["Windows"] = "WINDOWS";
})(PosixAccountOperatingSystemTypeEnum || (PosixAccountOperatingSystemTypeEnum = {}));
// PosixAccount
/**
 * The POSIX account information associated with a Google account.
**/
var PosixAccount = /** @class */ (function (_super) {
    __extends(PosixAccount, _super);
    function PosixAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], PosixAccount.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gecos" }),
        __metadata("design:type", String)
    ], PosixAccount.prototype, "gecos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], PosixAccount.prototype, "gid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=homeDirectory" }),
        __metadata("design:type", String)
    ], PosixAccount.prototype, "homeDirectory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PosixAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operatingSystemType" }),
        __metadata("design:type", String)
    ], PosixAccount.prototype, "operatingSystemType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary" }),
        __metadata("design:type", Boolean)
    ], PosixAccount.prototype, "primary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shell" }),
        __metadata("design:type", String)
    ], PosixAccount.prototype, "shell", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=systemId" }),
        __metadata("design:type", String)
    ], PosixAccount.prototype, "systemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], PosixAccount.prototype, "uid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], PosixAccount.prototype, "username", void 0);
    return PosixAccount;
}(SpeakeasyBase));
export { PosixAccount };
