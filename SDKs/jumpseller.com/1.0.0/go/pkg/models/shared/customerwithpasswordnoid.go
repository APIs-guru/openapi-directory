package shared

type CustomerWithPasswordNoID struct {
	Customer *CustomerFieldsWithPasswordNoID `json:"customer"`
}
