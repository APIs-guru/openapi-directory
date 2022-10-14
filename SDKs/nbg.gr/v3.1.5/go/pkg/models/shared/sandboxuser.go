package shared

type SandboxUser struct {
	Accounts          []SandboxBankAccount     `json:"accounts,omitempty"`
	Cards             []SandboxCard            `json:"cards,omitempty"`
	RetryCacheEntries []SandboxRetryCacheEntry `json:"retryCacheEntries,omitempty"`
	UserID            *string                  `json:"userId,omitempty"`
}
