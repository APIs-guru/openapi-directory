package shared

type CollectionStatus struct {
	CollectionLevelIssuses []CollectionStatusItemLevelIssue    `json:"collectionLevelIssuses"`
	CreationDate           *string                             `json:"creationDate"`
	DestinationStatuses    []CollectionStatusDestinationStatus `json:"destinationStatuses"`
	ID                     *string                             `json:"id"`
	LastUpdateDate         *string                             `json:"lastUpdateDate"`
}
