package shared

type ArticlesListArticles struct {
	Bite            *string
	Categories      [][]string
	Content         *string
	Date            *string
	Excerpt         *string
	Featured        *bool
	ID              *string
	Lang            *string
	Layout          *string
	MetaDescription *string
	MetaTitle       *string
	Path            *string
	Published       *bool
	Related         [][]string
	SeoKeywords     *string
	Sort            *float64
	Tags            [][]interface{}
	Title           *string
	TitleShort      *string
	Topics          [][]string
	URL             *string
}

type ArticlesList struct {
	Articles []ArticlesListArticles
}
