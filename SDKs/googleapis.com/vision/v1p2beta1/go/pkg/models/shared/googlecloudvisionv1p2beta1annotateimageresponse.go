package shared

type GoogleCloudVisionV1p2beta1AnnotateImageResponse struct {
	Context                    *GoogleCloudVisionV1p2beta1ImageAnnotationContext     `json:"context"`
	CropHintsAnnotation        *GoogleCloudVisionV1p2beta1CropHintsAnnotation        `json:"cropHintsAnnotation"`
	Error                      *Status                                               `json:"error"`
	FaceAnnotations            []GoogleCloudVisionV1p2beta1FaceAnnotation            `json:"faceAnnotations"`
	FullTextAnnotation         *GoogleCloudVisionV1p2beta1TextAnnotation             `json:"fullTextAnnotation"`
	ImagePropertiesAnnotation  *GoogleCloudVisionV1p2beta1ImageProperties            `json:"imagePropertiesAnnotation"`
	LabelAnnotations           []GoogleCloudVisionV1p2beta1EntityAnnotation          `json:"labelAnnotations"`
	LandmarkAnnotations        []GoogleCloudVisionV1p2beta1EntityAnnotation          `json:"landmarkAnnotations"`
	LocalizedObjectAnnotations []GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation `json:"localizedObjectAnnotations"`
	LogoAnnotations            []GoogleCloudVisionV1p2beta1EntityAnnotation          `json:"logoAnnotations"`
	ProductSearchResults       *GoogleCloudVisionV1p2beta1ProductSearchResults       `json:"productSearchResults"`
	SafeSearchAnnotation       *GoogleCloudVisionV1p2beta1SafeSearchAnnotation       `json:"safeSearchAnnotation"`
	TextAnnotations            []GoogleCloudVisionV1p2beta1EntityAnnotation          `json:"textAnnotations"`
	WebDetection               *GoogleCloudVisionV1p2beta1WebDetection               `json:"webDetection"`
}
