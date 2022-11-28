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
import { Background } from "./background";
import { Dimension } from "./dimension";
import { Size } from "./size";
// DocumentStyle
/**
 * The style of the document.
**/
var DocumentStyle = /** @class */ (function (_super) {
    __extends(DocumentStyle, _super);
    function DocumentStyle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=background" }),
        __metadata("design:type", Background)
    ], DocumentStyle.prototype, "background", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultFooterId" }),
        __metadata("design:type", String)
    ], DocumentStyle.prototype, "defaultFooterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultHeaderId" }),
        __metadata("design:type", String)
    ], DocumentStyle.prototype, "defaultHeaderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=evenPageFooterId" }),
        __metadata("design:type", String)
    ], DocumentStyle.prototype, "evenPageFooterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=evenPageHeaderId" }),
        __metadata("design:type", String)
    ], DocumentStyle.prototype, "evenPageHeaderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstPageFooterId" }),
        __metadata("design:type", String)
    ], DocumentStyle.prototype, "firstPageFooterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstPageHeaderId" }),
        __metadata("design:type", String)
    ], DocumentStyle.prototype, "firstPageHeaderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=marginBottom" }),
        __metadata("design:type", Dimension)
    ], DocumentStyle.prototype, "marginBottom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=marginFooter" }),
        __metadata("design:type", Dimension)
    ], DocumentStyle.prototype, "marginFooter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=marginHeader" }),
        __metadata("design:type", Dimension)
    ], DocumentStyle.prototype, "marginHeader", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=marginLeft" }),
        __metadata("design:type", Dimension)
    ], DocumentStyle.prototype, "marginLeft", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=marginRight" }),
        __metadata("design:type", Dimension)
    ], DocumentStyle.prototype, "marginRight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=marginTop" }),
        __metadata("design:type", Dimension)
    ], DocumentStyle.prototype, "marginTop", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageNumberStart" }),
        __metadata("design:type", Number)
    ], DocumentStyle.prototype, "pageNumberStart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageSize" }),
        __metadata("design:type", Size)
    ], DocumentStyle.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useCustomHeaderFooterMargins" }),
        __metadata("design:type", Boolean)
    ], DocumentStyle.prototype, "useCustomHeaderFooterMargins", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useEvenPageHeaderFooter" }),
        __metadata("design:type", Boolean)
    ], DocumentStyle.prototype, "useEvenPageHeaderFooter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useFirstPageHeaderFooter" }),
        __metadata("design:type", Boolean)
    ], DocumentStyle.prototype, "useFirstPageHeaderFooter", void 0);
    return DocumentStyle;
}(SpeakeasyBase));
export { DocumentStyle };
