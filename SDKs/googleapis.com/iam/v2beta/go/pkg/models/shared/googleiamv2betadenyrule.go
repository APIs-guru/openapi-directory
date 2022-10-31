package shared



type GoogleIamV2betaDenyRule struct {
    DenialCondition *GoogleTypeExpr `json:"denialCondition,omitempty"`
    DeniedPermissions []string `json:"deniedPermissions,omitempty"`
    DeniedPrincipals []string `json:"deniedPrincipals,omitempty"`
    ExceptionPermissions []string `json:"exceptionPermissions,omitempty"`
    ExceptionPrincipals []string `json:"exceptionPrincipals,omitempty"`
    
}

