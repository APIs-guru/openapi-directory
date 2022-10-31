package shared



type UserBlogs struct {
    SelfLink *string `json:"selfLink,omitempty"`
    
}

type UserLocale struct {
    Country *string `json:"country,omitempty"`
    Language *string `json:"language,omitempty"`
    Variant *string `json:"variant,omitempty"`
    
}

type User struct {
    About *string `json:"about,omitempty"`
    Blogs *UserBlogs `json:"blogs,omitempty"`
    Created *string `json:"created,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    ID *string `json:"id,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Locale *UserLocale `json:"locale,omitempty"`
    SelfLink *string `json:"selfLink,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

