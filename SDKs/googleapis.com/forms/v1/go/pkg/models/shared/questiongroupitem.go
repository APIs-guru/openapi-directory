package shared

type QuestionGroupItem struct {
	Grid      *Grid      `json:"grid"`
	Image     *Image     `json:"image"`
	Questions []Question `json:"questions"`
}
