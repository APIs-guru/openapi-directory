package shared

type OsPolicyResourceFileResourceStateEnum string

const (
	OsPolicyResourceFileResourceStateEnumDesiredStateUnspecified OsPolicyResourceFileResourceStateEnum = "DESIRED_STATE_UNSPECIFIED"
	OsPolicyResourceFileResourceStateEnumPresent                 OsPolicyResourceFileResourceStateEnum = "PRESENT"
	OsPolicyResourceFileResourceStateEnumAbsent                  OsPolicyResourceFileResourceStateEnum = "ABSENT"
	OsPolicyResourceFileResourceStateEnumContentsMatch           OsPolicyResourceFileResourceStateEnum = "CONTENTS_MATCH"
)

type OsPolicyResourceFileResource struct {
	Content     *string                                `json:"content,omitempty"`
	File        *OsPolicyResourceFile                  `json:"file,omitempty"`
	Path        *string                                `json:"path,omitempty"`
	Permissions *string                                `json:"permissions,omitempty"`
	State       *OsPolicyResourceFileResourceStateEnum `json:"state,omitempty"`
}
