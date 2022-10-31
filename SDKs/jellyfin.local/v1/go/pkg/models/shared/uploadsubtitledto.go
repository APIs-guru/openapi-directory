package shared

type UploadSubtitleDto struct {
	Data     string `json:"Data"`
	Format   string `json:"Format"`
	IsForced bool   `json:"IsForced"`
	Language string `json:"Language"`
}
