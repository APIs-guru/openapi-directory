import { SpeakeasyBase } from "../../../internal/utils";
import { Position } from "./position";
export declare enum LandmarkTypeEnum {
    UnknownLandmark = "UNKNOWN_LANDMARK",
    LeftEye = "LEFT_EYE",
    RightEye = "RIGHT_EYE",
    LeftOfLeftEyebrow = "LEFT_OF_LEFT_EYEBROW",
    RightOfLeftEyebrow = "RIGHT_OF_LEFT_EYEBROW",
    LeftOfRightEyebrow = "LEFT_OF_RIGHT_EYEBROW",
    RightOfRightEyebrow = "RIGHT_OF_RIGHT_EYEBROW",
    MidpointBetweenEyes = "MIDPOINT_BETWEEN_EYES",
    NoseTip = "NOSE_TIP",
    UpperLip = "UPPER_LIP",
    LowerLip = "LOWER_LIP",
    MouthLeft = "MOUTH_LEFT",
    MouthRight = "MOUTH_RIGHT",
    MouthCenter = "MOUTH_CENTER",
    NoseBottomRight = "NOSE_BOTTOM_RIGHT",
    NoseBottomLeft = "NOSE_BOTTOM_LEFT",
    NoseBottomCenter = "NOSE_BOTTOM_CENTER",
    LeftEyeTopBoundary = "LEFT_EYE_TOP_BOUNDARY",
    LeftEyeRightCorner = "LEFT_EYE_RIGHT_CORNER",
    LeftEyeBottomBoundary = "LEFT_EYE_BOTTOM_BOUNDARY",
    LeftEyeLeftCorner = "LEFT_EYE_LEFT_CORNER",
    RightEyeTopBoundary = "RIGHT_EYE_TOP_BOUNDARY",
    RightEyeRightCorner = "RIGHT_EYE_RIGHT_CORNER",
    RightEyeBottomBoundary = "RIGHT_EYE_BOTTOM_BOUNDARY",
    RightEyeLeftCorner = "RIGHT_EYE_LEFT_CORNER",
    LeftEyebrowUpperMidpoint = "LEFT_EYEBROW_UPPER_MIDPOINT",
    RightEyebrowUpperMidpoint = "RIGHT_EYEBROW_UPPER_MIDPOINT",
    LeftEarTragion = "LEFT_EAR_TRAGION",
    RightEarTragion = "RIGHT_EAR_TRAGION",
    LeftEyePupil = "LEFT_EYE_PUPIL",
    RightEyePupil = "RIGHT_EYE_PUPIL",
    ForeheadGlabella = "FOREHEAD_GLABELLA",
    ChinGnathion = "CHIN_GNATHION",
    ChinLeftGonion = "CHIN_LEFT_GONION",
    ChinRightGonion = "CHIN_RIGHT_GONION",
    LeftCheekCenter = "LEFT_CHEEK_CENTER",
    RightCheekCenter = "RIGHT_CHEEK_CENTER"
}
/**
 * A face-specific landmark (for example, a face feature).
**/
export declare class Landmark extends SpeakeasyBase {
    position?: Position;
    type?: LandmarkTypeEnum;
}
