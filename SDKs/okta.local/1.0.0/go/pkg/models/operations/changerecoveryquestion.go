package operations

type ChangeRecoveryQuestionPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type ChangeRecoveryQuestionRequestBodyPassword struct {
	Value *string `json:"value,omitempty"`
}

type ChangeRecoveryQuestionRequestBodyRecoveryQuestion struct {
	Answer   *string `json:"answer,omitempty"`
	Question *string `json:"question,omitempty"`
}

type ChangeRecoveryQuestionRequestBody struct {
	Password         *ChangeRecoveryQuestionRequestBodyPassword         `json:"password,omitempty"`
	RecoveryQuestion *ChangeRecoveryQuestionRequestBodyRecoveryQuestion `json:"recovery_question,omitempty"`
}

type ChangeRecoveryQuestionRequest struct {
	PathParams ChangeRecoveryQuestionPathParams
	Request    *ChangeRecoveryQuestionRequestBody `request:"mediaType=application/json"`
}

type ChangeRecoveryQuestionResponse struct {
	ContentType string
	StatusCode  int64
}
