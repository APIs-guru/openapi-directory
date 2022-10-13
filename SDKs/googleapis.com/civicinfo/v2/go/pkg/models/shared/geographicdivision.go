package shared

type GeographicDivision struct {
	AlsoKnownAs   []string `json:"alsoKnownAs"`
	Name          *string  `json:"name"`
	OfficeIndices []int64  `json:"officeIndices"`
}
