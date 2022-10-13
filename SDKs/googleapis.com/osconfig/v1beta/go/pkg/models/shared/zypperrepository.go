package shared

type ZypperRepository struct {
	BaseURL     *string  `json:"baseUrl"`
	DisplayName *string  `json:"displayName"`
	GpgKeys     []string `json:"gpgKeys"`
	ID          *string  `json:"id"`
}
