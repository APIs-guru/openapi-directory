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
import { GoogleCloudVisionV1p2beta1BoundingPoly } from "./googlecloudvisionv1p2beta1boundingpoly";
import { GoogleCloudVisionV1p2beta1LocationInfo } from "./googlecloudvisionv1p2beta1locationinfo";
import { GoogleCloudVisionV1p2beta1Property } from "./googlecloudvisionv1p2beta1property";
// GoogleCloudVisionV1p2beta1EntityAnnotation
/**
 * Set of detected entity features.
**/
var GoogleCloudVisionV1p2beta1EntityAnnotation = /** @class */ (function (_super) {
    __extends(GoogleCloudVisionV1p2beta1EntityAnnotation, _super);
    function GoogleCloudVisionV1p2beta1EntityAnnotation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=boundingPoly" }),
        __metadata("design:type", GoogleCloudVisionV1p2beta1BoundingPoly)
    ], GoogleCloudVisionV1p2beta1EntityAnnotation.prototype, "boundingPoly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=confidence" }),
        __metadata("design:type", Number)
    ], GoogleCloudVisionV1p2beta1EntityAnnotation.prototype, "confidence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudVisionV1p2beta1EntityAnnotation.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locale" }),
        __metadata("design:type", String)
    ], GoogleCloudVisionV1p2beta1EntityAnnotation.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locations", elemType: GoogleCloudVisionV1p2beta1LocationInfo }),
        __metadata("design:type", Array)
    ], GoogleCloudVisionV1p2beta1EntityAnnotation.prototype, "locations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mid" }),
        __metadata("design:type", String)
    ], GoogleCloudVisionV1p2beta1EntityAnnotation.prototype, "mid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties", elemType: GoogleCloudVisionV1p2beta1Property }),
        __metadata("design:type", Array)
    ], GoogleCloudVisionV1p2beta1EntityAnnotation.prototype, "properties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=score" }),
        __metadata("design:type", Number)
    ], GoogleCloudVisionV1p2beta1EntityAnnotation.prototype, "score", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topicality" }),
        __metadata("design:type", Number)
    ], GoogleCloudVisionV1p2beta1EntityAnnotation.prototype, "topicality", void 0);
    return GoogleCloudVisionV1p2beta1EntityAnnotation;
}(SpeakeasyBase));
export { GoogleCloudVisionV1p2beta1EntityAnnotation };
