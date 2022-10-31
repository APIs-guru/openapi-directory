package shared




type GoogleCloudDocumentaiV1DocumentPageLayoutOrientationEnum string

const (
    GoogleCloudDocumentaiV1DocumentPageLayoutOrientationEnumOrientationUnspecified GoogleCloudDocumentaiV1DocumentPageLayoutOrientationEnum = "ORIENTATION_UNSPECIFIED"
GoogleCloudDocumentaiV1DocumentPageLayoutOrientationEnumPageUp GoogleCloudDocumentaiV1DocumentPageLayoutOrientationEnum = "PAGE_UP"
GoogleCloudDocumentaiV1DocumentPageLayoutOrientationEnumPageRight GoogleCloudDocumentaiV1DocumentPageLayoutOrientationEnum = "PAGE_RIGHT"
GoogleCloudDocumentaiV1DocumentPageLayoutOrientationEnumPageDown GoogleCloudDocumentaiV1DocumentPageLayoutOrientationEnum = "PAGE_DOWN"
GoogleCloudDocumentaiV1DocumentPageLayoutOrientationEnumPageLeft GoogleCloudDocumentaiV1DocumentPageLayoutOrientationEnum = "PAGE_LEFT"
)


type GoogleCloudDocumentaiV1DocumentPageLayout struct {
    BoundingPoly *GoogleCloudDocumentaiV1BoundingPoly `json:"boundingPoly,omitempty"`
    Confidence *float32 `json:"confidence,omitempty"`
    Orientation *GoogleCloudDocumentaiV1DocumentPageLayoutOrientationEnum `json:"orientation,omitempty"`
    TextAnchor *GoogleCloudDocumentaiV1DocumentTextAnchor `json:"textAnchor,omitempty"`
    
}

