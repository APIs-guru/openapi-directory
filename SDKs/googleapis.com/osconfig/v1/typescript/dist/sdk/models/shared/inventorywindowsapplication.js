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
import { Date } from "./date";
// InventoryWindowsApplication
/**
 * Contains information about a Windows application that is retrieved from the Windows Registry. For more information about these fields, see: https://docs.microsoft.com/en-us/windows/win32/msi/uninstall-registry-key
**/
var InventoryWindowsApplication = /** @class */ (function (_super) {
    __extends(InventoryWindowsApplication, _super);
    function InventoryWindowsApplication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], InventoryWindowsApplication.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayVersion" }),
        __metadata("design:type", String)
    ], InventoryWindowsApplication.prototype, "displayVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=helpLink" }),
        __metadata("design:type", String)
    ], InventoryWindowsApplication.prototype, "helpLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=installDate" }),
        __metadata("design:type", Date)
    ], InventoryWindowsApplication.prototype, "installDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publisher" }),
        __metadata("design:type", String)
    ], InventoryWindowsApplication.prototype, "publisher", void 0);
    return InventoryWindowsApplication;
}(SpeakeasyBase));
export { InventoryWindowsApplication };
