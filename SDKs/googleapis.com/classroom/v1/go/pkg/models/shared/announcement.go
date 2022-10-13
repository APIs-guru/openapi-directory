package shared

type AnnouncementAssigneeModeEnum string

const (
	AnnouncementAssigneeModeEnumAssigneeModeUnspecified AnnouncementAssigneeModeEnum = "ASSIGNEE_MODE_UNSPECIFIED"
	AnnouncementAssigneeModeEnumAllStudents             AnnouncementAssigneeModeEnum = "ALL_STUDENTS"
	AnnouncementAssigneeModeEnumIndividualStudents      AnnouncementAssigneeModeEnum = "INDIVIDUAL_STUDENTS"
)

type AnnouncementStateEnum string

const (
	AnnouncementStateEnumAnnouncementStateUnspecified AnnouncementStateEnum = "ANNOUNCEMENT_STATE_UNSPECIFIED"
	AnnouncementStateEnumPublished                    AnnouncementStateEnum = "PUBLISHED"
	AnnouncementStateEnumDraft                        AnnouncementStateEnum = "DRAFT"
	AnnouncementStateEnumDeleted                      AnnouncementStateEnum = "DELETED"
)

type Announcement struct {
	AlternateLink             *string                       `json:"alternateLink"`
	AssigneeMode              *AnnouncementAssigneeModeEnum `json:"assigneeMode"`
	CourseID                  *string                       `json:"courseId"`
	CreationTime              *string                       `json:"creationTime"`
	CreatorUserID             *string                       `json:"creatorUserId"`
	ID                        *string                       `json:"id"`
	IndividualStudentsOptions *IndividualStudentsOptions    `json:"individualStudentsOptions"`
	Materials                 []Material                    `json:"materials"`
	ScheduledTime             *string                       `json:"scheduledTime"`
	State                     *AnnouncementStateEnum        `json:"state"`
	Text                      *string                       `json:"text"`
	UpdateTime                *string                       `json:"updateTime"`
}
