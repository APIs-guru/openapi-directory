package shared

type QuestionsListQuestions struct {
	Categories []string
	Content    *string
	Date       *string
	Excerpt    *string
	ID         *string
	Lang       *string
	Path       *string
	Published  *bool
	Sort       *float64
	Tags       []string
	Title      *string
	URL        *string
}

type QuestionsList struct {
	Questions []QuestionsListQuestions
}
