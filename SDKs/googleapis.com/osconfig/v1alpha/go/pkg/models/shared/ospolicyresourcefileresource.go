package shared

type OsPolicyResourceFileResourceStateEnum string

const (
	OsPolicyResourceFileResourceStateEnumDesiredStateUnspecified OsPolicyResourceFileResourceStateEnum = "DESIRED_STATE_UNSPECIFIED"
	OsPolicyResourceFileResourceStateEnumPresent                 OsPolicyResourceFileResourceStateEnum = "PRESENT"
	OsPolicyResourceFileResourceStateEnumAbsent                  OsPolicyResourceFileResourceStateEnum = "ABSENT"
	OsPolicyResourceFileResourceStateEnumContentsMatch           OsPolicyResourceFileResourceStateEnum = "CONTENTS_MATCH"
)

type OsPolicyResourceFileResource struct {
	Content     *string                                `json:"content"`
	File        *OsPolicyResourceFile                  `json:"file"`
	Path        *string                                `json:"path"`
	Permissions *string                                `json:"permissions"`
	State       *OsPolicyResourceFileResourceStateEnum `json:"state"`
}
