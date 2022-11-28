package shared

// TextContent
// The general text content. The text must reside in a compatible shape (e.g. text box or rectangle) or a table cell in a page.
type TextContent struct {
	Lists        map[string]List `json:"lists,omitempty"`
	TextElements []TextElement   `json:"textElements,omitempty"`
}
