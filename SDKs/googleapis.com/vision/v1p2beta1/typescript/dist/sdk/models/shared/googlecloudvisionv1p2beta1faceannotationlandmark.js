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
import { GoogleCloudVisionV1p2beta1Position } from "./googlecloudvisionv1p2beta1position";
export var GoogleCloudVisionV1p2beta1FaceAnnotationLandmarkTypeEnum;
(function (GoogleCloudVisionV1p2beta1FaceAnnotationLandmarkTypeEnum) {
    GoogleCloudVisionV1p2beta1FaceAnnotationLandmarkTypeEnum["UnknownLandmark"] = "UNKNOWN_LANDMARK";
    GoogleCloudVisionV1p2beta1FaceAnnotationLandmarkTypeEnum["LeftEye"] = "LEFT_EYE";
    GoogleCloudVisionV1p2beta1FaceAnnotationLandmarkTypeEnum["RightEye"] = "RIGHT_EYE";
    GoogleCloudVisionV1p2beta1FaceAnnotationLandmarkTypeEnum["LeftOfLeftEyebrow"] = "LEFT_OF_LEFT_EYEBROW";
    GoogleCloudVisionV1p2beta1FaceAnnotationLandmarkTypeEnum["RightOfLeftEyebrow"] = "RIGHT_OF_LEFT_EYEBROW";
    GoogleCloudVisionV1p2beta1FaceAnnotationLandmarkTypeEnum["LeftOfRightEyebrow"] = "LEFT_OF_RIGHT_EYEBROW";
    GoogleCloudVisionV1p2beta1FaceAnnotationLandmarkTypeEnum["RightOfRightEyebrow"] = "RIGHT_OF_RIGHT_EYEBROW";
    GoogleCloudVisionV1p2beta1FaceAnnotationLandmarkTypeEnum["MidpointBetweenEyes"] = "MIDPOINT_BETWEEN_EYES";
    GoogleCloudVisionV1p2beta1FaceAnnotationLandmarkTypeEnum["NoseTip"] = "NOSE_TIP";
    GoogleCloudVisionV1p2beta1FaceAnnotationLandmarkTypeEnum["UpperLip"] = "UPPER_LIP";
    GoogleCloudVisionV1p2beta1FaceAnnotationLandmarkTypeEnum["LowerLip"] = "LOWER_LIP";
    GoogleCloudVisionV1p2beta1FaceAnnotationLandmarkTypeEnum["MouthLeft"] = "MOUTH_LEFT";
    GoogleCloudVisionV1p2beta1FaceAnnotationLandmarkTypeEnum["MouthRight"] = "MOUTH_RIGHT";
    GoogleCloudVisionV1p2beta1FaceAnnotationLandmarkTypeEnum["MouthCenter"] = "MOUTH_CENTER";
    GoogleCloudVisionV1p2beta1FaceAnnotationLandmarkTypeEnum["NoseBottomRight"] = "NOSE_BOTTOM_RIGHT";
    GoogleCloudVisionV1p2beta1FaceAnnotationLandmarkTypeEnum["NoseBottomLeft"] = "NOSE_BOTTOM_LEFT";
    GoogleCloudVisionV1p2beta1FaceAnnotationLandmarkTypeEnum["NoseBottomCenter"] = "NOSE_BOTTOM_CENTER";
    GoogleCloudVisionV1p2beta1FaceAnnotationLandmarkTypeEnum["LeftEyeTopBoundary"] = "LEFT_EYE_TOP_BOUNDARY";
    GoogleCloudVisionV1p2beta1FaceAnnotationLandmarkTypeEnum["LeftEyeRightCorner"] = "LEFT_EYE_RIGHT_CORNER";
    GoogleCloudVisionV1p2beta1FaceAnnotationLandmarkTypeEnum["LeftEyeBottomBoundary"] = "LEFT_EYE_BOTTOM_BOUNDARY";
    GoogleCloudVisionV1p2beta1FaceAnnotationLandmarkTypeEnum["LeftEyeLeftCorner"] = "LEFT_EYE_LEFT_CORNER";
    GoogleCloudVisionV1p2beta1FaceAnnotationLandmarkTypeEnum["RightEyeTopBoundary"] = "RIGHT_EYE_TOP_BOUNDARY";
    GoogleCloudVisionV1p2beta1FaceAnnotationLandmarkTypeEnum["RightEyeRightCorner"] = "RIGHT_EYE_RIGHT_CORNER";
    GoogleCloudVisionV1p2beta1FaceAnnotationLandmarkTypeEnum["RightEyeBottomBoundary"] = "RIGHT_EYE_BOTTOM_BOUNDARY";
    GoogleCloudVisionV1p2beta1FaceAnnotationLandmarkTypeEnum["RightEyeLeftCorner"] = "RIGHT_EYE_LEFT_CORNER";
    GoogleCloudVisionV1p2beta1FaceAnnotationLandmarkTypeEnum["LeftEyebrowUpperMidpoint"] = "LEFT_EYEBROW_UPPER_MIDPOINT";
    GoogleCloudVisionV1p2beta1FaceAnnotationLandmarkTypeEnum["RightEyebrowUpperMidpoint"] = "RIGHT_EYEBROW_UPPER_MIDPOINT";
    GoogleCloudVisionV1p2beta1FaceAnnotationLandmarkTypeEnum["LeftEarTragion"] = "LEFT_EAR_TRAGION";
    GoogleCloudVisionV1p2beta1FaceAnnotationLandmarkTypeEnum["RightEarTragion"] = "RIGHT_EAR_TRAGION";
    GoogleCloudVisionV1p2beta1FaceAnnotationLandmarkTypeEnum["LeftEyePupil"] = "LEFT_EYE_PUPIL";
    GoogleCloudVisionV1p2beta1FaceAnnotationLandmarkTypeEnum["RightEyePupil"] = "RIGHT_EYE_PUPIL";
    GoogleCloudVisionV1p2beta1FaceAnnotationLandmarkTypeEnum["ForeheadGlabella"] = "FOREHEAD_GLABELLA";
    GoogleCloudVisionV1p2beta1FaceAnnotationLandmarkTypeEnum["ChinGnathion"] = "CHIN_GNATHION";
    GoogleCloudVisionV1p2beta1FaceAnnotationLandmarkTypeEnum["ChinLeftGonion"] = "CHIN_LEFT_GONION";
    GoogleCloudVisionV1p2beta1FaceAnnotationLandmarkTypeEnum["ChinRightGonion"] = "CHIN_RIGHT_GONION";
    GoogleCloudVisionV1p2beta1FaceAnnotationLandmarkTypeEnum["LeftCheekCenter"] = "LEFT_CHEEK_CENTER";
    GoogleCloudVisionV1p2beta1FaceAnnotationLandmarkTypeEnum["RightCheekCenter"] = "RIGHT_CHEEK_CENTER";
})(GoogleCloudVisionV1p2beta1FaceAnnotationLandmarkTypeEnum || (GoogleCloudVisionV1p2beta1FaceAnnotationLandmarkTypeEnum = {}));
// GoogleCloudVisionV1p2beta1FaceAnnotationLandmark
/**
 * A face-specific landmark (for example, a face feature).
**/
var GoogleCloudVisionV1p2beta1FaceAnnotationLandmark = /** @class */ (function (_super) {
    __extends(GoogleCloudVisionV1p2beta1FaceAnnotationLandmark, _super);
    function GoogleCloudVisionV1p2beta1FaceAnnotationLandmark() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=position" }),
        __metadata("design:type", GoogleCloudVisionV1p2beta1Position)
    ], GoogleCloudVisionV1p2beta1FaceAnnotationLandmark.prototype, "position", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudVisionV1p2beta1FaceAnnotationLandmark.prototype, "type", void 0);
    return GoogleCloudVisionV1p2beta1FaceAnnotationLandmark;
}(SpeakeasyBase));
export { GoogleCloudVisionV1p2beta1FaceAnnotationLandmark };
