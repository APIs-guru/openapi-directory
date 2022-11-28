package shared

// ItemInput
// A single item of the form. `kind` defines which kind of item it is.
type ItemInput struct {
	Description       *string                 `json:"description,omitempty"`
	ImageItem         *ImageItemInput         `json:"imageItem,omitempty"`
	ItemID            *string                 `json:"itemId,omitempty"`
	PageBreakItem     map[string]interface{}  `json:"pageBreakItem,omitempty"`
	QuestionGroupItem *QuestionGroupItemInput `json:"questionGroupItem,omitempty"`
	QuestionItem      *QuestionItemInput      `json:"questionItem,omitempty"`
	TextItem          map[string]interface{}  `json:"textItem,omitempty"`
	Title             *string                 `json:"title,omitempty"`
	VideoItem         *VideoItem              `json:"videoItem,omitempty"`
}

// Item
// A single item of the form. `kind` defines which kind of item it is.
type Item struct {
	Description       *string                `json:"description,omitempty"`
	ImageItem         *ImageItem             `json:"imageItem,omitempty"`
	ItemID            *string                `json:"itemId,omitempty"`
	PageBreakItem     map[string]interface{} `json:"pageBreakItem,omitempty"`
	QuestionGroupItem *QuestionGroupItem     `json:"questionGroupItem,omitempty"`
	QuestionItem      *QuestionItem          `json:"questionItem,omitempty"`
	TextItem          map[string]interface{} `json:"textItem,omitempty"`
	Title             *string                `json:"title,omitempty"`
	VideoItem         *VideoItem             `json:"videoItem,omitempty"`
}
