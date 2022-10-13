package shared

type PayPal struct {
	CancelURL   string `json:"cancel_url"`
	RedirectURL string `json:"redirect_url"`
	Usd         string `json:"usd"`
}
