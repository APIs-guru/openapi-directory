package shared

type GooglePrivacyDlpV2SummaryResultCodeEnum string

const (
	GooglePrivacyDlpV2SummaryResultCodeEnumTransformationResultCodeUnspecified GooglePrivacyDlpV2SummaryResultCodeEnum = "TRANSFORMATION_RESULT_CODE_UNSPECIFIED"
	GooglePrivacyDlpV2SummaryResultCodeEnumSuccess                             GooglePrivacyDlpV2SummaryResultCodeEnum = "SUCCESS"
	GooglePrivacyDlpV2SummaryResultCodeEnumError                               GooglePrivacyDlpV2SummaryResultCodeEnum = "ERROR"
)

// GooglePrivacyDlpV2SummaryResult
// A collection that informs the user the number of times a particular `TransformationResultCode` and error details occurred.
type GooglePrivacyDlpV2SummaryResult struct {
	Code    *GooglePrivacyDlpV2SummaryResultCodeEnum `json:"code,omitempty"`
	Count   *string                                  `json:"count,omitempty"`
	Details *string                                  `json:"details,omitempty"`
}
