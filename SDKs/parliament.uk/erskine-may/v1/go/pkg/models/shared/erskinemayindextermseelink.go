package shared

type ErskineMayIndexTermSeeLink struct {
	IndexTermID *int32  `json:"indexTermId,omitempty"`
	SeeType     *string `json:"seeType,omitempty"`
	SeeValue    *string `json:"seeValue,omitempty"`
}
