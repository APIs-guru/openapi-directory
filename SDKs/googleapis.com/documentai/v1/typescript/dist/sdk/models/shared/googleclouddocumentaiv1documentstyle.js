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
import { GoogleTypeColor } from "./googletypecolor";
import { GoogleCloudDocumentaiV1DocumentStyleFontSize } from "./googleclouddocumentaiv1documentstylefontsize";
import { GoogleCloudDocumentaiV1DocumentTextAnchor } from "./googleclouddocumentaiv1documenttextanchor";
// GoogleCloudDocumentaiV1DocumentStyle
/**
 * Annotation for common text style attributes. This adheres to CSS conventions as much as possible.
**/
var GoogleCloudDocumentaiV1DocumentStyle = /** @class */ (function (_super) {
    __extends(GoogleCloudDocumentaiV1DocumentStyle, _super);
    function GoogleCloudDocumentaiV1DocumentStyle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backgroundColor" }),
        __metadata("design:type", GoogleTypeColor)
    ], GoogleCloudDocumentaiV1DocumentStyle.prototype, "backgroundColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", GoogleTypeColor)
    ], GoogleCloudDocumentaiV1DocumentStyle.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fontFamily" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1DocumentStyle.prototype, "fontFamily", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fontSize" }),
        __metadata("design:type", GoogleCloudDocumentaiV1DocumentStyleFontSize)
    ], GoogleCloudDocumentaiV1DocumentStyle.prototype, "fontSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fontWeight" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1DocumentStyle.prototype, "fontWeight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textAnchor" }),
        __metadata("design:type", GoogleCloudDocumentaiV1DocumentTextAnchor)
    ], GoogleCloudDocumentaiV1DocumentStyle.prototype, "textAnchor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textDecoration" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1DocumentStyle.prototype, "textDecoration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textStyle" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1DocumentStyle.prototype, "textStyle", void 0);
    return GoogleCloudDocumentaiV1DocumentStyle;
}(SpeakeasyBase));
export { GoogleCloudDocumentaiV1DocumentStyle };
