package shared

type Context struct {
	ArticleAndParentComment *ArticleAndParentComment `json:"articleAndParentComment,omitempty"`
	Entries                 []TextEntry              `json:"entries,omitempty"`
}
