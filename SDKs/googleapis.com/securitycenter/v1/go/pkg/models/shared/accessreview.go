package shared

type AccessReview struct {
	Group       *string `json:"group"`
	Name        *string `json:"name"`
	Ns          *string `json:"ns"`
	Resource    *string `json:"resource"`
	Subresource *string `json:"subresource"`
	Verb        *string `json:"verb"`
	Version     *string `json:"version"`
}
