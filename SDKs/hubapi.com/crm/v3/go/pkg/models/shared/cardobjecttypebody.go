package shared

type CardObjectTypeBodyNameEnum string

const (
	CardObjectTypeBodyNameEnumContacts  CardObjectTypeBodyNameEnum = "contacts"
	CardObjectTypeBodyNameEnumDeals     CardObjectTypeBodyNameEnum = "deals"
	CardObjectTypeBodyNameEnumCompanies CardObjectTypeBodyNameEnum = "companies"
	CardObjectTypeBodyNameEnumTickets   CardObjectTypeBodyNameEnum = "tickets"
)

type CardObjectTypeBody struct {
	Name             CardObjectTypeBodyNameEnum `json:"name"`
	PropertiesToSend []string                   `json:"propertiesToSend"`
}
