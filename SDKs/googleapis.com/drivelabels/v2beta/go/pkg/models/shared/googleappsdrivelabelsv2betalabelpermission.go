package shared

type GoogleAppsDriveLabelsV2betaLabelPermissionRoleEnum string

const (
	GoogleAppsDriveLabelsV2betaLabelPermissionRoleEnumLabelRoleUnspecified GoogleAppsDriveLabelsV2betaLabelPermissionRoleEnum = "LABEL_ROLE_UNSPECIFIED"
	GoogleAppsDriveLabelsV2betaLabelPermissionRoleEnumReader               GoogleAppsDriveLabelsV2betaLabelPermissionRoleEnum = "READER"
	GoogleAppsDriveLabelsV2betaLabelPermissionRoleEnumApplier              GoogleAppsDriveLabelsV2betaLabelPermissionRoleEnum = "APPLIER"
	GoogleAppsDriveLabelsV2betaLabelPermissionRoleEnumOrganizer            GoogleAppsDriveLabelsV2betaLabelPermissionRoleEnum = "ORGANIZER"
	GoogleAppsDriveLabelsV2betaLabelPermissionRoleEnumEditor               GoogleAppsDriveLabelsV2betaLabelPermissionRoleEnum = "EDITOR"
)

type GoogleAppsDriveLabelsV2betaLabelPermission struct {
	Audience *string                                             `json:"audience"`
	Email    *string                                             `json:"email"`
	Group    *string                                             `json:"group"`
	Name     *string                                             `json:"name"`
	Person   *string                                             `json:"person"`
	Role     *GoogleAppsDriveLabelsV2betaLabelPermissionRoleEnum `json:"role"`
}
