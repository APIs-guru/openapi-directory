package shared

type UserConfiguration struct {
	AudioLanguagePreference    *string                   `json:"AudioLanguagePreference,omitempty"`
	DisplayCollectionsView     *bool                     `json:"DisplayCollectionsView,omitempty"`
	DisplayMissingEpisodes     *bool                     `json:"DisplayMissingEpisodes,omitempty"`
	EnableLocalPassword        *bool                     `json:"EnableLocalPassword,omitempty"`
	EnableNextEpisodeAutoPlay  *bool                     `json:"EnableNextEpisodeAutoPlay,omitempty"`
	GroupedFolders             []string                  `json:"GroupedFolders,omitempty"`
	HidePlayedInLatest         *bool                     `json:"HidePlayedInLatest,omitempty"`
	LatestItemsExcludes        []string                  `json:"LatestItemsExcludes,omitempty"`
	MyMediaExcludes            []string                  `json:"MyMediaExcludes,omitempty"`
	OrderedViews               []string                  `json:"OrderedViews,omitempty"`
	PlayDefaultAudioTrack      *bool                     `json:"PlayDefaultAudioTrack,omitempty"`
	RememberAudioSelections    *bool                     `json:"RememberAudioSelections,omitempty"`
	RememberSubtitleSelections *bool                     `json:"RememberSubtitleSelections,omitempty"`
	SubtitleLanguagePreference *string                   `json:"SubtitleLanguagePreference,omitempty"`
	SubtitleMode               *SubtitlePlaybackModeEnum `json:"SubtitleMode,omitempty"`
}
