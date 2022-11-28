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
import { CropProperties } from "./cropproperties";
// ImageProperties
/**
 * The properties of an image.
**/
var ImageProperties = /** @class */ (function (_super) {
    __extends(ImageProperties, _super);
    function ImageProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=angle" }),
        __metadata("design:type", Number)
    ], ImageProperties.prototype, "angle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=brightness" }),
        __metadata("design:type", Number)
    ], ImageProperties.prototype, "brightness", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentUri" }),
        __metadata("design:type", String)
    ], ImageProperties.prototype, "contentUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contrast" }),
        __metadata("design:type", Number)
    ], ImageProperties.prototype, "contrast", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cropProperties" }),
        __metadata("design:type", CropProperties)
    ], ImageProperties.prototype, "cropProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceUri" }),
        __metadata("design:type", String)
    ], ImageProperties.prototype, "sourceUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transparency" }),
        __metadata("design:type", Number)
    ], ImageProperties.prototype, "transparency", void 0);
    return ImageProperties;
}(SpeakeasyBase));
export { ImageProperties };
