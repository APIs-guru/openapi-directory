package shared

type GoogleAPIServiceusageV1ServiceStateEnum string

const (
	GoogleAPIServiceusageV1ServiceStateEnumStateUnspecified GoogleAPIServiceusageV1ServiceStateEnum = "STATE_UNSPECIFIED"
	GoogleAPIServiceusageV1ServiceStateEnumDisabled         GoogleAPIServiceusageV1ServiceStateEnum = "DISABLED"
	GoogleAPIServiceusageV1ServiceStateEnumEnabled          GoogleAPIServiceusageV1ServiceStateEnum = "ENABLED"
)

type GoogleAPIServiceusageV1Service struct {
	Config *GoogleAPIServiceusageV1ServiceConfig    `json:"config"`
	Name   *string                                  `json:"name"`
	Parent *string                                  `json:"parent"`
	State  *GoogleAPIServiceusageV1ServiceStateEnum `json:"state"`
}
