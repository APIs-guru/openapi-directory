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
import { ScrollDirectionEnum } from "./scrolldirectionenum";
import { SortOrderEnum } from "./sortorderenum";
// DisplayPreferencesDto
/**
 * Defines the display preferences for any item that supports them (usually Folders).
**/
var DisplayPreferencesDto = /** @class */ (function (_super) {
    __extends(DisplayPreferencesDto, _super);
    function DisplayPreferencesDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Client" }),
        __metadata("design:type", String)
    ], DisplayPreferencesDto.prototype, "client", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomPrefs" }),
        __metadata("design:type", Map)
    ], DisplayPreferencesDto.prototype, "customPrefs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], DisplayPreferencesDto.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IndexBy" }),
        __metadata("design:type", String)
    ], DisplayPreferencesDto.prototype, "indexBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PrimaryImageHeight" }),
        __metadata("design:type", Number)
    ], DisplayPreferencesDto.prototype, "primaryImageHeight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PrimaryImageWidth" }),
        __metadata("design:type", Number)
    ], DisplayPreferencesDto.prototype, "primaryImageWidth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RememberIndexing" }),
        __metadata("design:type", Boolean)
    ], DisplayPreferencesDto.prototype, "rememberIndexing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RememberSorting" }),
        __metadata("design:type", Boolean)
    ], DisplayPreferencesDto.prototype, "rememberSorting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ScrollDirection" }),
        __metadata("design:type", String)
    ], DisplayPreferencesDto.prototype, "scrollDirection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ShowBackdrop" }),
        __metadata("design:type", Boolean)
    ], DisplayPreferencesDto.prototype, "showBackdrop", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ShowSidebar" }),
        __metadata("design:type", Boolean)
    ], DisplayPreferencesDto.prototype, "showSidebar", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SortBy" }),
        __metadata("design:type", String)
    ], DisplayPreferencesDto.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SortOrder" }),
        __metadata("design:type", String)
    ], DisplayPreferencesDto.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ViewType" }),
        __metadata("design:type", String)
    ], DisplayPreferencesDto.prototype, "viewType", void 0);
    return DisplayPreferencesDto;
}(SpeakeasyBase));
export { DisplayPreferencesDto };
