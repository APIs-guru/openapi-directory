package shared

type CurrentRole struct {
	District          *interface{}          `json:"district"`
	DivisionID        *string               `json:"division_id"`
	OrgClassification OrgClassificationEnum `json:"org_classification"`
	Title             string                `json:"title"`
}
