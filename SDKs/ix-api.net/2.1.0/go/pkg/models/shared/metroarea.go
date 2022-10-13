package shared

type MetroArea struct {
	DisplayName       string   `json:"display_name"`
	Facilities        []string `json:"facilities"`
	IataCode          string   `json:"iata_code"`
	ID                string   `json:"id"`
	MetroAreaNetworks []string `json:"metro_area_networks"`
	UnLocode          string   `json:"un_locode"`
}
