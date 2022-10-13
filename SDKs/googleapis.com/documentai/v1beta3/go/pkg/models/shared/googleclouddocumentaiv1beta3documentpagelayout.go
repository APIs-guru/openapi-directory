package shared

type GoogleCloudDocumentaiV1beta3DocumentPageLayoutOrientationEnum string

const (
	GoogleCloudDocumentaiV1beta3DocumentPageLayoutOrientationEnumOrientationUnspecified GoogleCloudDocumentaiV1beta3DocumentPageLayoutOrientationEnum = "ORIENTATION_UNSPECIFIED"
	GoogleCloudDocumentaiV1beta3DocumentPageLayoutOrientationEnumPageUp                 GoogleCloudDocumentaiV1beta3DocumentPageLayoutOrientationEnum = "PAGE_UP"
	GoogleCloudDocumentaiV1beta3DocumentPageLayoutOrientationEnumPageRight              GoogleCloudDocumentaiV1beta3DocumentPageLayoutOrientationEnum = "PAGE_RIGHT"
	GoogleCloudDocumentaiV1beta3DocumentPageLayoutOrientationEnumPageDown               GoogleCloudDocumentaiV1beta3DocumentPageLayoutOrientationEnum = "PAGE_DOWN"
	GoogleCloudDocumentaiV1beta3DocumentPageLayoutOrientationEnumPageLeft               GoogleCloudDocumentaiV1beta3DocumentPageLayoutOrientationEnum = "PAGE_LEFT"
)

type GoogleCloudDocumentaiV1beta3DocumentPageLayout struct {
	BoundingPoly *GoogleCloudDocumentaiV1beta3BoundingPoly                      `json:"boundingPoly"`
	Confidence   *float32                                                       `json:"confidence"`
	Orientation  *GoogleCloudDocumentaiV1beta3DocumentPageLayoutOrientationEnum `json:"orientation"`
	TextAnchor   *GoogleCloudDocumentaiV1beta3DocumentTextAnchor                `json:"textAnchor"`
}
