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
import { Group } from "./group";
import { Image } from "./image";
import { Line } from "./line";
import { Shape } from "./shape";
import { SheetsChart } from "./sheetschart";
import { Size } from "./size";
import { Table } from "./table";
import { AffineTransform } from "./affinetransform";
import { Video } from "./video";
import { WordArt } from "./wordart";
// PageElement
/**
 * A visual element rendered on a page.
**/
var PageElement = /** @class */ (function (_super) {
    __extends(PageElement, _super);
    function PageElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PageElement.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=elementGroup" }),
        __metadata("design:type", Group)
    ], PageElement.prototype, "elementGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", Image)
    ], PageElement.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=line" }),
        __metadata("design:type", Line)
    ], PageElement.prototype, "line", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectId" }),
        __metadata("design:type", String)
    ], PageElement.prototype, "objectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shape" }),
        __metadata("design:type", Shape)
    ], PageElement.prototype, "shape", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sheetsChart" }),
        __metadata("design:type", SheetsChart)
    ], PageElement.prototype, "sheetsChart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Size)
    ], PageElement.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=table" }),
        __metadata("design:type", Table)
    ], PageElement.prototype, "table", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], PageElement.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transform" }),
        __metadata("design:type", AffineTransform)
    ], PageElement.prototype, "transform", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=video" }),
        __metadata("design:type", Video)
    ], PageElement.prototype, "video", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wordArt" }),
        __metadata("design:type", WordArt)
    ], PageElement.prototype, "wordArt", void 0);
    return PageElement;
}(SpeakeasyBase));
export { PageElement };
