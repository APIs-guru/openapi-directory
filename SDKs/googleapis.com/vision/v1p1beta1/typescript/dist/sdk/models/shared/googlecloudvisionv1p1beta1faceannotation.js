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
import { GoogleCloudVisionV1p1beta1FaceAnnotationLandmark } from "./googlecloudvisionv1p1beta1faceannotationlandmark";
export var GoogleCloudVisionV1p1beta1FaceAnnotationAngerLikelihoodEnum;
(function (GoogleCloudVisionV1p1beta1FaceAnnotationAngerLikelihoodEnum) {
    GoogleCloudVisionV1p1beta1FaceAnnotationAngerLikelihoodEnum["Unknown"] = "UNKNOWN";
    GoogleCloudVisionV1p1beta1FaceAnnotationAngerLikelihoodEnum["VeryUnlikely"] = "VERY_UNLIKELY";
    GoogleCloudVisionV1p1beta1FaceAnnotationAngerLikelihoodEnum["Unlikely"] = "UNLIKELY";
    GoogleCloudVisionV1p1beta1FaceAnnotationAngerLikelihoodEnum["Possible"] = "POSSIBLE";
    GoogleCloudVisionV1p1beta1FaceAnnotationAngerLikelihoodEnum["Likely"] = "LIKELY";
    GoogleCloudVisionV1p1beta1FaceAnnotationAngerLikelihoodEnum["VeryLikely"] = "VERY_LIKELY";
})(GoogleCloudVisionV1p1beta1FaceAnnotationAngerLikelihoodEnum || (GoogleCloudVisionV1p1beta1FaceAnnotationAngerLikelihoodEnum = {}));
export var GoogleCloudVisionV1p1beta1FaceAnnotationBlurredLikelihoodEnum;
(function (GoogleCloudVisionV1p1beta1FaceAnnotationBlurredLikelihoodEnum) {
    GoogleCloudVisionV1p1beta1FaceAnnotationBlurredLikelihoodEnum["Unknown"] = "UNKNOWN";
    GoogleCloudVisionV1p1beta1FaceAnnotationBlurredLikelihoodEnum["VeryUnlikely"] = "VERY_UNLIKELY";
    GoogleCloudVisionV1p1beta1FaceAnnotationBlurredLikelihoodEnum["Unlikely"] = "UNLIKELY";
    GoogleCloudVisionV1p1beta1FaceAnnotationBlurredLikelihoodEnum["Possible"] = "POSSIBLE";
    GoogleCloudVisionV1p1beta1FaceAnnotationBlurredLikelihoodEnum["Likely"] = "LIKELY";
    GoogleCloudVisionV1p1beta1FaceAnnotationBlurredLikelihoodEnum["VeryLikely"] = "VERY_LIKELY";
})(GoogleCloudVisionV1p1beta1FaceAnnotationBlurredLikelihoodEnum || (GoogleCloudVisionV1p1beta1FaceAnnotationBlurredLikelihoodEnum = {}));
export var GoogleCloudVisionV1p1beta1FaceAnnotationHeadwearLikelihoodEnum;
(function (GoogleCloudVisionV1p1beta1FaceAnnotationHeadwearLikelihoodEnum) {
    GoogleCloudVisionV1p1beta1FaceAnnotationHeadwearLikelihoodEnum["Unknown"] = "UNKNOWN";
    GoogleCloudVisionV1p1beta1FaceAnnotationHeadwearLikelihoodEnum["VeryUnlikely"] = "VERY_UNLIKELY";
    GoogleCloudVisionV1p1beta1FaceAnnotationHeadwearLikelihoodEnum["Unlikely"] = "UNLIKELY";
    GoogleCloudVisionV1p1beta1FaceAnnotationHeadwearLikelihoodEnum["Possible"] = "POSSIBLE";
    GoogleCloudVisionV1p1beta1FaceAnnotationHeadwearLikelihoodEnum["Likely"] = "LIKELY";
    GoogleCloudVisionV1p1beta1FaceAnnotationHeadwearLikelihoodEnum["VeryLikely"] = "VERY_LIKELY";
})(GoogleCloudVisionV1p1beta1FaceAnnotationHeadwearLikelihoodEnum || (GoogleCloudVisionV1p1beta1FaceAnnotationHeadwearLikelihoodEnum = {}));
export var GoogleCloudVisionV1p1beta1FaceAnnotationJoyLikelihoodEnum;
(function (GoogleCloudVisionV1p1beta1FaceAnnotationJoyLikelihoodEnum) {
    GoogleCloudVisionV1p1beta1FaceAnnotationJoyLikelihoodEnum["Unknown"] = "UNKNOWN";
    GoogleCloudVisionV1p1beta1FaceAnnotationJoyLikelihoodEnum["VeryUnlikely"] = "VERY_UNLIKELY";
    GoogleCloudVisionV1p1beta1FaceAnnotationJoyLikelihoodEnum["Unlikely"] = "UNLIKELY";
    GoogleCloudVisionV1p1beta1FaceAnnotationJoyLikelihoodEnum["Possible"] = "POSSIBLE";
    GoogleCloudVisionV1p1beta1FaceAnnotationJoyLikelihoodEnum["Likely"] = "LIKELY";
    GoogleCloudVisionV1p1beta1FaceAnnotationJoyLikelihoodEnum["VeryLikely"] = "VERY_LIKELY";
})(GoogleCloudVisionV1p1beta1FaceAnnotationJoyLikelihoodEnum || (GoogleCloudVisionV1p1beta1FaceAnnotationJoyLikelihoodEnum = {}));
export var GoogleCloudVisionV1p1beta1FaceAnnotationSorrowLikelihoodEnum;
(function (GoogleCloudVisionV1p1beta1FaceAnnotationSorrowLikelihoodEnum) {
    GoogleCloudVisionV1p1beta1FaceAnnotationSorrowLikelihoodEnum["Unknown"] = "UNKNOWN";
    GoogleCloudVisionV1p1beta1FaceAnnotationSorrowLikelihoodEnum["VeryUnlikely"] = "VERY_UNLIKELY";
    GoogleCloudVisionV1p1beta1FaceAnnotationSorrowLikelihoodEnum["Unlikely"] = "UNLIKELY";
    GoogleCloudVisionV1p1beta1FaceAnnotationSorrowLikelihoodEnum["Possible"] = "POSSIBLE";
    GoogleCloudVisionV1p1beta1FaceAnnotationSorrowLikelihoodEnum["Likely"] = "LIKELY";
    GoogleCloudVisionV1p1beta1FaceAnnotationSorrowLikelihoodEnum["VeryLikely"] = "VERY_LIKELY";
})(GoogleCloudVisionV1p1beta1FaceAnnotationSorrowLikelihoodEnum || (GoogleCloudVisionV1p1beta1FaceAnnotationSorrowLikelihoodEnum = {}));
export var GoogleCloudVisionV1p1beta1FaceAnnotationSurpriseLikelihoodEnum;
(function (GoogleCloudVisionV1p1beta1FaceAnnotationSurpriseLikelihoodEnum) {
    GoogleCloudVisionV1p1beta1FaceAnnotationSurpriseLikelihoodEnum["Unknown"] = "UNKNOWN";
    GoogleCloudVisionV1p1beta1FaceAnnotationSurpriseLikelihoodEnum["VeryUnlikely"] = "VERY_UNLIKELY";
    GoogleCloudVisionV1p1beta1FaceAnnotationSurpriseLikelihoodEnum["Unlikely"] = "UNLIKELY";
    GoogleCloudVisionV1p1beta1FaceAnnotationSurpriseLikelihoodEnum["Possible"] = "POSSIBLE";
    GoogleCloudVisionV1p1beta1FaceAnnotationSurpriseLikelihoodEnum["Likely"] = "LIKELY";
    GoogleCloudVisionV1p1beta1FaceAnnotationSurpriseLikelihoodEnum["VeryLikely"] = "VERY_LIKELY";
})(GoogleCloudVisionV1p1beta1FaceAnnotationSurpriseLikelihoodEnum || (GoogleCloudVisionV1p1beta1FaceAnnotationSurpriseLikelihoodEnum = {}));
export var GoogleCloudVisionV1p1beta1FaceAnnotationUnderExposedLikelihoodEnum;
(function (GoogleCloudVisionV1p1beta1FaceAnnotationUnderExposedLikelihoodEnum) {
    GoogleCloudVisionV1p1beta1FaceAnnotationUnderExposedLikelihoodEnum["Unknown"] = "UNKNOWN";
    GoogleCloudVisionV1p1beta1FaceAnnotationUnderExposedLikelihoodEnum["VeryUnlikely"] = "VERY_UNLIKELY";
    GoogleCloudVisionV1p1beta1FaceAnnotationUnderExposedLikelihoodEnum["Unlikely"] = "UNLIKELY";
    GoogleCloudVisionV1p1beta1FaceAnnotationUnderExposedLikelihoodEnum["Possible"] = "POSSIBLE";
    GoogleCloudVisionV1p1beta1FaceAnnotationUnderExposedLikelihoodEnum["Likely"] = "LIKELY";
    GoogleCloudVisionV1p1beta1FaceAnnotationUnderExposedLikelihoodEnum["VeryLikely"] = "VERY_LIKELY";
})(GoogleCloudVisionV1p1beta1FaceAnnotationUnderExposedLikelihoodEnum || (GoogleCloudVisionV1p1beta1FaceAnnotationUnderExposedLikelihoodEnum = {}));
// GoogleCloudVisionV1p1beta1FaceAnnotation
/**
 * A face annotation object contains the results of face detection.
**/
var GoogleCloudVisionV1p1beta1FaceAnnotation = /** @class */ (function (_super) {
    __extends(GoogleCloudVisionV1p1beta1FaceAnnotation, _super);
    function GoogleCloudVisionV1p1beta1FaceAnnotation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=angerLikelihood" }),
        __metadata("design:type", String)
    ], GoogleCloudVisionV1p1beta1FaceAnnotation.prototype, "angerLikelihood", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blurredLikelihood" }),
        __metadata("design:type", String)
    ], GoogleCloudVisionV1p1beta1FaceAnnotation.prototype, "blurredLikelihood", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=boundingPoly" }),
        __metadata("design:type", GoogleCloudVisionV1p1beta1BoundingPoly)
    ], GoogleCloudVisionV1p1beta1FaceAnnotation.prototype, "boundingPoly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detectionConfidence" }),
        __metadata("design:type", Number)
    ], GoogleCloudVisionV1p1beta1FaceAnnotation.prototype, "detectionConfidence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fdBoundingPoly" }),
        __metadata("design:type", GoogleCloudVisionV1p1beta1BoundingPoly)
    ], GoogleCloudVisionV1p1beta1FaceAnnotation.prototype, "fdBoundingPoly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headwearLikelihood" }),
        __metadata("design:type", String)
    ], GoogleCloudVisionV1p1beta1FaceAnnotation.prototype, "headwearLikelihood", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=joyLikelihood" }),
        __metadata("design:type", String)
    ], GoogleCloudVisionV1p1beta1FaceAnnotation.prototype, "joyLikelihood", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=landmarkingConfidence" }),
        __metadata("design:type", Number)
    ], GoogleCloudVisionV1p1beta1FaceAnnotation.prototype, "landmarkingConfidence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=landmarks", elemType: GoogleCloudVisionV1p1beta1FaceAnnotationLandmark }),
        __metadata("design:type", Array)
    ], GoogleCloudVisionV1p1beta1FaceAnnotation.prototype, "landmarks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=panAngle" }),
        __metadata("design:type", Number)
    ], GoogleCloudVisionV1p1beta1FaceAnnotation.prototype, "panAngle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rollAngle" }),
        __metadata("design:type", Number)
    ], GoogleCloudVisionV1p1beta1FaceAnnotation.prototype, "rollAngle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sorrowLikelihood" }),
        __metadata("design:type", String)
    ], GoogleCloudVisionV1p1beta1FaceAnnotation.prototype, "sorrowLikelihood", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=surpriseLikelihood" }),
        __metadata("design:type", String)
    ], GoogleCloudVisionV1p1beta1FaceAnnotation.prototype, "surpriseLikelihood", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tiltAngle" }),
        __metadata("design:type", Number)
    ], GoogleCloudVisionV1p1beta1FaceAnnotation.prototype, "tiltAngle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=underExposedLikelihood" }),
        __metadata("design:type", String)
    ], GoogleCloudVisionV1p1beta1FaceAnnotation.prototype, "underExposedLikelihood", void 0);
    return GoogleCloudVisionV1p1beta1FaceAnnotation;
}(SpeakeasyBase));
export { GoogleCloudVisionV1p1beta1FaceAnnotation };
