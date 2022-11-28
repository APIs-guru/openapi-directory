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
import { GoogleCloudDatalabelingV1beta1AnnotationSpec } from "./googleclouddatalabelingv1beta1annotationspec";
import { GoogleCloudDatalabelingV1beta1NormalizedPolyline } from "./googleclouddatalabelingv1beta1normalizedpolyline";
import { GoogleCloudDatalabelingV1beta1Polyline } from "./googleclouddatalabelingv1beta1polyline";
// GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation
/**
 * A polyline for the image annotation.
**/
var GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation = /** @class */ (function (_super) {
    __extends(GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation, _super);
    function GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotationSpec" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1AnnotationSpec)
    ], GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation.prototype, "annotationSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=normalizedPolyline" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1NormalizedPolyline)
    ], GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation.prototype, "normalizedPolyline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=polyline" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1Polyline)
    ], GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation.prototype, "polyline", void 0);
    return GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation;
}(SpeakeasyBase));
export { GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation };
