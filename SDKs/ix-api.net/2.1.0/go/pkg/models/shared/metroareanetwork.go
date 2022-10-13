package shared

type MetroAreaNetwork struct {
	ID              string   `json:"id"`
	MetroArea       string   `json:"metro_area"`
	Name            string   `json:"name"`
	Pops            []string `json:"pops"`
	ServiceProvider string   `json:"service_provider"`
}
