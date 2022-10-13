package shared

type APIWarningCodeEnum string

const (
	APIWarningCodeEnumSqlapiWarningCodeUnspecified APIWarningCodeEnum = "SQL_API_WARNING_CODE_UNSPECIFIED"
	APIWarningCodeEnumRegionUnreachable            APIWarningCodeEnum = "REGION_UNREACHABLE"
	APIWarningCodeEnumMaxResultsExceedsLimit       APIWarningCodeEnum = "MAX_RESULTS_EXCEEDS_LIMIT"
)

type APIWarning struct {
	Code    *APIWarningCodeEnum `json:"code"`
	Message *string             `json:"message"`
	Region  *string             `json:"region"`
}
