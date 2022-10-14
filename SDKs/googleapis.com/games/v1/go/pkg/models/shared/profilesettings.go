package shared

type ProfileSettingsFriendsListVisibilityEnum string

const (
	ProfileSettingsFriendsListVisibilityEnumFriendsListVisibilityUnspecified ProfileSettingsFriendsListVisibilityEnum = "FRIENDS_LIST_VISIBILITY_UNSPECIFIED"
	ProfileSettingsFriendsListVisibilityEnumVisible                          ProfileSettingsFriendsListVisibilityEnum = "VISIBLE"
	ProfileSettingsFriendsListVisibilityEnumRequestRequired                  ProfileSettingsFriendsListVisibilityEnum = "REQUEST_REQUIRED"
	ProfileSettingsFriendsListVisibilityEnumUnavailable                      ProfileSettingsFriendsListVisibilityEnum = "UNAVAILABLE"
)

type ProfileSettings struct {
	FriendsListVisibility *ProfileSettingsFriendsListVisibilityEnum `json:"friendsListVisibility,omitempty"`
	Kind                  *string                                   `json:"kind,omitempty"`
	ProfileVisible        *bool                                     `json:"profileVisible,omitempty"`
}
