package shared

type ModifyAnnouncementAssigneesRequestAssigneeModeEnum string

const (
	ModifyAnnouncementAssigneesRequestAssigneeModeEnumAssigneeModeUnspecified ModifyAnnouncementAssigneesRequestAssigneeModeEnum = "ASSIGNEE_MODE_UNSPECIFIED"
	ModifyAnnouncementAssigneesRequestAssigneeModeEnumAllStudents             ModifyAnnouncementAssigneesRequestAssigneeModeEnum = "ALL_STUDENTS"
	ModifyAnnouncementAssigneesRequestAssigneeModeEnumIndividualStudents      ModifyAnnouncementAssigneesRequestAssigneeModeEnum = "INDIVIDUAL_STUDENTS"
)

type ModifyAnnouncementAssigneesRequest struct {
	AssigneeMode                    *ModifyAnnouncementAssigneesRequestAssigneeModeEnum `json:"assigneeMode,omitempty"`
	ModifyIndividualStudentsOptions *ModifyIndividualStudentsOptions                    `json:"modifyIndividualStudentsOptions,omitempty"`
}
