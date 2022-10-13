package shared

type API struct {
	Operation *string `json:"operation"`
	Protocol  *string `json:"protocol"`
	Service   *string `json:"service"`
	Version   *string `json:"version"`
}
