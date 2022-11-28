package shared

// ProductStatus
// The status of a product, that is, information about a product computed asynchronously.
type ProductStatus struct {
	CreationDate         *string                          `json:"creationDate,omitempty"`
	DestinationStatuses  []ProductStatusDestinationStatus `json:"destinationStatuses,omitempty"`
	GoogleExpirationDate *string                          `json:"googleExpirationDate,omitempty"`
	ItemLevelIssues      []ProductStatusItemLevelIssue    `json:"itemLevelIssues,omitempty"`
	Kind                 *string                          `json:"kind,omitempty"`
	LastUpdateDate       *string                          `json:"lastUpdateDate,omitempty"`
	Link                 *string                          `json:"link,omitempty"`
	ProductID            *string                          `json:"productId,omitempty"`
	Title                *string                          `json:"title,omitempty"`
}
