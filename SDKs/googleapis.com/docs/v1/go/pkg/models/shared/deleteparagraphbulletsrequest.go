package shared

// DeleteParagraphBulletsRequest
// Deletes bullets from all of the paragraphs that overlap with the given range. The nesting level of each paragraph will be visually preserved by adding indent to the start of the corresponding paragraph.
type DeleteParagraphBulletsRequest struct {
	Range *Range `json:"range,omitempty"`
}
