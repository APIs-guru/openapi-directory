package shared

type EmbeddedObject struct {
	Description               *string                 `json:"description,omitempty"`
	EmbeddedDrawingProperties map[string]interface{}  `json:"embeddedDrawingProperties,omitempty"`
	EmbeddedObjectBorder      *EmbeddedObjectBorder   `json:"embeddedObjectBorder,omitempty"`
	ImageProperties           *ImageProperties        `json:"imageProperties,omitempty"`
	LinkedContentReference    *LinkedContentReference `json:"linkedContentReference,omitempty"`
	MarginBottom              *Dimension              `json:"marginBottom,omitempty"`
	MarginLeft                *Dimension              `json:"marginLeft,omitempty"`
	MarginRight               *Dimension              `json:"marginRight,omitempty"`
	MarginTop                 *Dimension              `json:"marginTop,omitempty"`
	Size                      *Size                   `json:"size,omitempty"`
	Title                     *string                 `json:"title,omitempty"`
}
