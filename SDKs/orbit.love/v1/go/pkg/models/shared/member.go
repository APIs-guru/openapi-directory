package shared

type Member struct {
	Bio             *string `json:"bio,omitempty"`
	Birthday        *string `json:"birthday,omitempty"`
	Company         *string `json:"company,omitempty"`
	Devto           *string `json:"devto,omitempty"`
	Email           *string `json:"email,omitempty"`
	Github          *string `json:"github,omitempty"`
	Linkedin        *string `json:"linkedin,omitempty"`
	Location        *string `json:"location,omitempty"`
	Name            *string `json:"name,omitempty"`
	Pronouns        *string `json:"pronouns,omitempty"`
	ShippingAddress *string `json:"shipping_address,omitempty"`
	Slug            *string `json:"slug,omitempty"`
	TagList         *string `json:"tag_list,omitempty"`
	Tags            *string `json:"tags,omitempty"`
	TagsToAdd       *string `json:"tags_to_add,omitempty"`
	Teammate        *bool   `json:"teammate,omitempty"`
	Title           *string `json:"title,omitempty"`
	Tshirt          *string `json:"tshirt,omitempty"`
	Twitter         *string `json:"twitter,omitempty"`
	URL             *string `json:"url,omitempty"`
}
