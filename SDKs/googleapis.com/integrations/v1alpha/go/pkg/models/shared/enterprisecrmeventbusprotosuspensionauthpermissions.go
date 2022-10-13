package shared

type EnterpriseCrmEventbusProtoSuspensionAuthPermissions struct {
	GaiaIdentity *EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentity `json:"gaiaIdentity"`
	GoogleGroup  *EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentity `json:"googleGroup"`
	LoasRole     *string                                                          `json:"loasRole"`
	MdbGroup     *string                                                          `json:"mdbGroup"`
}
