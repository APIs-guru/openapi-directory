package shared



type Certificate struct {
    AutoRenew string `json:"autoRenew"`
    Ca string `json:"ca"`
    CaRef string `json:"caRef"`
    Chain string `json:"chain"`
    Domain string `json:"domain"`
    From string `json:"from"`
    ID string `json:"id"`
    PrivateKey string `json:"privateKey"`
    SelfSigned string `json:"selfSigned"`
    Subject string `json:"subject"`
    To string `json:"to"`
    Valid string `json:"valid"`
    
}

