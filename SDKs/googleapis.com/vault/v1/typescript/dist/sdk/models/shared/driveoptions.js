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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var DriveOptionsClientSideEncryptedOptionEnum;
(function (DriveOptionsClientSideEncryptedOptionEnum) {
    DriveOptionsClientSideEncryptedOptionEnum["ClientSideEncryptedOptionUnspecified"] = "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED";
    DriveOptionsClientSideEncryptedOptionEnum["ClientSideEncryptedOptionAny"] = "CLIENT_SIDE_ENCRYPTED_OPTION_ANY";
    DriveOptionsClientSideEncryptedOptionEnum["ClientSideEncryptedOptionEncrypted"] = "CLIENT_SIDE_ENCRYPTED_OPTION_ENCRYPTED";
    DriveOptionsClientSideEncryptedOptionEnum["ClientSideEncryptedOptionUnencrypted"] = "CLIENT_SIDE_ENCRYPTED_OPTION_UNENCRYPTED";
})(DriveOptionsClientSideEncryptedOptionEnum || (DriveOptionsClientSideEncryptedOptionEnum = {}));
// DriveOptions
/**
 * Additional options for Drive search
**/
var DriveOptions = /** @class */ (function (_super) {
    __extends(DriveOptions, _super);
    function DriveOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=clientSideEncryptedOption" }),
        __metadata("design:type", String)
    ], DriveOptions.prototype, "clientSideEncryptedOption", void 0);
    __decorate([
        Metadata({ data: "json, name=includeSharedDrives" }),
        __metadata("design:type", Boolean)
    ], DriveOptions.prototype, "includeSharedDrives", void 0);
    __decorate([
        Metadata({ data: "json, name=includeTeamDrives" }),
        __metadata("design:type", Boolean)
    ], DriveOptions.prototype, "includeTeamDrives", void 0);
    __decorate([
        Metadata({ data: "json, name=versionDate" }),
        __metadata("design:type", String)
    ], DriveOptions.prototype, "versionDate", void 0);
    return DriveOptions;
}(SpeakeasyBase));
export { DriveOptions };
