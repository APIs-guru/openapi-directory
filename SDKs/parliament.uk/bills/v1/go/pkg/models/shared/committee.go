package shared



type Committee struct {
    Category *string `json:"category,omitempty"`
    House *CommitteeHouseEnum `json:"house,omitempty"`
    ID *int32 `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

