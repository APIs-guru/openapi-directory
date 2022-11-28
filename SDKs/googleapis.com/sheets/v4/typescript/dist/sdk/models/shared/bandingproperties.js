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
// BandingProperties
/**
 * Properties referring a single dimension (either row or column). If both BandedRange.row_properties and BandedRange.column_properties are set, the fill colors are applied to cells according to the following rules: * header_color and footer_color take priority over band colors. * first_band_color takes priority over second_band_color. * row_properties takes priority over column_properties. For example, the first row color takes priority over the first column color, but the first column color takes priority over the second row color. Similarly, the row header takes priority over the column header in the top left cell, but the column header takes priority over the first row color if the row header is not set.
**/
var BandingProperties = /** @class */ (function (_super) {
    __extends(BandingProperties, _super);
    function BandingProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstBandColor" }),
        __metadata("design:type", Color)
    ], BandingProperties.prototype, "firstBandColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstBandColorStyle" }),
        __metadata("design:type", ColorStyle)
    ], BandingProperties.prototype, "firstBandColorStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=footerColor" }),
        __metadata("design:type", Color)
    ], BandingProperties.prototype, "footerColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=footerColorStyle" }),
        __metadata("design:type", ColorStyle)
    ], BandingProperties.prototype, "footerColorStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headerColor" }),
        __metadata("design:type", Color)
    ], BandingProperties.prototype, "headerColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headerColorStyle" }),
        __metadata("design:type", ColorStyle)
    ], BandingProperties.prototype, "headerColorStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secondBandColor" }),
        __metadata("design:type", Color)
    ], BandingProperties.prototype, "secondBandColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secondBandColorStyle" }),
        __metadata("design:type", ColorStyle)
    ], BandingProperties.prototype, "secondBandColorStyle", void 0);
    return BandingProperties;
}(SpeakeasyBase));
export { BandingProperties };
