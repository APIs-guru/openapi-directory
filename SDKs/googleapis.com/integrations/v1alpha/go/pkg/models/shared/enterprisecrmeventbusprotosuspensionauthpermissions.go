package shared

// EnterpriseCrmEventbusProtoSuspensionAuthPermissions
// LINT.IfChange
type EnterpriseCrmEventbusProtoSuspensionAuthPermissions struct {
	GaiaIdentity *EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentity `json:"gaiaIdentity,omitempty"`
	GoogleGroup  *EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentity `json:"googleGroup,omitempty"`
	LoasRole     *string                                                          `json:"loasRole,omitempty"`
	MdbGroup     *string                                                          `json:"mdbGroup,omitempty"`
}
