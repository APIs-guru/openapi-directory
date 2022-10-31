package shared



type FigiResult struct {
    CompositeFigi *string `json:"compositeFIGI,omitempty"`
    ExchCode *string `json:"exchCode,omitempty"`
    Figi *string `json:"figi,omitempty"`
    MarketSector *string `json:"marketSector,omitempty"`
    Metadata *string `json:"metadata,omitempty"`
    Name *string `json:"name,omitempty"`
    SecurityDescription *string `json:"securityDescription,omitempty"`
    SecurityType *string `json:"securityType,omitempty"`
    SecurityType2 *string `json:"securityType2,omitempty"`
    ShareClassFigi *string `json:"shareClassFIGI,omitempty"`
    Ticker *string `json:"ticker,omitempty"`
    
}

