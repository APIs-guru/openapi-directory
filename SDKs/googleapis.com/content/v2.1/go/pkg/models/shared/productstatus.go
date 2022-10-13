package shared

type ProductStatus struct {
	CreationDate         *string                          `json:"creationDate"`
	DestinationStatuses  []ProductStatusDestinationStatus `json:"destinationStatuses"`
	GoogleExpirationDate *string                          `json:"googleExpirationDate"`
	ItemLevelIssues      []ProductStatusItemLevelIssue    `json:"itemLevelIssues"`
	Kind                 *string                          `json:"kind"`
	LastUpdateDate       *string                          `json:"lastUpdateDate"`
	Link                 *string                          `json:"link"`
	ProductID            *string                          `json:"productId"`
	Title                *string                          `json:"title"`
}
