package shared

type Item struct {
	Description       *string                `json:"description"`
	ImageItem         *ImageItem             `json:"imageItem"`
	ItemID            *string                `json:"itemId"`
	PageBreakItem     map[string]interface{} `json:"pageBreakItem"`
	QuestionGroupItem *QuestionGroupItem     `json:"questionGroupItem"`
	QuestionItem      *QuestionItem          `json:"questionItem"`
	TextItem          map[string]interface{} `json:"textItem"`
	Title             *string                `json:"title"`
	VideoItem         *VideoItem             `json:"videoItem"`
}
