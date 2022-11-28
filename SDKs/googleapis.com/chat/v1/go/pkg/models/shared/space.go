package shared

type SpaceSpaceThreadingStateEnum string

const (
	SpaceSpaceThreadingStateEnumSpaceThreadingStateUnspecified SpaceSpaceThreadingStateEnum = "SPACE_THREADING_STATE_UNSPECIFIED"
	SpaceSpaceThreadingStateEnumThreadedMessages               SpaceSpaceThreadingStateEnum = "THREADED_MESSAGES"
	SpaceSpaceThreadingStateEnumGroupedMessages                SpaceSpaceThreadingStateEnum = "GROUPED_MESSAGES"
	SpaceSpaceThreadingStateEnumUnthreadedMessages             SpaceSpaceThreadingStateEnum = "UNTHREADED_MESSAGES"
)

type SpaceTypeEnum string

const (
	SpaceTypeEnumTypeUnspecified SpaceTypeEnum = "TYPE_UNSPECIFIED"
	SpaceTypeEnumRoom            SpaceTypeEnum = "ROOM"
	SpaceTypeEnumDm              SpaceTypeEnum = "DM"
)

// SpaceInput
// A space in Google Chat. Spaces are conversations between two or more users or 1:1 messages between a user and a Chat app.
type SpaceInput struct {
	DisplayName     *string       `json:"displayName,omitempty"`
	Name            *string       `json:"name,omitempty"`
	SingleUserBotDm *bool         `json:"singleUserBotDm,omitempty"`
	SpaceDetails    *SpaceDetails `json:"spaceDetails,omitempty"`
}

// Space
// A space in Google Chat. Spaces are conversations between two or more users or 1:1 messages between a user and a Chat app.
type Space struct {
	DisplayName         *string                       `json:"displayName,omitempty"`
	Name                *string                       `json:"name,omitempty"`
	SingleUserBotDm     *bool                         `json:"singleUserBotDm,omitempty"`
	SpaceDetails        *SpaceDetails                 `json:"spaceDetails,omitempty"`
	SpaceThreadingState *SpaceSpaceThreadingStateEnum `json:"spaceThreadingState,omitempty"`
	Threaded            *bool                         `json:"threaded,omitempty"`
	Type                *SpaceTypeEnum                `json:"type,omitempty"`
}
