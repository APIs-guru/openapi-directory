package shared

type ListUserDataMappingsResponse struct {
	NextPageToken    *string           `json:"nextPageToken"`
	UserDataMappings []UserDataMapping `json:"userDataMappings"`
}
