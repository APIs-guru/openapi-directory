package shared

type YumRepository struct {
	BaseURL     *string  `json:"baseUrl"`
	DisplayName *string  `json:"displayName"`
	GpgKeys     []string `json:"gpgKeys"`
	ID          *string  `json:"id"`
}
