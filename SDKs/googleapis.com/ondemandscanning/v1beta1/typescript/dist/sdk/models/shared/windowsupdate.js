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
import { Category } from "./category";
import { Identity } from "./identity";
// WindowsUpdate
/**
 * Windows Update represents the metadata about the update for the Windows operating system. The fields in this message come from the Windows Update API documented at https://docs.microsoft.com/en-us/windows/win32/api/wuapi/nn-wuapi-iupdate.
**/
var WindowsUpdate = /** @class */ (function (_super) {
    __extends(WindowsUpdate, _super);
    function WindowsUpdate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categories", elemType: Category }),
        __metadata("design:type", Array)
    ], WindowsUpdate.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], WindowsUpdate.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identity" }),
        __metadata("design:type", Identity)
    ], WindowsUpdate.prototype, "identity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kbArticleIds" }),
        __metadata("design:type", Array)
    ], WindowsUpdate.prototype, "kbArticleIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastPublishedTimestamp" }),
        __metadata("design:type", String)
    ], WindowsUpdate.prototype, "lastPublishedTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportUrl" }),
        __metadata("design:type", String)
    ], WindowsUpdate.prototype, "supportUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], WindowsUpdate.prototype, "title", void 0);
    return WindowsUpdate;
}(SpeakeasyBase));
export { WindowsUpdate };
