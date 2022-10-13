package shared

type SandboxBankAccount struct {
	Beneficiaries     []SandboxBeneficiary      `json:"beneficiaries"`
	Info              *SandboxBankAccountInfo   `json:"info"`
	Party             *SandboxParty             `json:"party"`
	ScheduledPayments []SandboxScheduledPayment `json:"scheduledPayments"`
	StandingOrders    []SandboxStandingOrder    `json:"standingOrders"`
	Statements        []SandboxStatement        `json:"statements"`
	Transactions      []SandboxTransaction      `json:"transactions"`
}
