package shared




type FaceAnnotationAngerLikelihoodEnum string

const (
    FaceAnnotationAngerLikelihoodEnumUnknown FaceAnnotationAngerLikelihoodEnum = "UNKNOWN"
FaceAnnotationAngerLikelihoodEnumVeryUnlikely FaceAnnotationAngerLikelihoodEnum = "VERY_UNLIKELY"
FaceAnnotationAngerLikelihoodEnumUnlikely FaceAnnotationAngerLikelihoodEnum = "UNLIKELY"
FaceAnnotationAngerLikelihoodEnumPossible FaceAnnotationAngerLikelihoodEnum = "POSSIBLE"
FaceAnnotationAngerLikelihoodEnumLikely FaceAnnotationAngerLikelihoodEnum = "LIKELY"
FaceAnnotationAngerLikelihoodEnumVeryLikely FaceAnnotationAngerLikelihoodEnum = "VERY_LIKELY"
)



type FaceAnnotationBlurredLikelihoodEnum string

const (
    FaceAnnotationBlurredLikelihoodEnumUnknown FaceAnnotationBlurredLikelihoodEnum = "UNKNOWN"
FaceAnnotationBlurredLikelihoodEnumVeryUnlikely FaceAnnotationBlurredLikelihoodEnum = "VERY_UNLIKELY"
FaceAnnotationBlurredLikelihoodEnumUnlikely FaceAnnotationBlurredLikelihoodEnum = "UNLIKELY"
FaceAnnotationBlurredLikelihoodEnumPossible FaceAnnotationBlurredLikelihoodEnum = "POSSIBLE"
FaceAnnotationBlurredLikelihoodEnumLikely FaceAnnotationBlurredLikelihoodEnum = "LIKELY"
FaceAnnotationBlurredLikelihoodEnumVeryLikely FaceAnnotationBlurredLikelihoodEnum = "VERY_LIKELY"
)



type FaceAnnotationHeadwearLikelihoodEnum string

const (
    FaceAnnotationHeadwearLikelihoodEnumUnknown FaceAnnotationHeadwearLikelihoodEnum = "UNKNOWN"
FaceAnnotationHeadwearLikelihoodEnumVeryUnlikely FaceAnnotationHeadwearLikelihoodEnum = "VERY_UNLIKELY"
FaceAnnotationHeadwearLikelihoodEnumUnlikely FaceAnnotationHeadwearLikelihoodEnum = "UNLIKELY"
FaceAnnotationHeadwearLikelihoodEnumPossible FaceAnnotationHeadwearLikelihoodEnum = "POSSIBLE"
FaceAnnotationHeadwearLikelihoodEnumLikely FaceAnnotationHeadwearLikelihoodEnum = "LIKELY"
FaceAnnotationHeadwearLikelihoodEnumVeryLikely FaceAnnotationHeadwearLikelihoodEnum = "VERY_LIKELY"
)



type FaceAnnotationJoyLikelihoodEnum string

const (
    FaceAnnotationJoyLikelihoodEnumUnknown FaceAnnotationJoyLikelihoodEnum = "UNKNOWN"
FaceAnnotationJoyLikelihoodEnumVeryUnlikely FaceAnnotationJoyLikelihoodEnum = "VERY_UNLIKELY"
FaceAnnotationJoyLikelihoodEnumUnlikely FaceAnnotationJoyLikelihoodEnum = "UNLIKELY"
FaceAnnotationJoyLikelihoodEnumPossible FaceAnnotationJoyLikelihoodEnum = "POSSIBLE"
FaceAnnotationJoyLikelihoodEnumLikely FaceAnnotationJoyLikelihoodEnum = "LIKELY"
FaceAnnotationJoyLikelihoodEnumVeryLikely FaceAnnotationJoyLikelihoodEnum = "VERY_LIKELY"
)



type FaceAnnotationSorrowLikelihoodEnum string

const (
    FaceAnnotationSorrowLikelihoodEnumUnknown FaceAnnotationSorrowLikelihoodEnum = "UNKNOWN"
FaceAnnotationSorrowLikelihoodEnumVeryUnlikely FaceAnnotationSorrowLikelihoodEnum = "VERY_UNLIKELY"
FaceAnnotationSorrowLikelihoodEnumUnlikely FaceAnnotationSorrowLikelihoodEnum = "UNLIKELY"
FaceAnnotationSorrowLikelihoodEnumPossible FaceAnnotationSorrowLikelihoodEnum = "POSSIBLE"
FaceAnnotationSorrowLikelihoodEnumLikely FaceAnnotationSorrowLikelihoodEnum = "LIKELY"
FaceAnnotationSorrowLikelihoodEnumVeryLikely FaceAnnotationSorrowLikelihoodEnum = "VERY_LIKELY"
)



type FaceAnnotationSurpriseLikelihoodEnum string

const (
    FaceAnnotationSurpriseLikelihoodEnumUnknown FaceAnnotationSurpriseLikelihoodEnum = "UNKNOWN"
FaceAnnotationSurpriseLikelihoodEnumVeryUnlikely FaceAnnotationSurpriseLikelihoodEnum = "VERY_UNLIKELY"
FaceAnnotationSurpriseLikelihoodEnumUnlikely FaceAnnotationSurpriseLikelihoodEnum = "UNLIKELY"
FaceAnnotationSurpriseLikelihoodEnumPossible FaceAnnotationSurpriseLikelihoodEnum = "POSSIBLE"
FaceAnnotationSurpriseLikelihoodEnumLikely FaceAnnotationSurpriseLikelihoodEnum = "LIKELY"
FaceAnnotationSurpriseLikelihoodEnumVeryLikely FaceAnnotationSurpriseLikelihoodEnum = "VERY_LIKELY"
)



type FaceAnnotationUnderExposedLikelihoodEnum string

const (
    FaceAnnotationUnderExposedLikelihoodEnumUnknown FaceAnnotationUnderExposedLikelihoodEnum = "UNKNOWN"
FaceAnnotationUnderExposedLikelihoodEnumVeryUnlikely FaceAnnotationUnderExposedLikelihoodEnum = "VERY_UNLIKELY"
FaceAnnotationUnderExposedLikelihoodEnumUnlikely FaceAnnotationUnderExposedLikelihoodEnum = "UNLIKELY"
FaceAnnotationUnderExposedLikelihoodEnumPossible FaceAnnotationUnderExposedLikelihoodEnum = "POSSIBLE"
FaceAnnotationUnderExposedLikelihoodEnumLikely FaceAnnotationUnderExposedLikelihoodEnum = "LIKELY"
FaceAnnotationUnderExposedLikelihoodEnumVeryLikely FaceAnnotationUnderExposedLikelihoodEnum = "VERY_LIKELY"
)


type FaceAnnotation struct {
    AngerLikelihood *FaceAnnotationAngerLikelihoodEnum `json:"angerLikelihood,omitempty"`
    BlurredLikelihood *FaceAnnotationBlurredLikelihoodEnum `json:"blurredLikelihood,omitempty"`
    BoundingPoly *BoundingPoly `json:"boundingPoly,omitempty"`
    DetectionConfidence *float32 `json:"detectionConfidence,omitempty"`
    FdBoundingPoly *BoundingPoly `json:"fdBoundingPoly,omitempty"`
    HeadwearLikelihood *FaceAnnotationHeadwearLikelihoodEnum `json:"headwearLikelihood,omitempty"`
    JoyLikelihood *FaceAnnotationJoyLikelihoodEnum `json:"joyLikelihood,omitempty"`
    LandmarkingConfidence *float32 `json:"landmarkingConfidence,omitempty"`
    Landmarks []Landmark `json:"landmarks,omitempty"`
    PanAngle *float32 `json:"panAngle,omitempty"`
    RollAngle *float32 `json:"rollAngle,omitempty"`
    SorrowLikelihood *FaceAnnotationSorrowLikelihoodEnum `json:"sorrowLikelihood,omitempty"`
    SurpriseLikelihood *FaceAnnotationSurpriseLikelihoodEnum `json:"surpriseLikelihood,omitempty"`
    TiltAngle *float32 `json:"tiltAngle,omitempty"`
    UnderExposedLikelihood *FaceAnnotationUnderExposedLikelihoodEnum `json:"underExposedLikelihood,omitempty"`
    
}

