package shared

type InvitationRoleEnum string

const (
	InvitationRoleEnumCourseRoleUnspecified InvitationRoleEnum = "COURSE_ROLE_UNSPECIFIED"
	InvitationRoleEnumStudent               InvitationRoleEnum = "STUDENT"
	InvitationRoleEnumTeacher               InvitationRoleEnum = "TEACHER"
	InvitationRoleEnumOwner                 InvitationRoleEnum = "OWNER"
)

// Invitation
// An invitation to join a course.
type Invitation struct {
	CourseID *string             `json:"courseId,omitempty"`
	ID       *string             `json:"id,omitempty"`
	Role     *InvitationRoleEnum `json:"role,omitempty"`
	UserID   *string             `json:"userId,omitempty"`
}
