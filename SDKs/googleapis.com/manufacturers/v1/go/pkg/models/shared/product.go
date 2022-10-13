package shared

type Product struct {
	Attributes          *Attributes         `json:"attributes"`
	ContentLanguage     *string             `json:"contentLanguage"`
	DestinationStatuses []DestinationStatus `json:"destinationStatuses"`
	Issues              []Issue             `json:"issues"`
	Name                *string             `json:"name"`
	Parent              *string             `json:"parent"`
	ProductID           *string             `json:"productId"`
	TargetCountry       *string             `json:"targetCountry"`
}
