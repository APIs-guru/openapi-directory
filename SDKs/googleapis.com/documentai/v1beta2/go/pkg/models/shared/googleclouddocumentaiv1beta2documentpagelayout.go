package shared

type GoogleCloudDocumentaiV1beta2DocumentPageLayoutOrientationEnum string

const (
	GoogleCloudDocumentaiV1beta2DocumentPageLayoutOrientationEnumOrientationUnspecified GoogleCloudDocumentaiV1beta2DocumentPageLayoutOrientationEnum = "ORIENTATION_UNSPECIFIED"
	GoogleCloudDocumentaiV1beta2DocumentPageLayoutOrientationEnumPageUp                 GoogleCloudDocumentaiV1beta2DocumentPageLayoutOrientationEnum = "PAGE_UP"
	GoogleCloudDocumentaiV1beta2DocumentPageLayoutOrientationEnumPageRight              GoogleCloudDocumentaiV1beta2DocumentPageLayoutOrientationEnum = "PAGE_RIGHT"
	GoogleCloudDocumentaiV1beta2DocumentPageLayoutOrientationEnumPageDown               GoogleCloudDocumentaiV1beta2DocumentPageLayoutOrientationEnum = "PAGE_DOWN"
	GoogleCloudDocumentaiV1beta2DocumentPageLayoutOrientationEnumPageLeft               GoogleCloudDocumentaiV1beta2DocumentPageLayoutOrientationEnum = "PAGE_LEFT"
)

type GoogleCloudDocumentaiV1beta2DocumentPageLayout struct {
	BoundingPoly *GoogleCloudDocumentaiV1beta2BoundingPoly                      `json:"boundingPoly"`
	Confidence   *float32                                                       `json:"confidence"`
	Orientation  *GoogleCloudDocumentaiV1beta2DocumentPageLayoutOrientationEnum `json:"orientation"`
	TextAnchor   *GoogleCloudDocumentaiV1beta2DocumentTextAnchor                `json:"textAnchor"`
}
