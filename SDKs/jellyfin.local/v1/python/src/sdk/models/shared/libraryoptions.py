from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import mediapathinfo
from . import typeoptions


@dataclass_json
@dataclass
class LibraryOptions:
    automatic_refresh_interval_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutomaticRefreshIntervalDays' }})
    disabled_local_metadata_readers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisabledLocalMetadataReaders' }})
    disabled_subtitle_fetchers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisabledSubtitleFetchers' }})
    enable_automatic_series_grouping: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableAutomaticSeriesGrouping' }})
    enable_chapter_image_extraction: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableChapterImageExtraction' }})
    enable_embedded_episode_infos: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableEmbeddedEpisodeInfos' }})
    enable_embedded_titles: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableEmbeddedTitles' }})
    enable_internet_providers: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableInternetProviders' }})
    enable_photos: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnablePhotos' }})
    enable_realtime_monitor: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableRealtimeMonitor' }})
    extract_chapter_images_during_library_scan: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExtractChapterImagesDuringLibraryScan' }})
    local_metadata_reader_order: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocalMetadataReaderOrder' }})
    metadata_country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetadataCountryCode' }})
    metadata_savers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetadataSavers' }})
    path_infos: Optional[List[mediapathinfo.MediaPathInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PathInfos' }})
    preferred_metadata_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreferredMetadataLanguage' }})
    require_perfect_subtitle_match: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequirePerfectSubtitleMatch' }})
    save_local_metadata: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SaveLocalMetadata' }})
    save_subtitles_with_media: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SaveSubtitlesWithMedia' }})
    season_zero_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SeasonZeroDisplayName' }})
    skip_subtitles_if_audio_track_matches: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SkipSubtitlesIfAudioTrackMatches' }})
    skip_subtitles_if_embedded_subtitles_present: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SkipSubtitlesIfEmbeddedSubtitlesPresent' }})
    subtitle_download_languages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubtitleDownloadLanguages' }})
    subtitle_fetcher_order: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubtitleFetcherOrder' }})
    type_options: Optional[List[typeoptions.TypeOptions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TypeOptions' }})
    
