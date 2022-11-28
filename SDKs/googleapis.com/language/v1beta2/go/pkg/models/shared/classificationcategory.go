package shared

// ClassificationCategory
// Represents a category returned from the text classifier.
type ClassificationCategory struct {
	Confidence *float32 `json:"confidence,omitempty"`
	Name       *string  `json:"name,omitempty"`
}
