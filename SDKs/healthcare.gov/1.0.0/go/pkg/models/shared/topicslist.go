package shared

type TopicsListTopics struct {
	Articleorder    [][]string
	Categories      [][]interface{}
	Content         *string
	Date            *string
	Excerpt         *string
	ID              *string
	Lang            *string
	Layout          *string
	MetaDescription *string
	MetaTitle       *string
	Order           *float64
	Path            *string
	Published       *bool
	Sort            *float64
	Tags            [][]string
	Title           *string
	URL             *string
}

type TopicsList struct {
	Topics []TopicsListTopics
}
