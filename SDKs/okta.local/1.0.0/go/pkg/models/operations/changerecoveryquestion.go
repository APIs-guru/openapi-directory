package operations

type ChangeRecoveryQuestionPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type ChangeRecoveryQuestionRequestBodyPassword struct {
	Value *string `json:"value"`
}

type ChangeRecoveryQuestionRequestBodyRecoveryQuestion struct {
	Answer   *string `json:"answer"`
	Question *string `json:"question"`
}

type ChangeRecoveryQuestionRequestBody struct {
	Password         *ChangeRecoveryQuestionRequestBodyPassword         `json:"password"`
	RecoveryQuestion *ChangeRecoveryQuestionRequestBodyRecoveryQuestion `json:"recovery_question"`
}

type ChangeRecoveryQuestionRequest struct {
	PathParams ChangeRecoveryQuestionPathParams
	Request    *ChangeRecoveryQuestionRequestBody `request:"mediaType=application/json"`
}

type ChangeRecoveryQuestionResponse struct {
	ContentType string
	StatusCode  int64
}
