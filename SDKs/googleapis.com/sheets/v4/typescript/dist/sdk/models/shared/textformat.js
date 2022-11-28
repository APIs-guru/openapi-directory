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
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
import { Link } from "./link";
// TextFormat
/**
 * The format of a run of text in a cell. Absent values indicate that the field isn't specified.
**/
var TextFormat = /** @class */ (function (_super) {
    __extends(TextFormat, _super);
    function TextFormat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bold" }),
        __metadata("design:type", Boolean)
    ], TextFormat.prototype, "bold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fontFamily" }),
        __metadata("design:type", String)
    ], TextFormat.prototype, "fontFamily", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fontSize" }),
        __metadata("design:type", Number)
    ], TextFormat.prototype, "fontSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=foregroundColor" }),
        __metadata("design:type", Color)
    ], TextFormat.prototype, "foregroundColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=foregroundColorStyle" }),
        __metadata("design:type", ColorStyle)
    ], TextFormat.prototype, "foregroundColorStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=italic" }),
        __metadata("design:type", Boolean)
    ], TextFormat.prototype, "italic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", Link)
    ], TextFormat.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=strikethrough" }),
        __metadata("design:type", Boolean)
    ], TextFormat.prototype, "strikethrough", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=underline" }),
        __metadata("design:type", Boolean)
    ], TextFormat.prototype, "underline", void 0);
    return TextFormat;
}(SpeakeasyBase));
export { TextFormat };
