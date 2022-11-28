package shared

// Account
// Identifies an account and how to log into it.
type Account struct {
	GoogleAuto map[string]interface{} `json:"googleAuto,omitempty"`
}
