package shared

type Application struct {
	DetailsURL  *string `json:"detailsUrl"`
	Name        *string `json:"name"`
	PackageName *string `json:"packageName"`
	Version     *string `json:"version"`
}
