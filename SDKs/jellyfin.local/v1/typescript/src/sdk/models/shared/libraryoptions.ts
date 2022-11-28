import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MediaPathInfo } from "./mediapathinfo";
import { TypeOptions } from "./typeoptions";



export class LibraryOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutomaticRefreshIntervalDays" })
  automaticRefreshIntervalDays?: number;

  @SpeakeasyMetadata({ data: "json, name=DisabledLocalMetadataReaders" })
  disabledLocalMetadataReaders?: string[];

  @SpeakeasyMetadata({ data: "json, name=DisabledSubtitleFetchers" })
  disabledSubtitleFetchers?: string[];

  @SpeakeasyMetadata({ data: "json, name=EnableAutomaticSeriesGrouping" })
  enableAutomaticSeriesGrouping?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableChapterImageExtraction" })
  enableChapterImageExtraction?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableEmbeddedEpisodeInfos" })
  enableEmbeddedEpisodeInfos?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableEmbeddedTitles" })
  enableEmbeddedTitles?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableInternetProviders" })
  enableInternetProviders?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnablePhotos" })
  enablePhotos?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableRealtimeMonitor" })
  enableRealtimeMonitor?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ExtractChapterImagesDuringLibraryScan" })
  extractChapterImagesDuringLibraryScan?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LocalMetadataReaderOrder" })
  localMetadataReaderOrder?: string[];

  @SpeakeasyMetadata({ data: "json, name=MetadataCountryCode" })
  metadataCountryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=MetadataSavers" })
  metadataSavers?: string[];

  @SpeakeasyMetadata({ data: "json, name=PathInfos", elemType: MediaPathInfo })
  pathInfos?: MediaPathInfo[];

  @SpeakeasyMetadata({ data: "json, name=PreferredMetadataLanguage" })
  preferredMetadataLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=RequirePerfectSubtitleMatch" })
  requirePerfectSubtitleMatch?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SaveLocalMetadata" })
  saveLocalMetadata?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SaveSubtitlesWithMedia" })
  saveSubtitlesWithMedia?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SeasonZeroDisplayName" })
  seasonZeroDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=SkipSubtitlesIfAudioTrackMatches" })
  skipSubtitlesIfAudioTrackMatches?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SkipSubtitlesIfEmbeddedSubtitlesPresent" })
  skipSubtitlesIfEmbeddedSubtitlesPresent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SubtitleDownloadLanguages" })
  subtitleDownloadLanguages?: string[];

  @SpeakeasyMetadata({ data: "json, name=SubtitleFetcherOrder" })
  subtitleFetcherOrder?: string[];

  @SpeakeasyMetadata({ data: "json, name=TypeOptions", elemType: TypeOptions })
  typeOptions?: TypeOptions[];
}
