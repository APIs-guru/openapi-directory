package shared

type SandboxUser struct {
	Accounts          []SandboxBankAccount     `json:"accounts"`
	Cards             []SandboxCard            `json:"cards"`
	RetryCacheEntries []SandboxRetryCacheEntry `json:"retryCacheEntries"`
	UserID            *string                  `json:"userId"`
}
