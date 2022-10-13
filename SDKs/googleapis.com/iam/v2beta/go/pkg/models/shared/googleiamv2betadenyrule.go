package shared

type GoogleIamV2betaDenyRule struct {
	DenialCondition      *GoogleTypeExpr `json:"denialCondition"`
	DeniedPermissions    []string        `json:"deniedPermissions"`
	DeniedPrincipals     []string        `json:"deniedPrincipals"`
	ExceptionPermissions []string        `json:"exceptionPermissions"`
	ExceptionPrincipals  []string        `json:"exceptionPrincipals"`
}
