package shared



type ListInsertionOrdersResponse struct {
    InsertionOrders []InsertionOrder `json:"insertionOrders,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

