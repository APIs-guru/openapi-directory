package shared

type EmbeddedObject struct {
	Description               *string                 `json:"description"`
	EmbeddedDrawingProperties map[string]interface{}  `json:"embeddedDrawingProperties"`
	EmbeddedObjectBorder      *EmbeddedObjectBorder   `json:"embeddedObjectBorder"`
	ImageProperties           *ImageProperties        `json:"imageProperties"`
	LinkedContentReference    *LinkedContentReference `json:"linkedContentReference"`
	MarginBottom              *Dimension              `json:"marginBottom"`
	MarginLeft                *Dimension              `json:"marginLeft"`
	MarginRight               *Dimension              `json:"marginRight"`
	MarginTop                 *Dimension              `json:"marginTop"`
	Size                      *Size                   `json:"size"`
	Title                     *string                 `json:"title"`
}
