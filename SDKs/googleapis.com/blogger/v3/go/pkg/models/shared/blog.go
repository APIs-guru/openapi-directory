package shared

type BlogLocale struct {
	Country  *string `json:"country"`
	Language *string `json:"language"`
	Variant  *string `json:"variant"`
}

type BlogPages struct {
	SelfLink   *string `json:"selfLink"`
	TotalItems *int32  `json:"totalItems"`
}

type BlogPosts struct {
	Items      []Post  `json:"items"`
	SelfLink   *string `json:"selfLink"`
	TotalItems *int32  `json:"totalItems"`
}

type BlogStatusEnum string

const (
	BlogStatusEnumLive    BlogStatusEnum = "LIVE"
	BlogStatusEnumDeleted BlogStatusEnum = "DELETED"
)

type Blog struct {
	CustomMetaData *string         `json:"customMetaData"`
	Description    *string         `json:"description"`
	ID             *string         `json:"id"`
	Kind           *string         `json:"kind"`
	Locale         *BlogLocale     `json:"locale"`
	Name           *string         `json:"name"`
	Pages          *BlogPages      `json:"pages"`
	Posts          *BlogPosts      `json:"posts"`
	Published      *string         `json:"published"`
	SelfLink       *string         `json:"selfLink"`
	Status         *BlogStatusEnum `json:"status"`
	Updated        *string         `json:"updated"`
	URL            *string         `json:"url"`
}
