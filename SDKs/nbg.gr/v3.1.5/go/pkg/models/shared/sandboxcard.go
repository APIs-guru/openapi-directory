package shared

type SandboxCard struct {
	Info         *SandboxCardInfo     `json:"info"`
	Party        *SandboxParty        `json:"party"`
	Statements   []SandboxStatement   `json:"statements"`
	Transactions []SandboxTransaction `json:"transactions"`
}
