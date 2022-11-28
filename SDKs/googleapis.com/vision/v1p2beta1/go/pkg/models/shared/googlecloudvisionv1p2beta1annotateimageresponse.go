package shared

// GoogleCloudVisionV1p2beta1AnnotateImageResponse
// Response to an image annotation request.
type GoogleCloudVisionV1p2beta1AnnotateImageResponse struct {
	Context                    *GoogleCloudVisionV1p2beta1ImageAnnotationContext     `json:"context,omitempty"`
	CropHintsAnnotation        *GoogleCloudVisionV1p2beta1CropHintsAnnotation        `json:"cropHintsAnnotation,omitempty"`
	Error                      *Status                                               `json:"error,omitempty"`
	FaceAnnotations            []GoogleCloudVisionV1p2beta1FaceAnnotation            `json:"faceAnnotations,omitempty"`
	FullTextAnnotation         *GoogleCloudVisionV1p2beta1TextAnnotation             `json:"fullTextAnnotation,omitempty"`
	ImagePropertiesAnnotation  *GoogleCloudVisionV1p2beta1ImageProperties            `json:"imagePropertiesAnnotation,omitempty"`
	LabelAnnotations           []GoogleCloudVisionV1p2beta1EntityAnnotation          `json:"labelAnnotations,omitempty"`
	LandmarkAnnotations        []GoogleCloudVisionV1p2beta1EntityAnnotation          `json:"landmarkAnnotations,omitempty"`
	LocalizedObjectAnnotations []GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation `json:"localizedObjectAnnotations,omitempty"`
	LogoAnnotations            []GoogleCloudVisionV1p2beta1EntityAnnotation          `json:"logoAnnotations,omitempty"`
	ProductSearchResults       *GoogleCloudVisionV1p2beta1ProductSearchResults       `json:"productSearchResults,omitempty"`
	SafeSearchAnnotation       *GoogleCloudVisionV1p2beta1SafeSearchAnnotation       `json:"safeSearchAnnotation,omitempty"`
	TextAnnotations            []GoogleCloudVisionV1p2beta1EntityAnnotation          `json:"textAnnotations,omitempty"`
	WebDetection               *GoogleCloudVisionV1p2beta1WebDetection               `json:"webDetection,omitempty"`
}
