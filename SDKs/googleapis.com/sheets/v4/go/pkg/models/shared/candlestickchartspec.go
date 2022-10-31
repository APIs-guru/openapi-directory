package shared



type CandlestickChartSpec struct {
    Data []CandlestickData `json:"data,omitempty"`
    Domain *CandlestickDomain `json:"domain,omitempty"`
    
}

