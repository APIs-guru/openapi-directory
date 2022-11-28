package shared

type BlogListBlog struct {
	Categories      [][]string
	Content         *string
	Date            *string
	Lang            *string
	Layout          *string
	MetaDescription *string
	MetaTitle       *string
	Published       *bool
	SeoKeywords     *string
	Sort            *float64
	Tags            [][]interface{}
	Title           *string
	Topics          [][]string
	URL             *string
}

type BlogList struct {
	Blog [][]BlogListBlog
}
