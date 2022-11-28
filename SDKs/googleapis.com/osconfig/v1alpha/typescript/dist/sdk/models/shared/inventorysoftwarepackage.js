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
import { InventoryVersionedPackage } from "./inventoryversionedpackage";
import { InventoryWindowsQuickFixEngineeringPackage } from "./inventorywindowsquickfixengineeringpackage";
import { InventoryWindowsApplication } from "./inventorywindowsapplication";
import { InventoryWindowsUpdatePackage } from "./inventorywindowsupdatepackage";
import { InventoryZypperPatch } from "./inventoryzypperpatch";
// InventorySoftwarePackage
/**
 * Software package information of the operating system.
**/
var InventorySoftwarePackage = /** @class */ (function (_super) {
    __extends(InventorySoftwarePackage, _super);
    function InventorySoftwarePackage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aptPackage" }),
        __metadata("design:type", InventoryVersionedPackage)
    ], InventorySoftwarePackage.prototype, "aptPackage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cosPackage" }),
        __metadata("design:type", InventoryVersionedPackage)
    ], InventorySoftwarePackage.prototype, "cosPackage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=googetPackage" }),
        __metadata("design:type", InventoryVersionedPackage)
    ], InventorySoftwarePackage.prototype, "googetPackage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=qfePackage" }),
        __metadata("design:type", InventoryWindowsQuickFixEngineeringPackage)
    ], InventorySoftwarePackage.prototype, "qfePackage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=windowsApplication" }),
        __metadata("design:type", InventoryWindowsApplication)
    ], InventorySoftwarePackage.prototype, "windowsApplication", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wuaPackage" }),
        __metadata("design:type", InventoryWindowsUpdatePackage)
    ], InventorySoftwarePackage.prototype, "wuaPackage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=yumPackage" }),
        __metadata("design:type", InventoryVersionedPackage)
    ], InventorySoftwarePackage.prototype, "yumPackage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zypperPackage" }),
        __metadata("design:type", InventoryVersionedPackage)
    ], InventorySoftwarePackage.prototype, "zypperPackage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zypperPatch" }),
        __metadata("design:type", InventoryZypperPatch)
    ], InventorySoftwarePackage.prototype, "zypperPatch", void 0);
    return InventorySoftwarePackage;
}(SpeakeasyBase));
export { InventorySoftwarePackage };
