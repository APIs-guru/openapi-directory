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
export var AffineTransformUnitEnum;
(function (AffineTransformUnitEnum) {
    AffineTransformUnitEnum["UnitUnspecified"] = "UNIT_UNSPECIFIED";
    AffineTransformUnitEnum["Emu"] = "EMU";
    AffineTransformUnitEnum["Pt"] = "PT";
})(AffineTransformUnitEnum || (AffineTransformUnitEnum = {}));
// AffineTransform
/**
 * AffineTransform uses a 3x3 matrix with an implied last row of [ 0 0 1 ] to transform source coordinates (x,y) into destination coordinates (x', y') according to: x' x = shear_y scale_y translate_y 1 [ 1 ] After transformation, x' = scale_x * x + shear_x * y + translate_x; y' = scale_y * y + shear_y * x + translate_y; This message is therefore composed of these six matrix elements.
**/
var AffineTransform = /** @class */ (function (_super) {
    __extends(AffineTransform, _super);
    function AffineTransform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scaleX" }),
        __metadata("design:type", Number)
    ], AffineTransform.prototype, "scaleX", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scaleY" }),
        __metadata("design:type", Number)
    ], AffineTransform.prototype, "scaleY", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shearX" }),
        __metadata("design:type", Number)
    ], AffineTransform.prototype, "shearX", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shearY" }),
        __metadata("design:type", Number)
    ], AffineTransform.prototype, "shearY", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=translateX" }),
        __metadata("design:type", Number)
    ], AffineTransform.prototype, "translateX", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=translateY" }),
        __metadata("design:type", Number)
    ], AffineTransform.prototype, "translateY", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unit" }),
        __metadata("design:type", String)
    ], AffineTransform.prototype, "unit", void 0);
    return AffineTransform;
}(SpeakeasyBase));
export { AffineTransform };
