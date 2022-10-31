package shared



type LibraryOptions struct {
    AutomaticRefreshIntervalDays *int32 `json:"AutomaticRefreshIntervalDays,omitempty"`
    DisabledLocalMetadataReaders []string `json:"DisabledLocalMetadataReaders,omitempty"`
    DisabledSubtitleFetchers []string `json:"DisabledSubtitleFetchers,omitempty"`
    EnableAutomaticSeriesGrouping *bool `json:"EnableAutomaticSeriesGrouping,omitempty"`
    EnableChapterImageExtraction *bool `json:"EnableChapterImageExtraction,omitempty"`
    EnableEmbeddedEpisodeInfos *bool `json:"EnableEmbeddedEpisodeInfos,omitempty"`
    EnableEmbeddedTitles *bool `json:"EnableEmbeddedTitles,omitempty"`
    EnableInternetProviders *bool `json:"EnableInternetProviders,omitempty"`
    EnablePhotos *bool `json:"EnablePhotos,omitempty"`
    EnableRealtimeMonitor *bool `json:"EnableRealtimeMonitor,omitempty"`
    ExtractChapterImagesDuringLibraryScan *bool `json:"ExtractChapterImagesDuringLibraryScan,omitempty"`
    LocalMetadataReaderOrder []string `json:"LocalMetadataReaderOrder,omitempty"`
    MetadataCountryCode *string `json:"MetadataCountryCode,omitempty"`
    MetadataSavers []string `json:"MetadataSavers,omitempty"`
    PathInfos []MediaPathInfo `json:"PathInfos,omitempty"`
    PreferredMetadataLanguage *string `json:"PreferredMetadataLanguage,omitempty"`
    RequirePerfectSubtitleMatch *bool `json:"RequirePerfectSubtitleMatch,omitempty"`
    SaveLocalMetadata *bool `json:"SaveLocalMetadata,omitempty"`
    SaveSubtitlesWithMedia *bool `json:"SaveSubtitlesWithMedia,omitempty"`
    SeasonZeroDisplayName *string `json:"SeasonZeroDisplayName,omitempty"`
    SkipSubtitlesIfAudioTrackMatches *bool `json:"SkipSubtitlesIfAudioTrackMatches,omitempty"`
    SkipSubtitlesIfEmbeddedSubtitlesPresent *bool `json:"SkipSubtitlesIfEmbeddedSubtitlesPresent,omitempty"`
    SubtitleDownloadLanguages []string `json:"SubtitleDownloadLanguages,omitempty"`
    SubtitleFetcherOrder []string `json:"SubtitleFetcherOrder,omitempty"`
    TypeOptions []TypeOptions `json:"TypeOptions,omitempty"`
    
}

