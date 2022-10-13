package shared

type FigiResult struct {
	CompositeFigi       *string `json:"compositeFIGI"`
	ExchCode            *string `json:"exchCode"`
	Figi                *string `json:"figi"`
	MarketSector        *string `json:"marketSector"`
	Metadata            *string `json:"metadata"`
	Name                *string `json:"name"`
	SecurityDescription *string `json:"securityDescription"`
	SecurityType        *string `json:"securityType"`
	SecurityType2       *string `json:"securityType2"`
	ShareClassFigi      *string `json:"shareClassFIGI"`
	Ticker              *string `json:"ticker"`
}
