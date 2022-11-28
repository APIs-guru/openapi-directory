package shared

// CollectionStatusItemLevelIssue
// Issue associated with the collection.
type CollectionStatusItemLevelIssue struct {
	ApplicableCountries []string `json:"applicableCountries,omitempty"`
	AttributeName       *string  `json:"attributeName,omitempty"`
	Code                *string  `json:"code,omitempty"`
	Description         *string  `json:"description,omitempty"`
	Destination         *string  `json:"destination,omitempty"`
	Detail              *string  `json:"detail,omitempty"`
	Documentation       *string  `json:"documentation,omitempty"`
	Resolution          *string  `json:"resolution,omitempty"`
	Servability         *string  `json:"servability,omitempty"`
}
