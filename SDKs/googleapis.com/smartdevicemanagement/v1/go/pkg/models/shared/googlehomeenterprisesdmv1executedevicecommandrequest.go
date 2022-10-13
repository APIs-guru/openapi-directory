package shared

type GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest struct {
	Command *string                `json:"command"`
	Params  map[string]interface{} `json:"params"`
}
