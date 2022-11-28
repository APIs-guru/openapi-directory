package shared

// PayPal
// An object representing the staging of a Payment via PayPal.
type PayPal struct {
	CancelURL   string `json:"cancel_url"`
	RedirectURL string `json:"redirect_url"`
	Usd         string `json:"usd"`
}
