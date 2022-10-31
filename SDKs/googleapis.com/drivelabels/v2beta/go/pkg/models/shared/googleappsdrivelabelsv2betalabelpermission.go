package shared




type GoogleAppsDriveLabelsV2betaLabelPermissionRoleEnum string

const (
    GoogleAppsDriveLabelsV2betaLabelPermissionRoleEnumLabelRoleUnspecified GoogleAppsDriveLabelsV2betaLabelPermissionRoleEnum = "LABEL_ROLE_UNSPECIFIED"
GoogleAppsDriveLabelsV2betaLabelPermissionRoleEnumReader GoogleAppsDriveLabelsV2betaLabelPermissionRoleEnum = "READER"
GoogleAppsDriveLabelsV2betaLabelPermissionRoleEnumApplier GoogleAppsDriveLabelsV2betaLabelPermissionRoleEnum = "APPLIER"
GoogleAppsDriveLabelsV2betaLabelPermissionRoleEnumOrganizer GoogleAppsDriveLabelsV2betaLabelPermissionRoleEnum = "ORGANIZER"
GoogleAppsDriveLabelsV2betaLabelPermissionRoleEnumEditor GoogleAppsDriveLabelsV2betaLabelPermissionRoleEnum = "EDITOR"
)


type GoogleAppsDriveLabelsV2betaLabelPermission struct {
    Audience *string `json:"audience,omitempty"`
    Email *string `json:"email,omitempty"`
    Group *string `json:"group,omitempty"`
    Name *string `json:"name,omitempty"`
    Person *string `json:"person,omitempty"`
    Role *GoogleAppsDriveLabelsV2betaLabelPermissionRoleEnum `json:"role,omitempty"`
    
}

