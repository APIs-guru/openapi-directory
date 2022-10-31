package shared

type BlogLocale struct {
	Country  *string `json:"country,omitempty"`
	Language *string `json:"language,omitempty"`
	Variant  *string `json:"variant,omitempty"`
}

type BlogPages struct {
	SelfLink   *string `json:"selfLink,omitempty"`
	TotalItems *int32  `json:"totalItems,omitempty"`
}

type BlogPosts struct {
	Items      []Post  `json:"items,omitempty"`
	SelfLink   *string `json:"selfLink,omitempty"`
	TotalItems *int32  `json:"totalItems,omitempty"`
}

type BlogStatusEnum string

const (
	BlogStatusEnumLive    BlogStatusEnum = "LIVE"
	BlogStatusEnumDeleted BlogStatusEnum = "DELETED"
)

type Blog struct {
	CustomMetaData *string         `json:"customMetaData,omitempty"`
	Description    *string         `json:"description,omitempty"`
	ID             *string         `json:"id,omitempty"`
	Kind           *string         `json:"kind,omitempty"`
	Locale         *BlogLocale     `json:"locale,omitempty"`
	Name           *string         `json:"name,omitempty"`
	Pages          *BlogPages      `json:"pages,omitempty"`
	Posts          *BlogPosts      `json:"posts,omitempty"`
	Published      *string         `json:"published,omitempty"`
	SelfLink       *string         `json:"selfLink,omitempty"`
	Status         *BlogStatusEnum `json:"status,omitempty"`
	Updated        *string         `json:"updated,omitempty"`
	URL            *string         `json:"url,omitempty"`
}
