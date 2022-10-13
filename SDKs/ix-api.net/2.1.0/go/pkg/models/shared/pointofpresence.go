package shared

type PointOfPresence struct {
	Devices          []string `json:"devices"`
	Facility         string   `json:"facility"`
	ID               string   `json:"id"`
	MetroAreaNetwork string   `json:"metro_area_network"`
	Name             string   `json:"name"`
}
