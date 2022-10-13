package shared

type Member struct {
	Bio             *string `json:"bio"`
	Birthday        *string `json:"birthday"`
	Company         *string `json:"company"`
	Devto           *string `json:"devto"`
	Email           *string `json:"email"`
	Github          *string `json:"github"`
	Linkedin        *string `json:"linkedin"`
	Location        *string `json:"location"`
	Name            *string `json:"name"`
	Pronouns        *string `json:"pronouns"`
	ShippingAddress *string `json:"shipping_address"`
	Slug            *string `json:"slug"`
	TagList         *string `json:"tag_list"`
	Tags            *string `json:"tags"`
	TagsToAdd       *string `json:"tags_to_add"`
	Teammate        *bool   `json:"teammate"`
	Title           *string `json:"title"`
	Tshirt          *string `json:"tshirt"`
	Twitter         *string `json:"twitter"`
	URL             *string `json:"url"`
}
