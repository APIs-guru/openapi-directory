package shared

type SiteContactContactTypeEnum string

const (
	SiteContactContactTypeEnumSalesPerson SiteContactContactTypeEnum = "SALES_PERSON"
	SiteContactContactTypeEnumTrafficker  SiteContactContactTypeEnum = "TRAFFICKER"
)

type SiteContact struct {
	Address     *string                     `json:"address,omitempty"`
	ContactType *SiteContactContactTypeEnum `json:"contactType,omitempty"`
	Email       *string                     `json:"email,omitempty"`
	FirstName   *string                     `json:"firstName,omitempty"`
	ID          *string                     `json:"id,omitempty"`
	LastName    *string                     `json:"lastName,omitempty"`
	Phone       *string                     `json:"phone,omitempty"`
	Title       *string                     `json:"title,omitempty"`
}
