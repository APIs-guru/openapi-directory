package shared




type UserInvitationStateEnum string

const (
    UserInvitationStateEnumStateUnspecified UserInvitationStateEnum = "STATE_UNSPECIFIED"
UserInvitationStateEnumNotYetSent UserInvitationStateEnum = "NOT_YET_SENT"
UserInvitationStateEnumInvited UserInvitationStateEnum = "INVITED"
UserInvitationStateEnumAccepted UserInvitationStateEnum = "ACCEPTED"
UserInvitationStateEnumDeclined UserInvitationStateEnum = "DECLINED"
)


type UserInvitation struct {
    MailsSentCount *string `json:"mailsSentCount,omitempty"`
    Name *string `json:"name,omitempty"`
    State *UserInvitationStateEnum `json:"state,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

