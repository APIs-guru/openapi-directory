package shared



type SpotSetCreate struct {
    CreatedBy *string `json:"created_by,omitempty"`
    ID *string `json:"id,omitempty"`
    Setid *int64 `json:"setid,omitempty"`
    SpotID *string `json:"spot_id,omitempty"`
    TimeCreated *string `json:"time_created,omitempty"`
    TimeUpdated *string `json:"time_updated,omitempty"`
    
}

