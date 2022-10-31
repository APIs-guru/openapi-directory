package shared



type CollectionStatus struct {
    CollectionLevelIssuses []CollectionStatusItemLevelIssue `json:"collectionLevelIssuses,omitempty"`
    CreationDate *string `json:"creationDate,omitempty"`
    DestinationStatuses []CollectionStatusDestinationStatus `json:"destinationStatuses,omitempty"`
    ID *string `json:"id,omitempty"`
    LastUpdateDate *string `json:"lastUpdateDate,omitempty"`
    
}

