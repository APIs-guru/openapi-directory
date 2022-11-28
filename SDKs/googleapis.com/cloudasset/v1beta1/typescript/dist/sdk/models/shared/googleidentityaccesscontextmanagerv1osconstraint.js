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
export var GoogleIdentityAccesscontextmanagerV1OsConstraintOsTypeEnum;
(function (GoogleIdentityAccesscontextmanagerV1OsConstraintOsTypeEnum) {
    GoogleIdentityAccesscontextmanagerV1OsConstraintOsTypeEnum["OsUnspecified"] = "OS_UNSPECIFIED";
    GoogleIdentityAccesscontextmanagerV1OsConstraintOsTypeEnum["DesktopMac"] = "DESKTOP_MAC";
    GoogleIdentityAccesscontextmanagerV1OsConstraintOsTypeEnum["DesktopWindows"] = "DESKTOP_WINDOWS";
    GoogleIdentityAccesscontextmanagerV1OsConstraintOsTypeEnum["DesktopLinux"] = "DESKTOP_LINUX";
    GoogleIdentityAccesscontextmanagerV1OsConstraintOsTypeEnum["DesktopChromeOs"] = "DESKTOP_CHROME_OS";
    GoogleIdentityAccesscontextmanagerV1OsConstraintOsTypeEnum["Android"] = "ANDROID";
    GoogleIdentityAccesscontextmanagerV1OsConstraintOsTypeEnum["Ios"] = "IOS";
})(GoogleIdentityAccesscontextmanagerV1OsConstraintOsTypeEnum || (GoogleIdentityAccesscontextmanagerV1OsConstraintOsTypeEnum = {}));
// GoogleIdentityAccesscontextmanagerV1OsConstraint
/**
 * A restriction on the OS type and version of devices making requests.
**/
var GoogleIdentityAccesscontextmanagerV1OsConstraint = /** @class */ (function (_super) {
    __extends(GoogleIdentityAccesscontextmanagerV1OsConstraint, _super);
    function GoogleIdentityAccesscontextmanagerV1OsConstraint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minimumVersion" }),
        __metadata("design:type", String)
    ], GoogleIdentityAccesscontextmanagerV1OsConstraint.prototype, "minimumVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=osType" }),
        __metadata("design:type", String)
    ], GoogleIdentityAccesscontextmanagerV1OsConstraint.prototype, "osType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requireVerifiedChromeOs" }),
        __metadata("design:type", Boolean)
    ], GoogleIdentityAccesscontextmanagerV1OsConstraint.prototype, "requireVerifiedChromeOs", void 0);
    return GoogleIdentityAccesscontextmanagerV1OsConstraint;
}(SpeakeasyBase));
export { GoogleIdentityAccesscontextmanagerV1OsConstraint };
