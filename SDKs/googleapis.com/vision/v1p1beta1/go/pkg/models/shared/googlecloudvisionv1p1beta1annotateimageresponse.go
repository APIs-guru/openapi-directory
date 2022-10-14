package shared

type GoogleCloudVisionV1p1beta1AnnotateImageResponse struct {
	Context                    *GoogleCloudVisionV1p1beta1ImageAnnotationContext     `json:"context,omitempty"`
	CropHintsAnnotation        *GoogleCloudVisionV1p1beta1CropHintsAnnotation        `json:"cropHintsAnnotation,omitempty"`
	Error                      *Status                                               `json:"error,omitempty"`
	FaceAnnotations            []GoogleCloudVisionV1p1beta1FaceAnnotation            `json:"faceAnnotations,omitempty"`
	FullTextAnnotation         *GoogleCloudVisionV1p1beta1TextAnnotation             `json:"fullTextAnnotation,omitempty"`
	ImagePropertiesAnnotation  *GoogleCloudVisionV1p1beta1ImageProperties            `json:"imagePropertiesAnnotation,omitempty"`
	LabelAnnotations           []GoogleCloudVisionV1p1beta1EntityAnnotation          `json:"labelAnnotations,omitempty"`
	LandmarkAnnotations        []GoogleCloudVisionV1p1beta1EntityAnnotation          `json:"landmarkAnnotations,omitempty"`
	LocalizedObjectAnnotations []GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation `json:"localizedObjectAnnotations,omitempty"`
	LogoAnnotations            []GoogleCloudVisionV1p1beta1EntityAnnotation          `json:"logoAnnotations,omitempty"`
	ProductSearchResults       *GoogleCloudVisionV1p1beta1ProductSearchResults       `json:"productSearchResults,omitempty"`
	SafeSearchAnnotation       *GoogleCloudVisionV1p1beta1SafeSearchAnnotation       `json:"safeSearchAnnotation,omitempty"`
	TextAnnotations            []GoogleCloudVisionV1p1beta1EntityAnnotation          `json:"textAnnotations,omitempty"`
	WebDetection               *GoogleCloudVisionV1p1beta1WebDetection               `json:"webDetection,omitempty"`
}
