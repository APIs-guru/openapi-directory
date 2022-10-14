package shared

type ProductStatus struct {
	CreationDate         *string                          `json:"creationDate,omitempty"`
	DataQualityIssues    []ProductStatusDataQualityIssue  `json:"dataQualityIssues,omitempty"`
	DestinationStatuses  []ProductStatusDestinationStatus `json:"destinationStatuses,omitempty"`
	GoogleExpirationDate *string                          `json:"googleExpirationDate,omitempty"`
	ItemLevelIssues      []ProductStatusItemLevelIssue    `json:"itemLevelIssues,omitempty"`
	Kind                 *string                          `json:"kind,omitempty"`
	LastUpdateDate       *string                          `json:"lastUpdateDate,omitempty"`
	Link                 *string                          `json:"link,omitempty"`
	Product              *Product                         `json:"product,omitempty"`
	ProductID            *string                          `json:"productId,omitempty"`
	Title                *string                          `json:"title,omitempty"`
}
