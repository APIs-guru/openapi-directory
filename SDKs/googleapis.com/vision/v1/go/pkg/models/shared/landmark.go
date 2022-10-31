package shared




type LandmarkTypeEnum string

const (
    LandmarkTypeEnumUnknownLandmark LandmarkTypeEnum = "UNKNOWN_LANDMARK"
LandmarkTypeEnumLeftEye LandmarkTypeEnum = "LEFT_EYE"
LandmarkTypeEnumRightEye LandmarkTypeEnum = "RIGHT_EYE"
LandmarkTypeEnumLeftOfLeftEyebrow LandmarkTypeEnum = "LEFT_OF_LEFT_EYEBROW"
LandmarkTypeEnumRightOfLeftEyebrow LandmarkTypeEnum = "RIGHT_OF_LEFT_EYEBROW"
LandmarkTypeEnumLeftOfRightEyebrow LandmarkTypeEnum = "LEFT_OF_RIGHT_EYEBROW"
LandmarkTypeEnumRightOfRightEyebrow LandmarkTypeEnum = "RIGHT_OF_RIGHT_EYEBROW"
LandmarkTypeEnumMidpointBetweenEyes LandmarkTypeEnum = "MIDPOINT_BETWEEN_EYES"
LandmarkTypeEnumNoseTip LandmarkTypeEnum = "NOSE_TIP"
LandmarkTypeEnumUpperLip LandmarkTypeEnum = "UPPER_LIP"
LandmarkTypeEnumLowerLip LandmarkTypeEnum = "LOWER_LIP"
LandmarkTypeEnumMouthLeft LandmarkTypeEnum = "MOUTH_LEFT"
LandmarkTypeEnumMouthRight LandmarkTypeEnum = "MOUTH_RIGHT"
LandmarkTypeEnumMouthCenter LandmarkTypeEnum = "MOUTH_CENTER"
LandmarkTypeEnumNoseBottomRight LandmarkTypeEnum = "NOSE_BOTTOM_RIGHT"
LandmarkTypeEnumNoseBottomLeft LandmarkTypeEnum = "NOSE_BOTTOM_LEFT"
LandmarkTypeEnumNoseBottomCenter LandmarkTypeEnum = "NOSE_BOTTOM_CENTER"
LandmarkTypeEnumLeftEyeTopBoundary LandmarkTypeEnum = "LEFT_EYE_TOP_BOUNDARY"
LandmarkTypeEnumLeftEyeRightCorner LandmarkTypeEnum = "LEFT_EYE_RIGHT_CORNER"
LandmarkTypeEnumLeftEyeBottomBoundary LandmarkTypeEnum = "LEFT_EYE_BOTTOM_BOUNDARY"
LandmarkTypeEnumLeftEyeLeftCorner LandmarkTypeEnum = "LEFT_EYE_LEFT_CORNER"
LandmarkTypeEnumRightEyeTopBoundary LandmarkTypeEnum = "RIGHT_EYE_TOP_BOUNDARY"
LandmarkTypeEnumRightEyeRightCorner LandmarkTypeEnum = "RIGHT_EYE_RIGHT_CORNER"
LandmarkTypeEnumRightEyeBottomBoundary LandmarkTypeEnum = "RIGHT_EYE_BOTTOM_BOUNDARY"
LandmarkTypeEnumRightEyeLeftCorner LandmarkTypeEnum = "RIGHT_EYE_LEFT_CORNER"
LandmarkTypeEnumLeftEyebrowUpperMidpoint LandmarkTypeEnum = "LEFT_EYEBROW_UPPER_MIDPOINT"
LandmarkTypeEnumRightEyebrowUpperMidpoint LandmarkTypeEnum = "RIGHT_EYEBROW_UPPER_MIDPOINT"
LandmarkTypeEnumLeftEarTragion LandmarkTypeEnum = "LEFT_EAR_TRAGION"
LandmarkTypeEnumRightEarTragion LandmarkTypeEnum = "RIGHT_EAR_TRAGION"
LandmarkTypeEnumLeftEyePupil LandmarkTypeEnum = "LEFT_EYE_PUPIL"
LandmarkTypeEnumRightEyePupil LandmarkTypeEnum = "RIGHT_EYE_PUPIL"
LandmarkTypeEnumForeheadGlabella LandmarkTypeEnum = "FOREHEAD_GLABELLA"
LandmarkTypeEnumChinGnathion LandmarkTypeEnum = "CHIN_GNATHION"
LandmarkTypeEnumChinLeftGonion LandmarkTypeEnum = "CHIN_LEFT_GONION"
LandmarkTypeEnumChinRightGonion LandmarkTypeEnum = "CHIN_RIGHT_GONION"
LandmarkTypeEnumLeftCheekCenter LandmarkTypeEnum = "LEFT_CHEEK_CENTER"
LandmarkTypeEnumRightCheekCenter LandmarkTypeEnum = "RIGHT_CHEEK_CENTER"
)


type Landmark struct {
    Position *Position `json:"position,omitempty"`
    Type *LandmarkTypeEnum `json:"type,omitempty"`
    
}

