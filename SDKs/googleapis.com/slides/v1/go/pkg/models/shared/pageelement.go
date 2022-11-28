package shared

// PageElement
// A visual element rendered on a page.
type PageElement struct {
	Description  *string          `json:"description,omitempty"`
	ElementGroup *Group           `json:"elementGroup,omitempty"`
	Image        *Image           `json:"image,omitempty"`
	Line         *Line            `json:"line,omitempty"`
	ObjectID     *string          `json:"objectId,omitempty"`
	Shape        *Shape           `json:"shape,omitempty"`
	SheetsChart  *SheetsChart     `json:"sheetsChart,omitempty"`
	Size         *Size            `json:"size,omitempty"`
	Table        *Table           `json:"table,omitempty"`
	Title        *string          `json:"title,omitempty"`
	Transform    *AffineTransform `json:"transform,omitempty"`
	Video        *Video           `json:"video,omitempty"`
	WordArt      *WordArt         `json:"wordArt,omitempty"`
}
