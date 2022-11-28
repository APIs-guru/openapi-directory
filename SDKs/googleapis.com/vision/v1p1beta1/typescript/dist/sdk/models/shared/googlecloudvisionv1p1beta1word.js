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
import { GoogleCloudVisionV1p1beta1BoundingPoly } from "./googlecloudvisionv1p1beta1boundingpoly";
import { GoogleCloudVisionV1p1beta1TextAnnotationTextProperty } from "./googlecloudvisionv1p1beta1textannotationtextproperty";
import { GoogleCloudVisionV1p1beta1Symbol } from "./googlecloudvisionv1p1beta1symbol";
// GoogleCloudVisionV1p1beta1Word
/**
 * A word representation.
**/
var GoogleCloudVisionV1p1beta1Word = /** @class */ (function (_super) {
    __extends(GoogleCloudVisionV1p1beta1Word, _super);
    function GoogleCloudVisionV1p1beta1Word() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=boundingBox" }),
        __metadata("design:type", GoogleCloudVisionV1p1beta1BoundingPoly)
    ], GoogleCloudVisionV1p1beta1Word.prototype, "boundingBox", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=confidence" }),
        __metadata("design:type", Number)
    ], GoogleCloudVisionV1p1beta1Word.prototype, "confidence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=property" }),
        __metadata("design:type", GoogleCloudVisionV1p1beta1TextAnnotationTextProperty)
    ], GoogleCloudVisionV1p1beta1Word.prototype, "property", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=symbols", elemType: GoogleCloudVisionV1p1beta1Symbol }),
        __metadata("design:type", Array)
    ], GoogleCloudVisionV1p1beta1Word.prototype, "symbols", void 0);
    return GoogleCloudVisionV1p1beta1Word;
}(SpeakeasyBase));
export { GoogleCloudVisionV1p1beta1Word };
