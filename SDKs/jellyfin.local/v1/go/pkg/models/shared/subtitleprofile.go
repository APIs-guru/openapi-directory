package shared

type SubtitleProfile struct {
	Container *string                     `json:"Container"`
	DidlMode  *string                     `json:"DidlMode"`
	Format    *string                     `json:"Format"`
	Language  *string                     `json:"Language"`
	Method    *SubtitleDeliveryMethodEnum `json:"Method"`
}
