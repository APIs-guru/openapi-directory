package operations



type SetRecoveryCredentialPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type SetRecoveryCredentialRequestBodyCredentialsRecoveryQuestion struct {
    Answer *string `json:"answer,omitempty"`
    Question *string `json:"question,omitempty"`
    
}

type SetRecoveryCredentialRequestBodyCredentials struct {
    RecoveryQuestion *SetRecoveryCredentialRequestBodyCredentialsRecoveryQuestion `json:"recovery_question,omitempty"`
    
}

type SetRecoveryCredentialRequestBody struct {
    Credentials *SetRecoveryCredentialRequestBodyCredentials `json:"credentials,omitempty"`
    
}

type SetRecoveryCredentialRequest struct {
    PathParams SetRecoveryCredentialPathParams 
    Request *SetRecoveryCredentialRequestBody `request:"mediaType=application/json"`
    
}

type SetRecoveryCredentialResponse struct {
    ContentType string 
    StatusCode int64 
    
}

