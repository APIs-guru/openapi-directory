package shared



type PortfolioAbcModel struct {
    Abc12 *string `json:"abc12,omitempty"`
    Abc12Value *float64 `json:"abc12Value,omitempty"`
    Abc6 *string `json:"abc6,omitempty"`
    Abc6Value *float64 `json:"abc6Value,omitempty"`
    Abc9 *string `json:"abc9,omitempty"`
    Abc9Value *float64 `json:"abc9Value,omitempty"`
    ID *string `json:"id,omitempty"`
    ThresholdA *float64 `json:"thresholdA,omitempty"`
    ThresholdB *float64 `json:"thresholdB,omitempty"`
    ThresholdC *float64 `json:"thresholdC,omitempty"`
    
}

