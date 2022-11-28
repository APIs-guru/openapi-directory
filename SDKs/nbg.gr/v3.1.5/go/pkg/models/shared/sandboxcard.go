package shared

// SandboxCard
// Sandbox card
type SandboxCard struct {
	Info         *SandboxCardInfo     `json:"info,omitempty"`
	Party        *SandboxParty        `json:"party,omitempty"`
	Statements   []SandboxStatement   `json:"statements,omitempty"`
	Transactions []SandboxTransaction `json:"transactions,omitempty"`
}
