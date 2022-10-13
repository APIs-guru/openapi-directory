package shared

type SiteContactContactTypeEnum string

const (
	SiteContactContactTypeEnumSalesPerson SiteContactContactTypeEnum = "SALES_PERSON"
	SiteContactContactTypeEnumTrafficker  SiteContactContactTypeEnum = "TRAFFICKER"
)

type SiteContact struct {
	Address     *string                     `json:"address"`
	ContactType *SiteContactContactTypeEnum `json:"contactType"`
	Email       *string                     `json:"email"`
	FirstName   *string                     `json:"firstName"`
	ID          *string                     `json:"id"`
	LastName    *string                     `json:"lastName"`
	Phone       *string                     `json:"phone"`
	Title       *string                     `json:"title"`
}
