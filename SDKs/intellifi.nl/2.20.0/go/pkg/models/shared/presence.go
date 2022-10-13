package shared

type Presence struct {
	ID          *string         `json:"id"`
	Item        *Item           `json:"item"`
	ItemID      *string         `json:"item_id"`
	ItemURL     *string         `json:"item_url"`
	Location    *Location       `json:"location"`
	LocationID  *string         `json:"location_id"`
	LocationURL *string         `json:"location_url"`
	Proximity   *ProximityEnum  `json:"proximity"`
	Technology  *TechnologyEnum `json:"technology"`
	TimeCreated *string         `json:"time_created"`
	TimeUpdated *string         `json:"time_updated"`
	URL         *string         `json:"url"`
}
