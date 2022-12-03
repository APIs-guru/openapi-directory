package shared

type ProductV1ProductLineEnum string

const (
	ProductV1ProductLineEnumGeneralLiability     ProductV1ProductLineEnum = "general_liability"
	ProductV1ProductLineEnumWorkersCompensation  ProductV1ProductLineEnum = "workers_compensation"
	ProductV1ProductLineEnumBusinessOwnersPolicy ProductV1ProductLineEnum = "business_owners_policy"
)

// ProductV1
// A [product](https://www.heraldapi.com/docs/products) refers to a specific type of insurance policy provided by an institution.
type ProductV1 struct {
	ID            string                   `json:"id"`
	InstitutionID string                   `json:"institution_id"`
	Name          string                   `json:"name"`
	ProductLine   ProductV1ProductLineEnum `json:"product_line"`
}
