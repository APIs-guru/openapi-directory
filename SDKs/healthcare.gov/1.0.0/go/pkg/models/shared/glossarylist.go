package shared

type GlossaryListGlossary struct {
	Categories []string
	Content    *string
	Date       *string
	Excerpt    *string
	ID         *string
	Lang       *string
	Layout     *string
	Path       *string
	Published  *bool
	Sort       *float64
	Tags       []string
	Title      *string
	URL        *string
}

type GlossaryList struct {
	Glossary []GlossaryListGlossary
}
