package shared

type InvitationRoleEnum string

const (
	InvitationRoleEnumCourseRoleUnspecified InvitationRoleEnum = "COURSE_ROLE_UNSPECIFIED"
	InvitationRoleEnumStudent               InvitationRoleEnum = "STUDENT"
	InvitationRoleEnumTeacher               InvitationRoleEnum = "TEACHER"
	InvitationRoleEnumOwner                 InvitationRoleEnum = "OWNER"
)

type Invitation struct {
	CourseID *string             `json:"courseId"`
	ID       *string             `json:"id"`
	Role     *InvitationRoleEnum `json:"role"`
	UserID   *string             `json:"userId"`
}
