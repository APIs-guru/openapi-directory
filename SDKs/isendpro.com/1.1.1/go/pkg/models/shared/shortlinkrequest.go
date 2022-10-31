package shared

type ShortlinkRequest struct {
	Keyid     string `json:"keyid"`
	Shortlink string `json:"shortlink"`
}
