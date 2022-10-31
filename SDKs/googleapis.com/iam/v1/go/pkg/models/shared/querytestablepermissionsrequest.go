package shared



type QueryTestablePermissionsRequest struct {
    FullResourceName *string `json:"fullResourceName,omitempty"`
    PageSize *int32 `json:"pageSize,omitempty"`
    PageToken *string `json:"pageToken,omitempty"`
    
}

