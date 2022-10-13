package shared

type ImageByNameInfo struct {
	Context    *string `json:"Context"`
	FileLength *int64  `json:"FileLength"`
	Format     *string `json:"Format"`
	Name       *string `json:"Name"`
	Theme      *string `json:"Theme"`
}
