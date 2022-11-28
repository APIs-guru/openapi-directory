package shared

type BlogPage struct {
	Categories      [][]string
	Content         *string
	Date            *string
	Excerpt         *string
	ID              *string
	Lang            *string
	Layout          *string
	MetaDescription *string
	MetaTitle       *string
	Path            *string
	Published       *bool
	SeoKeywords     *string
	Sort            *float64
	Tags            [][]interface{}
	Title           *string
	Topics          [][]string
	URL             *string
}
