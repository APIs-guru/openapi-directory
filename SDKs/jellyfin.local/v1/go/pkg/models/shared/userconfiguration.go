package shared

type UserConfiguration struct {
	AudioLanguagePreference    *string                   `json:"AudioLanguagePreference"`
	DisplayCollectionsView     *bool                     `json:"DisplayCollectionsView"`
	DisplayMissingEpisodes     *bool                     `json:"DisplayMissingEpisodes"`
	EnableLocalPassword        *bool                     `json:"EnableLocalPassword"`
	EnableNextEpisodeAutoPlay  *bool                     `json:"EnableNextEpisodeAutoPlay"`
	GroupedFolders             []string                  `json:"GroupedFolders"`
	HidePlayedInLatest         *bool                     `json:"HidePlayedInLatest"`
	LatestItemsExcludes        []string                  `json:"LatestItemsExcludes"`
	MyMediaExcludes            []string                  `json:"MyMediaExcludes"`
	OrderedViews               []string                  `json:"OrderedViews"`
	PlayDefaultAudioTrack      *bool                     `json:"PlayDefaultAudioTrack"`
	RememberAudioSelections    *bool                     `json:"RememberAudioSelections"`
	RememberSubtitleSelections *bool                     `json:"RememberSubtitleSelections"`
	SubtitleLanguagePreference *string                   `json:"SubtitleLanguagePreference"`
	SubtitleMode               *SubtitlePlaybackModeEnum `json:"SubtitleMode"`
}
