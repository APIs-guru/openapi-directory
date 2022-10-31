package shared



type SandboxBankAccount struct {
    Beneficiaries []SandboxBeneficiary `json:"beneficiaries,omitempty"`
    Info *SandboxBankAccountInfo `json:"info,omitempty"`
    Party *SandboxParty `json:"party,omitempty"`
    ScheduledPayments []SandboxScheduledPayment `json:"scheduledPayments,omitempty"`
    StandingOrders []SandboxStandingOrder `json:"standingOrders,omitempty"`
    Statements []SandboxStatement `json:"statements,omitempty"`
    Transactions []SandboxTransaction `json:"transactions,omitempty"`
    
}

