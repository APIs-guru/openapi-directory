package shared

type ArticleAndParentComment struct {
	Article       *TextEntry `json:"article,omitempty"`
	ParentComment *TextEntry `json:"parentComment,omitempty"`
}
