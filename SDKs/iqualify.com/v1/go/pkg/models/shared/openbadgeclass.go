package shared

type OpenBadgeClassCriteria struct {
	Narrative *string `json:"narrative"`
}

type OpenBadgeClass struct {
	Criteria    *OpenBadgeClassCriteria `json:"criteria"`
	Description *string                 `json:"description"`
	ID          *string                 `json:"id"`
	Image       *string                 `json:"image"`
	Issuer      *string                 `json:"issuer"`
	Name        *string                 `json:"name"`
	Type        *string                 `json:"type"`
}
