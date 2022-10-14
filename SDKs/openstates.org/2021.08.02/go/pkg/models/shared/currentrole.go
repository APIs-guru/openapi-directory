package shared

type CurrentRole struct {
	District          *interface{}          `json:"district,omitempty"`
	DivisionID        *string               `json:"division_id,omitempty"`
	OrgClassification OrgClassificationEnum `json:"org_classification"`
	Title             string                `json:"title"`
}
