package shared

type UserBlogs struct {
	SelfLink *string `json:"selfLink"`
}

type UserLocale struct {
	Country  *string `json:"country"`
	Language *string `json:"language"`
	Variant  *string `json:"variant"`
}

type User struct {
	About       *string     `json:"about"`
	Blogs       *UserBlogs  `json:"blogs"`
	Created     *string     `json:"created"`
	DisplayName *string     `json:"displayName"`
	ID          *string     `json:"id"`
	Kind        *string     `json:"kind"`
	Locale      *UserLocale `json:"locale"`
	SelfLink    *string     `json:"selfLink"`
	URL         *string     `json:"url"`
}
