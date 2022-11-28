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
import { WindowsUpdateCategory } from "./windowsupdatecategory";
// WindowsUpdatePackage
/**
 * Details related to a Windows Update package. Field data and names are taken from Windows Update API IUpdate Interface: https://docs.microsoft.com/en-us/windows/win32/api/_wua/ Descriptive fields like title, and description are localized based on the locale of the VM being updated.
**/
var WindowsUpdatePackage = /** @class */ (function (_super) {
    __extends(WindowsUpdatePackage, _super);
    function WindowsUpdatePackage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categories", elemType: WindowsUpdateCategory }),
        __metadata("design:type", Array)
    ], WindowsUpdatePackage.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], WindowsUpdatePackage.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kbArticleIds" }),
        __metadata("design:type", Array)
    ], WindowsUpdatePackage.prototype, "kbArticleIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastDeploymentChangeTime" }),
        __metadata("design:type", String)
    ], WindowsUpdatePackage.prototype, "lastDeploymentChangeTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=moreInfoUrls" }),
        __metadata("design:type", Array)
    ], WindowsUpdatePackage.prototype, "moreInfoUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revisionNumber" }),
        __metadata("design:type", Number)
    ], WindowsUpdatePackage.prototype, "revisionNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportUrl" }),
        __metadata("design:type", String)
    ], WindowsUpdatePackage.prototype, "supportUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], WindowsUpdatePackage.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateId" }),
        __metadata("design:type", String)
    ], WindowsUpdatePackage.prototype, "updateId", void 0);
    return WindowsUpdatePackage;
}(SpeakeasyBase));
export { WindowsUpdatePackage };
