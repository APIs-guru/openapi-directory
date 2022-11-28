package shared

// Product
// Product data.
type Product struct {
	Attributes          *Attributes         `json:"attributes,omitempty"`
	ContentLanguage     *string             `json:"contentLanguage,omitempty"`
	DestinationStatuses []DestinationStatus `json:"destinationStatuses,omitempty"`
	Issues              []Issue             `json:"issues,omitempty"`
	Name                *string             `json:"name,omitempty"`
	Parent              *string             `json:"parent,omitempty"`
	ProductID           *string             `json:"productId,omitempty"`
	TargetCountry       *string             `json:"targetCountry,omitempty"`
}
