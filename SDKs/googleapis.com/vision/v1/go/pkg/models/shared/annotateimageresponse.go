package shared

type AnnotateImageResponse struct {
	Context                    *ImageAnnotationContext     `json:"context,omitempty"`
	CropHintsAnnotation        *CropHintsAnnotation        `json:"cropHintsAnnotation,omitempty"`
	Error                      *Status                     `json:"error,omitempty"`
	FaceAnnotations            []FaceAnnotation            `json:"faceAnnotations,omitempty"`
	FullTextAnnotation         *TextAnnotation             `json:"fullTextAnnotation,omitempty"`
	ImagePropertiesAnnotation  *ImageProperties            `json:"imagePropertiesAnnotation,omitempty"`
	LabelAnnotations           []EntityAnnotation          `json:"labelAnnotations,omitempty"`
	LandmarkAnnotations        []EntityAnnotation          `json:"landmarkAnnotations,omitempty"`
	LocalizedObjectAnnotations []LocalizedObjectAnnotation `json:"localizedObjectAnnotations,omitempty"`
	LogoAnnotations            []EntityAnnotation          `json:"logoAnnotations,omitempty"`
	ProductSearchResults       *ProductSearchResults       `json:"productSearchResults,omitempty"`
	SafeSearchAnnotation       *SafeSearchAnnotation       `json:"safeSearchAnnotation,omitempty"`
	TextAnnotations            []EntityAnnotation          `json:"textAnnotations,omitempty"`
	WebDetection               *WebDetection               `json:"webDetection,omitempty"`
}
