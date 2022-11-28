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
import { BoundingPoly } from "./boundingpoly";
import { Landmark } from "./landmark";
export var FaceAnnotationAngerLikelihoodEnum;
(function (FaceAnnotationAngerLikelihoodEnum) {
    FaceAnnotationAngerLikelihoodEnum["Unknown"] = "UNKNOWN";
    FaceAnnotationAngerLikelihoodEnum["VeryUnlikely"] = "VERY_UNLIKELY";
    FaceAnnotationAngerLikelihoodEnum["Unlikely"] = "UNLIKELY";
    FaceAnnotationAngerLikelihoodEnum["Possible"] = "POSSIBLE";
    FaceAnnotationAngerLikelihoodEnum["Likely"] = "LIKELY";
    FaceAnnotationAngerLikelihoodEnum["VeryLikely"] = "VERY_LIKELY";
})(FaceAnnotationAngerLikelihoodEnum || (FaceAnnotationAngerLikelihoodEnum = {}));
export var FaceAnnotationBlurredLikelihoodEnum;
(function (FaceAnnotationBlurredLikelihoodEnum) {
    FaceAnnotationBlurredLikelihoodEnum["Unknown"] = "UNKNOWN";
    FaceAnnotationBlurredLikelihoodEnum["VeryUnlikely"] = "VERY_UNLIKELY";
    FaceAnnotationBlurredLikelihoodEnum["Unlikely"] = "UNLIKELY";
    FaceAnnotationBlurredLikelihoodEnum["Possible"] = "POSSIBLE";
    FaceAnnotationBlurredLikelihoodEnum["Likely"] = "LIKELY";
    FaceAnnotationBlurredLikelihoodEnum["VeryLikely"] = "VERY_LIKELY";
})(FaceAnnotationBlurredLikelihoodEnum || (FaceAnnotationBlurredLikelihoodEnum = {}));
export var FaceAnnotationHeadwearLikelihoodEnum;
(function (FaceAnnotationHeadwearLikelihoodEnum) {
    FaceAnnotationHeadwearLikelihoodEnum["Unknown"] = "UNKNOWN";
    FaceAnnotationHeadwearLikelihoodEnum["VeryUnlikely"] = "VERY_UNLIKELY";
    FaceAnnotationHeadwearLikelihoodEnum["Unlikely"] = "UNLIKELY";
    FaceAnnotationHeadwearLikelihoodEnum["Possible"] = "POSSIBLE";
    FaceAnnotationHeadwearLikelihoodEnum["Likely"] = "LIKELY";
    FaceAnnotationHeadwearLikelihoodEnum["VeryLikely"] = "VERY_LIKELY";
})(FaceAnnotationHeadwearLikelihoodEnum || (FaceAnnotationHeadwearLikelihoodEnum = {}));
export var FaceAnnotationJoyLikelihoodEnum;
(function (FaceAnnotationJoyLikelihoodEnum) {
    FaceAnnotationJoyLikelihoodEnum["Unknown"] = "UNKNOWN";
    FaceAnnotationJoyLikelihoodEnum["VeryUnlikely"] = "VERY_UNLIKELY";
    FaceAnnotationJoyLikelihoodEnum["Unlikely"] = "UNLIKELY";
    FaceAnnotationJoyLikelihoodEnum["Possible"] = "POSSIBLE";
    FaceAnnotationJoyLikelihoodEnum["Likely"] = "LIKELY";
    FaceAnnotationJoyLikelihoodEnum["VeryLikely"] = "VERY_LIKELY";
})(FaceAnnotationJoyLikelihoodEnum || (FaceAnnotationJoyLikelihoodEnum = {}));
export var FaceAnnotationSorrowLikelihoodEnum;
(function (FaceAnnotationSorrowLikelihoodEnum) {
    FaceAnnotationSorrowLikelihoodEnum["Unknown"] = "UNKNOWN";
    FaceAnnotationSorrowLikelihoodEnum["VeryUnlikely"] = "VERY_UNLIKELY";
    FaceAnnotationSorrowLikelihoodEnum["Unlikely"] = "UNLIKELY";
    FaceAnnotationSorrowLikelihoodEnum["Possible"] = "POSSIBLE";
    FaceAnnotationSorrowLikelihoodEnum["Likely"] = "LIKELY";
    FaceAnnotationSorrowLikelihoodEnum["VeryLikely"] = "VERY_LIKELY";
})(FaceAnnotationSorrowLikelihoodEnum || (FaceAnnotationSorrowLikelihoodEnum = {}));
export var FaceAnnotationSurpriseLikelihoodEnum;
(function (FaceAnnotationSurpriseLikelihoodEnum) {
    FaceAnnotationSurpriseLikelihoodEnum["Unknown"] = "UNKNOWN";
    FaceAnnotationSurpriseLikelihoodEnum["VeryUnlikely"] = "VERY_UNLIKELY";
    FaceAnnotationSurpriseLikelihoodEnum["Unlikely"] = "UNLIKELY";
    FaceAnnotationSurpriseLikelihoodEnum["Possible"] = "POSSIBLE";
    FaceAnnotationSurpriseLikelihoodEnum["Likely"] = "LIKELY";
    FaceAnnotationSurpriseLikelihoodEnum["VeryLikely"] = "VERY_LIKELY";
})(FaceAnnotationSurpriseLikelihoodEnum || (FaceAnnotationSurpriseLikelihoodEnum = {}));
export var FaceAnnotationUnderExposedLikelihoodEnum;
(function (FaceAnnotationUnderExposedLikelihoodEnum) {
    FaceAnnotationUnderExposedLikelihoodEnum["Unknown"] = "UNKNOWN";
    FaceAnnotationUnderExposedLikelihoodEnum["VeryUnlikely"] = "VERY_UNLIKELY";
    FaceAnnotationUnderExposedLikelihoodEnum["Unlikely"] = "UNLIKELY";
    FaceAnnotationUnderExposedLikelihoodEnum["Possible"] = "POSSIBLE";
    FaceAnnotationUnderExposedLikelihoodEnum["Likely"] = "LIKELY";
    FaceAnnotationUnderExposedLikelihoodEnum["VeryLikely"] = "VERY_LIKELY";
})(FaceAnnotationUnderExposedLikelihoodEnum || (FaceAnnotationUnderExposedLikelihoodEnum = {}));
// FaceAnnotation
/**
 * A face annotation object contains the results of face detection.
**/
var FaceAnnotation = /** @class */ (function (_super) {
    __extends(FaceAnnotation, _super);
    function FaceAnnotation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=angerLikelihood" }),
        __metadata("design:type", String)
    ], FaceAnnotation.prototype, "angerLikelihood", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blurredLikelihood" }),
        __metadata("design:type", String)
    ], FaceAnnotation.prototype, "blurredLikelihood", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=boundingPoly" }),
        __metadata("design:type", BoundingPoly)
    ], FaceAnnotation.prototype, "boundingPoly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detectionConfidence" }),
        __metadata("design:type", Number)
    ], FaceAnnotation.prototype, "detectionConfidence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fdBoundingPoly" }),
        __metadata("design:type", BoundingPoly)
    ], FaceAnnotation.prototype, "fdBoundingPoly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headwearLikelihood" }),
        __metadata("design:type", String)
    ], FaceAnnotation.prototype, "headwearLikelihood", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=joyLikelihood" }),
        __metadata("design:type", String)
    ], FaceAnnotation.prototype, "joyLikelihood", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=landmarkingConfidence" }),
        __metadata("design:type", Number)
    ], FaceAnnotation.prototype, "landmarkingConfidence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=landmarks", elemType: Landmark }),
        __metadata("design:type", Array)
    ], FaceAnnotation.prototype, "landmarks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=panAngle" }),
        __metadata("design:type", Number)
    ], FaceAnnotation.prototype, "panAngle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rollAngle" }),
        __metadata("design:type", Number)
    ], FaceAnnotation.prototype, "rollAngle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sorrowLikelihood" }),
        __metadata("design:type", String)
    ], FaceAnnotation.prototype, "sorrowLikelihood", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=surpriseLikelihood" }),
        __metadata("design:type", String)
    ], FaceAnnotation.prototype, "surpriseLikelihood", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tiltAngle" }),
        __metadata("design:type", Number)
    ], FaceAnnotation.prototype, "tiltAngle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=underExposedLikelihood" }),
        __metadata("design:type", String)
    ], FaceAnnotation.prototype, "underExposedLikelihood", void 0);
    return FaceAnnotation;
}(SpeakeasyBase));
export { FaceAnnotation };
