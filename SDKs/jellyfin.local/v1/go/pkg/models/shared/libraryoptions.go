package shared

type LibraryOptions struct {
	AutomaticRefreshIntervalDays            *int32          `json:"AutomaticRefreshIntervalDays"`
	DisabledLocalMetadataReaders            []string        `json:"DisabledLocalMetadataReaders"`
	DisabledSubtitleFetchers                []string        `json:"DisabledSubtitleFetchers"`
	EnableAutomaticSeriesGrouping           *bool           `json:"EnableAutomaticSeriesGrouping"`
	EnableChapterImageExtraction            *bool           `json:"EnableChapterImageExtraction"`
	EnableEmbeddedEpisodeInfos              *bool           `json:"EnableEmbeddedEpisodeInfos"`
	EnableEmbeddedTitles                    *bool           `json:"EnableEmbeddedTitles"`
	EnableInternetProviders                 *bool           `json:"EnableInternetProviders"`
	EnablePhotos                            *bool           `json:"EnablePhotos"`
	EnableRealtimeMonitor                   *bool           `json:"EnableRealtimeMonitor"`
	ExtractChapterImagesDuringLibraryScan   *bool           `json:"ExtractChapterImagesDuringLibraryScan"`
	LocalMetadataReaderOrder                []string        `json:"LocalMetadataReaderOrder"`
	MetadataCountryCode                     *string         `json:"MetadataCountryCode"`
	MetadataSavers                          []string        `json:"MetadataSavers"`
	PathInfos                               []MediaPathInfo `json:"PathInfos"`
	PreferredMetadataLanguage               *string         `json:"PreferredMetadataLanguage"`
	RequirePerfectSubtitleMatch             *bool           `json:"RequirePerfectSubtitleMatch"`
	SaveLocalMetadata                       *bool           `json:"SaveLocalMetadata"`
	SaveSubtitlesWithMedia                  *bool           `json:"SaveSubtitlesWithMedia"`
	SeasonZeroDisplayName                   *string         `json:"SeasonZeroDisplayName"`
	SkipSubtitlesIfAudioTrackMatches        *bool           `json:"SkipSubtitlesIfAudioTrackMatches"`
	SkipSubtitlesIfEmbeddedSubtitlesPresent *bool           `json:"SkipSubtitlesIfEmbeddedSubtitlesPresent"`
	SubtitleDownloadLanguages               []string        `json:"SubtitleDownloadLanguages"`
	SubtitleFetcherOrder                    []string        `json:"SubtitleFetcherOrder"`
	TypeOptions                             []TypeOptions   `json:"TypeOptions"`
}
