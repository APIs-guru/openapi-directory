package shared

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
