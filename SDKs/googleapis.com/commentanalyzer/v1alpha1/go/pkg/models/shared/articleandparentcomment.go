package shared

type ArticleAndParentComment struct {
	Article       *TextEntry `json:"article"`
	ParentComment *TextEntry `json:"parentComment"`
}
