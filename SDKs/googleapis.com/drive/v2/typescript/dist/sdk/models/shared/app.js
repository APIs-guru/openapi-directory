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
var AppIcons = /** @class */ (function (_super) {
    __extends(AppIcons, _super);
    function AppIcons() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], AppIcons.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iconUrl" }),
        __metadata("design:type", String)
    ], AppIcons.prototype, "iconUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], AppIcons.prototype, "size", void 0);
    return AppIcons;
}(SpeakeasyBase));
export { AppIcons };
// App
/**
 * The apps resource provides a list of the apps that a user has installed, with information about each app's supported MIME types, file extensions, and other details.
**/
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorized" }),
        __metadata("design:type", Boolean)
    ], App.prototype, "authorized", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createInFolderTemplate" }),
        __metadata("design:type", String)
    ], App.prototype, "createInFolderTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createUrl" }),
        __metadata("design:type", String)
    ], App.prototype, "createUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasDriveWideScope" }),
        __metadata("design:type", Boolean)
    ], App.prototype, "hasDriveWideScope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=icons", elemType: AppIcons }),
        __metadata("design:type", Array)
    ], App.prototype, "icons", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], App.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=installed" }),
        __metadata("design:type", Boolean)
    ], App.prototype, "installed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], App.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longDescription" }),
        __metadata("design:type", String)
    ], App.prototype, "longDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], App.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectType" }),
        __metadata("design:type", String)
    ], App.prototype, "objectType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=openUrlTemplate" }),
        __metadata("design:type", String)
    ], App.prototype, "openUrlTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryFileExtensions" }),
        __metadata("design:type", Array)
    ], App.prototype, "primaryFileExtensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryMimeTypes" }),
        __metadata("design:type", Array)
    ], App.prototype, "primaryMimeTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productId" }),
        __metadata("design:type", String)
    ], App.prototype, "productId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productUrl" }),
        __metadata("design:type", String)
    ], App.prototype, "productUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secondaryFileExtensions" }),
        __metadata("design:type", Array)
    ], App.prototype, "secondaryFileExtensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secondaryMimeTypes" }),
        __metadata("design:type", Array)
    ], App.prototype, "secondaryMimeTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shortDescription" }),
        __metadata("design:type", String)
    ], App.prototype, "shortDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportsCreate" }),
        __metadata("design:type", Boolean)
    ], App.prototype, "supportsCreate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportsImport" }),
        __metadata("design:type", Boolean)
    ], App.prototype, "supportsImport", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportsMultiOpen" }),
        __metadata("design:type", Boolean)
    ], App.prototype, "supportsMultiOpen", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportsOfflineCreate" }),
        __metadata("design:type", Boolean)
    ], App.prototype, "supportsOfflineCreate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useByDefault" }),
        __metadata("design:type", Boolean)
    ], App.prototype, "useByDefault", void 0);
    return App;
}(SpeakeasyBase));
export { App };
