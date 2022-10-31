package shared




type AnnouncementAssigneeModeEnum string

const (
    AnnouncementAssigneeModeEnumAssigneeModeUnspecified AnnouncementAssigneeModeEnum = "ASSIGNEE_MODE_UNSPECIFIED"
AnnouncementAssigneeModeEnumAllStudents AnnouncementAssigneeModeEnum = "ALL_STUDENTS"
AnnouncementAssigneeModeEnumIndividualStudents AnnouncementAssigneeModeEnum = "INDIVIDUAL_STUDENTS"
)



type AnnouncementStateEnum string

const (
    AnnouncementStateEnumAnnouncementStateUnspecified AnnouncementStateEnum = "ANNOUNCEMENT_STATE_UNSPECIFIED"
AnnouncementStateEnumPublished AnnouncementStateEnum = "PUBLISHED"
AnnouncementStateEnumDraft AnnouncementStateEnum = "DRAFT"
AnnouncementStateEnumDeleted AnnouncementStateEnum = "DELETED"
)


type Announcement struct {
    AlternateLink *string `json:"alternateLink,omitempty"`
    AssigneeMode *AnnouncementAssigneeModeEnum `json:"assigneeMode,omitempty"`
    CourseID *string `json:"courseId,omitempty"`
    CreationTime *string `json:"creationTime,omitempty"`
    CreatorUserID *string `json:"creatorUserId,omitempty"`
    ID *string `json:"id,omitempty"`
    IndividualStudentsOptions *IndividualStudentsOptions `json:"individualStudentsOptions,omitempty"`
    Materials []Material `json:"materials,omitempty"`
    ScheduledTime *string `json:"scheduledTime,omitempty"`
    State *AnnouncementStateEnum `json:"state,omitempty"`
    Text *string `json:"text,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

