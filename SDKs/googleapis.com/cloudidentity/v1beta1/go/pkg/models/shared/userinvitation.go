package shared

type UserInvitationStateEnum string

const (
	UserInvitationStateEnumStateUnspecified UserInvitationStateEnum = "STATE_UNSPECIFIED"
	UserInvitationStateEnumNotYetSent       UserInvitationStateEnum = "NOT_YET_SENT"
	UserInvitationStateEnumInvited          UserInvitationStateEnum = "INVITED"
	UserInvitationStateEnumAccepted         UserInvitationStateEnum = "ACCEPTED"
	UserInvitationStateEnumDeclined         UserInvitationStateEnum = "DECLINED"
)

// UserInvitation
// The `UserInvitation` resource represents an email that can be sent to an unmanaged user account inviting them to join the customer's Google Workspace or Cloud Identity account. An unmanaged account shares an email address domain with the Google Workspace or Cloud Identity account but is not managed by it yet. If the user accepts the `UserInvitation`, the user account will become managed.
type UserInvitation struct {
	MailsSentCount *string                  `json:"mailsSentCount,omitempty"`
	Name           *string                  `json:"name,omitempty"`
	State          *UserInvitationStateEnum `json:"state,omitempty"`
	UpdateTime     *string                  `json:"updateTime,omitempty"`
}
