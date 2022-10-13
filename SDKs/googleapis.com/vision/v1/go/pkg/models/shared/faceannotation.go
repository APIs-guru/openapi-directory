package shared

type FaceAnnotationAngerLikelihoodEnum string

const (
	FaceAnnotationAngerLikelihoodEnumUnknown      FaceAnnotationAngerLikelihoodEnum = "UNKNOWN"
	FaceAnnotationAngerLikelihoodEnumVeryUnlikely FaceAnnotationAngerLikelihoodEnum = "VERY_UNLIKELY"
	FaceAnnotationAngerLikelihoodEnumUnlikely     FaceAnnotationAngerLikelihoodEnum = "UNLIKELY"
	FaceAnnotationAngerLikelihoodEnumPossible     FaceAnnotationAngerLikelihoodEnum = "POSSIBLE"
	FaceAnnotationAngerLikelihoodEnumLikely       FaceAnnotationAngerLikelihoodEnum = "LIKELY"
	FaceAnnotationAngerLikelihoodEnumVeryLikely   FaceAnnotationAngerLikelihoodEnum = "VERY_LIKELY"
)

type FaceAnnotationBlurredLikelihoodEnum string

const (
	FaceAnnotationBlurredLikelihoodEnumUnknown      FaceAnnotationBlurredLikelihoodEnum = "UNKNOWN"
	FaceAnnotationBlurredLikelihoodEnumVeryUnlikely FaceAnnotationBlurredLikelihoodEnum = "VERY_UNLIKELY"
	FaceAnnotationBlurredLikelihoodEnumUnlikely     FaceAnnotationBlurredLikelihoodEnum = "UNLIKELY"
	FaceAnnotationBlurredLikelihoodEnumPossible     FaceAnnotationBlurredLikelihoodEnum = "POSSIBLE"
	FaceAnnotationBlurredLikelihoodEnumLikely       FaceAnnotationBlurredLikelihoodEnum = "LIKELY"
	FaceAnnotationBlurredLikelihoodEnumVeryLikely   FaceAnnotationBlurredLikelihoodEnum = "VERY_LIKELY"
)

type FaceAnnotationHeadwearLikelihoodEnum string

const (
	FaceAnnotationHeadwearLikelihoodEnumUnknown      FaceAnnotationHeadwearLikelihoodEnum = "UNKNOWN"
	FaceAnnotationHeadwearLikelihoodEnumVeryUnlikely FaceAnnotationHeadwearLikelihoodEnum = "VERY_UNLIKELY"
	FaceAnnotationHeadwearLikelihoodEnumUnlikely     FaceAnnotationHeadwearLikelihoodEnum = "UNLIKELY"
	FaceAnnotationHeadwearLikelihoodEnumPossible     FaceAnnotationHeadwearLikelihoodEnum = "POSSIBLE"
	FaceAnnotationHeadwearLikelihoodEnumLikely       FaceAnnotationHeadwearLikelihoodEnum = "LIKELY"
	FaceAnnotationHeadwearLikelihoodEnumVeryLikely   FaceAnnotationHeadwearLikelihoodEnum = "VERY_LIKELY"
)

type FaceAnnotationJoyLikelihoodEnum string

const (
	FaceAnnotationJoyLikelihoodEnumUnknown      FaceAnnotationJoyLikelihoodEnum = "UNKNOWN"
	FaceAnnotationJoyLikelihoodEnumVeryUnlikely FaceAnnotationJoyLikelihoodEnum = "VERY_UNLIKELY"
	FaceAnnotationJoyLikelihoodEnumUnlikely     FaceAnnotationJoyLikelihoodEnum = "UNLIKELY"
	FaceAnnotationJoyLikelihoodEnumPossible     FaceAnnotationJoyLikelihoodEnum = "POSSIBLE"
	FaceAnnotationJoyLikelihoodEnumLikely       FaceAnnotationJoyLikelihoodEnum = "LIKELY"
	FaceAnnotationJoyLikelihoodEnumVeryLikely   FaceAnnotationJoyLikelihoodEnum = "VERY_LIKELY"
)

type FaceAnnotationSorrowLikelihoodEnum string

const (
	FaceAnnotationSorrowLikelihoodEnumUnknown      FaceAnnotationSorrowLikelihoodEnum = "UNKNOWN"
	FaceAnnotationSorrowLikelihoodEnumVeryUnlikely FaceAnnotationSorrowLikelihoodEnum = "VERY_UNLIKELY"
	FaceAnnotationSorrowLikelihoodEnumUnlikely     FaceAnnotationSorrowLikelihoodEnum = "UNLIKELY"
	FaceAnnotationSorrowLikelihoodEnumPossible     FaceAnnotationSorrowLikelihoodEnum = "POSSIBLE"
	FaceAnnotationSorrowLikelihoodEnumLikely       FaceAnnotationSorrowLikelihoodEnum = "LIKELY"
	FaceAnnotationSorrowLikelihoodEnumVeryLikely   FaceAnnotationSorrowLikelihoodEnum = "VERY_LIKELY"
)

type FaceAnnotationSurpriseLikelihoodEnum string

const (
	FaceAnnotationSurpriseLikelihoodEnumUnknown      FaceAnnotationSurpriseLikelihoodEnum = "UNKNOWN"
	FaceAnnotationSurpriseLikelihoodEnumVeryUnlikely FaceAnnotationSurpriseLikelihoodEnum = "VERY_UNLIKELY"
	FaceAnnotationSurpriseLikelihoodEnumUnlikely     FaceAnnotationSurpriseLikelihoodEnum = "UNLIKELY"
	FaceAnnotationSurpriseLikelihoodEnumPossible     FaceAnnotationSurpriseLikelihoodEnum = "POSSIBLE"
	FaceAnnotationSurpriseLikelihoodEnumLikely       FaceAnnotationSurpriseLikelihoodEnum = "LIKELY"
	FaceAnnotationSurpriseLikelihoodEnumVeryLikely   FaceAnnotationSurpriseLikelihoodEnum = "VERY_LIKELY"
)

type FaceAnnotationUnderExposedLikelihoodEnum string

const (
	FaceAnnotationUnderExposedLikelihoodEnumUnknown      FaceAnnotationUnderExposedLikelihoodEnum = "UNKNOWN"
	FaceAnnotationUnderExposedLikelihoodEnumVeryUnlikely FaceAnnotationUnderExposedLikelihoodEnum = "VERY_UNLIKELY"
	FaceAnnotationUnderExposedLikelihoodEnumUnlikely     FaceAnnotationUnderExposedLikelihoodEnum = "UNLIKELY"
	FaceAnnotationUnderExposedLikelihoodEnumPossible     FaceAnnotationUnderExposedLikelihoodEnum = "POSSIBLE"
	FaceAnnotationUnderExposedLikelihoodEnumLikely       FaceAnnotationUnderExposedLikelihoodEnum = "LIKELY"
	FaceAnnotationUnderExposedLikelihoodEnumVeryLikely   FaceAnnotationUnderExposedLikelihoodEnum = "VERY_LIKELY"
)

type FaceAnnotation struct {
	AngerLikelihood        *FaceAnnotationAngerLikelihoodEnum        `json:"angerLikelihood"`
	BlurredLikelihood      *FaceAnnotationBlurredLikelihoodEnum      `json:"blurredLikelihood"`
	BoundingPoly           *BoundingPoly                             `json:"boundingPoly"`
	DetectionConfidence    *float32                                  `json:"detectionConfidence"`
	FdBoundingPoly         *BoundingPoly                             `json:"fdBoundingPoly"`
	HeadwearLikelihood     *FaceAnnotationHeadwearLikelihoodEnum     `json:"headwearLikelihood"`
	JoyLikelihood          *FaceAnnotationJoyLikelihoodEnum          `json:"joyLikelihood"`
	LandmarkingConfidence  *float32                                  `json:"landmarkingConfidence"`
	Landmarks              []Landmark                                `json:"landmarks"`
	PanAngle               *float32                                  `json:"panAngle"`
	RollAngle              *float32                                  `json:"rollAngle"`
	SorrowLikelihood       *FaceAnnotationSorrowLikelihoodEnum       `json:"sorrowLikelihood"`
	SurpriseLikelihood     *FaceAnnotationSurpriseLikelihoodEnum     `json:"surpriseLikelihood"`
	TiltAngle              *float32                                  `json:"tiltAngle"`
	UnderExposedLikelihood *FaceAnnotationUnderExposedLikelihoodEnum `json:"underExposedLikelihood"`
}
