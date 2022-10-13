package shared

type QuestionItem struct {
	Image    *Image    `json:"image"`
	Question *Question `json:"question"`
}
