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
import { Position } from "./position";
export var LandmarkTypeEnum;
(function (LandmarkTypeEnum) {
    LandmarkTypeEnum["UnknownLandmark"] = "UNKNOWN_LANDMARK";
    LandmarkTypeEnum["LeftEye"] = "LEFT_EYE";
    LandmarkTypeEnum["RightEye"] = "RIGHT_EYE";
    LandmarkTypeEnum["LeftOfLeftEyebrow"] = "LEFT_OF_LEFT_EYEBROW";
    LandmarkTypeEnum["RightOfLeftEyebrow"] = "RIGHT_OF_LEFT_EYEBROW";
    LandmarkTypeEnum["LeftOfRightEyebrow"] = "LEFT_OF_RIGHT_EYEBROW";
    LandmarkTypeEnum["RightOfRightEyebrow"] = "RIGHT_OF_RIGHT_EYEBROW";
    LandmarkTypeEnum["MidpointBetweenEyes"] = "MIDPOINT_BETWEEN_EYES";
    LandmarkTypeEnum["NoseTip"] = "NOSE_TIP";
    LandmarkTypeEnum["UpperLip"] = "UPPER_LIP";
    LandmarkTypeEnum["LowerLip"] = "LOWER_LIP";
    LandmarkTypeEnum["MouthLeft"] = "MOUTH_LEFT";
    LandmarkTypeEnum["MouthRight"] = "MOUTH_RIGHT";
    LandmarkTypeEnum["MouthCenter"] = "MOUTH_CENTER";
    LandmarkTypeEnum["NoseBottomRight"] = "NOSE_BOTTOM_RIGHT";
    LandmarkTypeEnum["NoseBottomLeft"] = "NOSE_BOTTOM_LEFT";
    LandmarkTypeEnum["NoseBottomCenter"] = "NOSE_BOTTOM_CENTER";
    LandmarkTypeEnum["LeftEyeTopBoundary"] = "LEFT_EYE_TOP_BOUNDARY";
    LandmarkTypeEnum["LeftEyeRightCorner"] = "LEFT_EYE_RIGHT_CORNER";
    LandmarkTypeEnum["LeftEyeBottomBoundary"] = "LEFT_EYE_BOTTOM_BOUNDARY";
    LandmarkTypeEnum["LeftEyeLeftCorner"] = "LEFT_EYE_LEFT_CORNER";
    LandmarkTypeEnum["RightEyeTopBoundary"] = "RIGHT_EYE_TOP_BOUNDARY";
    LandmarkTypeEnum["RightEyeRightCorner"] = "RIGHT_EYE_RIGHT_CORNER";
    LandmarkTypeEnum["RightEyeBottomBoundary"] = "RIGHT_EYE_BOTTOM_BOUNDARY";
    LandmarkTypeEnum["RightEyeLeftCorner"] = "RIGHT_EYE_LEFT_CORNER";
    LandmarkTypeEnum["LeftEyebrowUpperMidpoint"] = "LEFT_EYEBROW_UPPER_MIDPOINT";
    LandmarkTypeEnum["RightEyebrowUpperMidpoint"] = "RIGHT_EYEBROW_UPPER_MIDPOINT";
    LandmarkTypeEnum["LeftEarTragion"] = "LEFT_EAR_TRAGION";
    LandmarkTypeEnum["RightEarTragion"] = "RIGHT_EAR_TRAGION";
    LandmarkTypeEnum["LeftEyePupil"] = "LEFT_EYE_PUPIL";
    LandmarkTypeEnum["RightEyePupil"] = "RIGHT_EYE_PUPIL";
    LandmarkTypeEnum["ForeheadGlabella"] = "FOREHEAD_GLABELLA";
    LandmarkTypeEnum["ChinGnathion"] = "CHIN_GNATHION";
    LandmarkTypeEnum["ChinLeftGonion"] = "CHIN_LEFT_GONION";
    LandmarkTypeEnum["ChinRightGonion"] = "CHIN_RIGHT_GONION";
    LandmarkTypeEnum["LeftCheekCenter"] = "LEFT_CHEEK_CENTER";
    LandmarkTypeEnum["RightCheekCenter"] = "RIGHT_CHEEK_CENTER";
})(LandmarkTypeEnum || (LandmarkTypeEnum = {}));
// Landmark
/**
 * A face-specific landmark (for example, a face feature).
**/
var Landmark = /** @class */ (function (_super) {
    __extends(Landmark, _super);
    function Landmark() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=position" }),
        __metadata("design:type", Position)
    ], Landmark.prototype, "position", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Landmark.prototype, "type", void 0);
    return Landmark;
}(SpeakeasyBase));
export { Landmark };
