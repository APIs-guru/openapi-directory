package shared

type GoogleCloudVisionV1p1beta1AnnotateImageResponse struct {
	Context                    *GoogleCloudVisionV1p1beta1ImageAnnotationContext     `json:"context"`
	CropHintsAnnotation        *GoogleCloudVisionV1p1beta1CropHintsAnnotation        `json:"cropHintsAnnotation"`
	Error                      *Status                                               `json:"error"`
	FaceAnnotations            []GoogleCloudVisionV1p1beta1FaceAnnotation            `json:"faceAnnotations"`
	FullTextAnnotation         *GoogleCloudVisionV1p1beta1TextAnnotation             `json:"fullTextAnnotation"`
	ImagePropertiesAnnotation  *GoogleCloudVisionV1p1beta1ImageProperties            `json:"imagePropertiesAnnotation"`
	LabelAnnotations           []GoogleCloudVisionV1p1beta1EntityAnnotation          `json:"labelAnnotations"`
	LandmarkAnnotations        []GoogleCloudVisionV1p1beta1EntityAnnotation          `json:"landmarkAnnotations"`
	LocalizedObjectAnnotations []GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation `json:"localizedObjectAnnotations"`
	LogoAnnotations            []GoogleCloudVisionV1p1beta1EntityAnnotation          `json:"logoAnnotations"`
	ProductSearchResults       *GoogleCloudVisionV1p1beta1ProductSearchResults       `json:"productSearchResults"`
	SafeSearchAnnotation       *GoogleCloudVisionV1p1beta1SafeSearchAnnotation       `json:"safeSearchAnnotation"`
	TextAnnotations            []GoogleCloudVisionV1p1beta1EntityAnnotation          `json:"textAnnotations"`
	WebDetection               *GoogleCloudVisionV1p1beta1WebDetection               `json:"webDetection"`
}
