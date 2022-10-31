package shared



type DomainSetupInfo struct {
    SupportsSslExternally bool `json:"supportsSslExternally"`
    WhoIsEmailAddresses []string `json:"whoIsEmailAddresses"`
    
}

