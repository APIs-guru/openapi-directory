package shared

type OpenBadgeClassCriteria struct {
	Narrative *string `json:"narrative,omitempty"`
}

type OpenBadgeClass struct {
	Criteria    *OpenBadgeClassCriteria `json:"criteria,omitempty"`
	Description *string                 `json:"description,omitempty"`
	ID          *string                 `json:"id,omitempty"`
	Image       *string                 `json:"image,omitempty"`
	Issuer      *string                 `json:"issuer,omitempty"`
	Name        *string                 `json:"name,omitempty"`
	Type        *string                 `json:"type,omitempty"`
}
