package shared

type GooglePrivacyDlpV2StoredInfoTypeVersionStateEnum string

const (
	GooglePrivacyDlpV2StoredInfoTypeVersionStateEnumStoredInfoTypeStateUnspecified GooglePrivacyDlpV2StoredInfoTypeVersionStateEnum = "STORED_INFO_TYPE_STATE_UNSPECIFIED"
	GooglePrivacyDlpV2StoredInfoTypeVersionStateEnumPending                        GooglePrivacyDlpV2StoredInfoTypeVersionStateEnum = "PENDING"
	GooglePrivacyDlpV2StoredInfoTypeVersionStateEnumReady                          GooglePrivacyDlpV2StoredInfoTypeVersionStateEnum = "READY"
	GooglePrivacyDlpV2StoredInfoTypeVersionStateEnumFailed                         GooglePrivacyDlpV2StoredInfoTypeVersionStateEnum = "FAILED"
	GooglePrivacyDlpV2StoredInfoTypeVersionStateEnumInvalid                        GooglePrivacyDlpV2StoredInfoTypeVersionStateEnum = "INVALID"
)

type GooglePrivacyDlpV2StoredInfoTypeVersion struct {
	Config     *GooglePrivacyDlpV2StoredInfoTypeConfig           `json:"config"`
	CreateTime *string                                           `json:"createTime"`
	Errors     []GooglePrivacyDlpV2Error                         `json:"errors"`
	State      *GooglePrivacyDlpV2StoredInfoTypeVersionStateEnum `json:"state"`
	Stats      *GooglePrivacyDlpV2StoredInfoTypeStats            `json:"stats"`
}
