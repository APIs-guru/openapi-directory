package shared

// GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest
// Request message for SmartDeviceManagementService.ExecuteDeviceCommand
type GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest struct {
	Command *string                `json:"command,omitempty"`
	Params  map[string]interface{} `json:"params,omitempty"`
}
