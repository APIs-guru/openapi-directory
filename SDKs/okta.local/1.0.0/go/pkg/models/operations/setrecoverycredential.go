package operations

type SetRecoveryCredentialPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type SetRecoveryCredentialRequestBodyCredentialsRecoveryQuestion struct {
	Answer   *string `json:"answer"`
	Question *string `json:"question"`
}

type SetRecoveryCredentialRequestBodyCredentials struct {
	RecoveryQuestion *SetRecoveryCredentialRequestBodyCredentialsRecoveryQuestion `json:"recovery_question"`
}

type SetRecoveryCredentialRequestBody struct {
	Credentials *SetRecoveryCredentialRequestBodyCredentials `json:"credentials"`
}

type SetRecoveryCredentialRequest struct {
	PathParams SetRecoveryCredentialPathParams
	Request    *SetRecoveryCredentialRequestBody `request:"mediaType=application/json"`
}

type SetRecoveryCredentialResponse struct {
	ContentType string
	StatusCode  int64
}
