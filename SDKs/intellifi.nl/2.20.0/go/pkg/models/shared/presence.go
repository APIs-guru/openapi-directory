package shared



type Presence struct {
    ID *string `json:"id,omitempty"`
    Item *Item `json:"item,omitempty"`
    ItemID *string `json:"item_id,omitempty"`
    ItemURL *string `json:"item_url,omitempty"`
    Location *Location `json:"location,omitempty"`
    LocationID *string `json:"location_id,omitempty"`
    LocationURL *string `json:"location_url,omitempty"`
    Proximity *ProximityEnum `json:"proximity,omitempty"`
    Technology *TechnologyEnum `json:"technology,omitempty"`
    TimeCreated *string `json:"time_created,omitempty"`
    TimeUpdated *string `json:"time_updated,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

