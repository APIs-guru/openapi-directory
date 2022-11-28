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
import { LibraryOptions } from "./libraryoptions";
// VirtualFolderInfo
/**
 * Used to hold information about a user's list of configured virtual folders.
**/
var VirtualFolderInfo = /** @class */ (function (_super) {
    __extends(VirtualFolderInfo, _super);
    function VirtualFolderInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CollectionType" }),
        __metadata("design:type", String)
    ], VirtualFolderInfo.prototype, "collectionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ItemId" }),
        __metadata("design:type", String)
    ], VirtualFolderInfo.prototype, "itemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LibraryOptions" }),
        __metadata("design:type", LibraryOptions)
    ], VirtualFolderInfo.prototype, "libraryOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Locations" }),
        __metadata("design:type", Array)
    ], VirtualFolderInfo.prototype, "locations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], VirtualFolderInfo.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PrimaryImageItemId" }),
        __metadata("design:type", String)
    ], VirtualFolderInfo.prototype, "primaryImageItemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RefreshProgress" }),
        __metadata("design:type", Number)
    ], VirtualFolderInfo.prototype, "refreshProgress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RefreshStatus" }),
        __metadata("design:type", String)
    ], VirtualFolderInfo.prototype, "refreshStatus", void 0);
    return VirtualFolderInfo;
}(SpeakeasyBase));
export { VirtualFolderInfo };
