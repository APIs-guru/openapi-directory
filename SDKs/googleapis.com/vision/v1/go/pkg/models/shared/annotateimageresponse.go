package shared

type AnnotateImageResponse struct {
	Context                    *ImageAnnotationContext     `json:"context"`
	CropHintsAnnotation        *CropHintsAnnotation        `json:"cropHintsAnnotation"`
	Error                      *Status                     `json:"error"`
	FaceAnnotations            []FaceAnnotation            `json:"faceAnnotations"`
	FullTextAnnotation         *TextAnnotation             `json:"fullTextAnnotation"`
	ImagePropertiesAnnotation  *ImageProperties            `json:"imagePropertiesAnnotation"`
	LabelAnnotations           []EntityAnnotation          `json:"labelAnnotations"`
	LandmarkAnnotations        []EntityAnnotation          `json:"landmarkAnnotations"`
	LocalizedObjectAnnotations []LocalizedObjectAnnotation `json:"localizedObjectAnnotations"`
	LogoAnnotations            []EntityAnnotation          `json:"logoAnnotations"`
	ProductSearchResults       *ProductSearchResults       `json:"productSearchResults"`
	SafeSearchAnnotation       *SafeSearchAnnotation       `json:"safeSearchAnnotation"`
	TextAnnotations            []EntityAnnotation          `json:"textAnnotations"`
	WebDetection               *WebDetection               `json:"webDetection"`
}
