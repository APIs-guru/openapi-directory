package shared

type TagValue struct {
	CreateTime     *string `json:"createTime"`
	Description    *string `json:"description"`
	Etag           *string `json:"etag"`
	Name           *string `json:"name"`
	NamespacedName *string `json:"namespacedName"`
	Parent         *string `json:"parent"`
	ShortName      *string `json:"shortName"`
	UpdateTime     *string `json:"updateTime"`
}
