package shared

type UserInvitationStateEnum string

const (
	UserInvitationStateEnumStateUnspecified UserInvitationStateEnum = "STATE_UNSPECIFIED"
	UserInvitationStateEnumNotYetSent       UserInvitationStateEnum = "NOT_YET_SENT"
	UserInvitationStateEnumInvited          UserInvitationStateEnum = "INVITED"
	UserInvitationStateEnumAccepted         UserInvitationStateEnum = "ACCEPTED"
	UserInvitationStateEnumDeclined         UserInvitationStateEnum = "DECLINED"
)

type UserInvitation struct {
	MailsSentCount *string                  `json:"mailsSentCount"`
	Name           *string                  `json:"name"`
	State          *UserInvitationStateEnum `json:"state"`
	UpdateTime     *string                  `json:"updateTime"`
}
