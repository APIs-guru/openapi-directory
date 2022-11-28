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
import { MediaUrl } from "./mediaurl";
// BaseItem
/**
 * Class BaseItem.
**/
var BaseItem = /** @class */ (function (_super) {
    __extends(BaseItem, _super);
    function BaseItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Container" }),
        __metadata("design:type", String)
    ], BaseItem.prototype, "container", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DateLastSaved" }),
        __metadata("design:type", Date)
    ], BaseItem.prototype, "dateLastSaved", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExtraIds" }),
        __metadata("design:type", Array)
    ], BaseItem.prototype, "extraIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Height" }),
        __metadata("design:type", Number)
    ], BaseItem.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsHD" }),
        __metadata("design:type", Boolean)
    ], BaseItem.prototype, "isHd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsShortcut" }),
        __metadata("design:type", Boolean)
    ], BaseItem.prototype, "isShortcut", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RemoteTrailers", elemType: MediaUrl }),
        __metadata("design:type", Array)
    ], BaseItem.prototype, "remoteTrailers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ShortcutPath" }),
        __metadata("design:type", String)
    ], BaseItem.prototype, "shortcutPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Size" }),
        __metadata("design:type", Number)
    ], BaseItem.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupportsExternalTransfer" }),
        __metadata("design:type", Boolean)
    ], BaseItem.prototype, "supportsExternalTransfer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Width" }),
        __metadata("design:type", Number)
    ], BaseItem.prototype, "width", void 0);
    return BaseItem;
}(SpeakeasyBase));
export { BaseItem };
