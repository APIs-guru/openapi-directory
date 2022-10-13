package shared

type OsPolicyResourceConfigStepOutcomeEnum string

const (
	OsPolicyResourceConfigStepOutcomeEnumOutcomeUnspecified OsPolicyResourceConfigStepOutcomeEnum = "OUTCOME_UNSPECIFIED"
	OsPolicyResourceConfigStepOutcomeEnumSucceeded          OsPolicyResourceConfigStepOutcomeEnum = "SUCCEEDED"
	OsPolicyResourceConfigStepOutcomeEnumFailed             OsPolicyResourceConfigStepOutcomeEnum = "FAILED"
)

type OsPolicyResourceConfigStepTypeEnum string

const (
	OsPolicyResourceConfigStepTypeEnumTypeUnspecified                  OsPolicyResourceConfigStepTypeEnum = "TYPE_UNSPECIFIED"
	OsPolicyResourceConfigStepTypeEnumValidation                       OsPolicyResourceConfigStepTypeEnum = "VALIDATION"
	OsPolicyResourceConfigStepTypeEnumDesiredStateCheck                OsPolicyResourceConfigStepTypeEnum = "DESIRED_STATE_CHECK"
	OsPolicyResourceConfigStepTypeEnumDesiredStateEnforcement          OsPolicyResourceConfigStepTypeEnum = "DESIRED_STATE_ENFORCEMENT"
	OsPolicyResourceConfigStepTypeEnumDesiredStateCheckPostEnforcement OsPolicyResourceConfigStepTypeEnum = "DESIRED_STATE_CHECK_POST_ENFORCEMENT"
)

type OsPolicyResourceConfigStep struct {
	ErrorMessage *string                                `json:"errorMessage"`
	Outcome      *OsPolicyResourceConfigStepOutcomeEnum `json:"outcome"`
	Type         *OsPolicyResourceConfigStepTypeEnum    `json:"type"`
}
