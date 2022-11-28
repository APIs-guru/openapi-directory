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
// WindowsQuickFixEngineeringPackage
/**
 * Information related to a Quick Fix Engineering package. Fields are taken from Windows QuickFixEngineering Interface and match the source names: https://docs.microsoft.com/en-us/windows/win32/cimwin32prov/win32-quickfixengineering
**/
var WindowsQuickFixEngineeringPackage = /** @class */ (function (_super) {
    __extends(WindowsQuickFixEngineeringPackage, _super);
    function WindowsQuickFixEngineeringPackage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=caption" }),
        __metadata("design:type", String)
    ], WindowsQuickFixEngineeringPackage.prototype, "caption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], WindowsQuickFixEngineeringPackage.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hotFixId" }),
        __metadata("design:type", String)
    ], WindowsQuickFixEngineeringPackage.prototype, "hotFixId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=installTime" }),
        __metadata("design:type", String)
    ], WindowsQuickFixEngineeringPackage.prototype, "installTime", void 0);
    return WindowsQuickFixEngineeringPackage;
}(SpeakeasyBase));
export { WindowsQuickFixEngineeringPackage };
