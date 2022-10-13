package shared

type Metadata struct {
	CreateTime     *string                `json:"createTime"`
	DisplayOptions *ResultDisplayMetadata `json:"displayOptions"`
	Fields         []NamedProperty        `json:"fields"`
	MimeType       *string                `json:"mimeType"`
	ObjectType     *string                `json:"objectType"`
	Owner          *Person                `json:"owner"`
	Source         *Source                `json:"source"`
	ThumbnailURL   *string                `json:"thumbnailUrl"`
	UpdateTime     *string                `json:"updateTime"`
}
