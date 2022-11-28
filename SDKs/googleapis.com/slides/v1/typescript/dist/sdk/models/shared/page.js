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
import { LayoutProperties } from "./layoutproperties";
import { MasterProperties } from "./masterproperties";
import { NotesProperties } from "./notesproperties";
import { PageElement } from "./pageelement";
import { PageProperties } from "./pageproperties";
import { SlideProperties } from "./slideproperties";
export var PagePageTypeEnum;
(function (PagePageTypeEnum) {
    PagePageTypeEnum["Slide"] = "SLIDE";
    PagePageTypeEnum["Master"] = "MASTER";
    PagePageTypeEnum["Layout"] = "LAYOUT";
    PagePageTypeEnum["Notes"] = "NOTES";
    PagePageTypeEnum["NotesMaster"] = "NOTES_MASTER";
})(PagePageTypeEnum || (PagePageTypeEnum = {}));
// Page
/**
 * A page in a presentation.
**/
var Page = /** @class */ (function (_super) {
    __extends(Page, _super);
    function Page() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=layoutProperties" }),
        __metadata("design:type", LayoutProperties)
    ], Page.prototype, "layoutProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=masterProperties" }),
        __metadata("design:type", MasterProperties)
    ], Page.prototype, "masterProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notesProperties" }),
        __metadata("design:type", NotesProperties)
    ], Page.prototype, "notesProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectId" }),
        __metadata("design:type", String)
    ], Page.prototype, "objectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageElements", elemType: PageElement }),
        __metadata("design:type", Array)
    ], Page.prototype, "pageElements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageProperties" }),
        __metadata("design:type", PageProperties)
    ], Page.prototype, "pageProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageType" }),
        __metadata("design:type", String)
    ], Page.prototype, "pageType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revisionId" }),
        __metadata("design:type", String)
    ], Page.prototype, "revisionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slideProperties" }),
        __metadata("design:type", SlideProperties)
    ], Page.prototype, "slideProperties", void 0);
    return Page;
}(SpeakeasyBase));
export { Page };
