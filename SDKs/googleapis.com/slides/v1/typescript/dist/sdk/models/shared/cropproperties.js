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
// CropProperties
/**
 * The crop properties of an object enclosed in a container. For example, an Image. The crop properties is represented by the offsets of four edges which define a crop rectangle. The offsets are measured in percentage from the corresponding edges of the object's original bounding rectangle towards inside, relative to the object's original dimensions. - If the offset is in the interval (0, 1), the corresponding edge of crop rectangle is positioned inside of the object's original bounding rectangle. - If the offset is negative or greater than 1, the corresponding edge of crop rectangle is positioned outside of the object's original bounding rectangle. - If the left edge of the crop rectangle is on the right side of its right edge, the object will be flipped horizontally. - If the top edge of the crop rectangle is below its bottom edge, the object will be flipped vertically. - If all offsets and rotation angle is 0, the object is not cropped. After cropping, the content in the crop rectangle will be stretched to fit its container.
**/
var CropProperties = /** @class */ (function (_super) {
    __extends(CropProperties, _super);
    function CropProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=angle" }),
        __metadata("design:type", Number)
    ], CropProperties.prototype, "angle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bottomOffset" }),
        __metadata("design:type", Number)
    ], CropProperties.prototype, "bottomOffset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=leftOffset" }),
        __metadata("design:type", Number)
    ], CropProperties.prototype, "leftOffset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rightOffset" }),
        __metadata("design:type", Number)
    ], CropProperties.prototype, "rightOffset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topOffset" }),
        __metadata("design:type", Number)
    ], CropProperties.prototype, "topOffset", void 0);
    return CropProperties;
}(SpeakeasyBase));
export { CropProperties };
