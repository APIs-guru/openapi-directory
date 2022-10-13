package shared

type Context struct {
	ArticleAndParentComment *ArticleAndParentComment `json:"articleAndParentComment"`
	Entries                 []TextEntry              `json:"entries"`
}
