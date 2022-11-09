import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MediaPathInfo } from "./mediapathinfo";
import { TypeOptions } from "./typeoptions";


export class LibraryOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutomaticRefreshIntervalDays" })
  automaticRefreshIntervalDays?: number;

  @Metadata({ data: "json, name=DisabledLocalMetadataReaders" })
  disabledLocalMetadataReaders?: string[];

  @Metadata({ data: "json, name=DisabledSubtitleFetchers" })
  disabledSubtitleFetchers?: string[];

  @Metadata({ data: "json, name=EnableAutomaticSeriesGrouping" })
  enableAutomaticSeriesGrouping?: boolean;

  @Metadata({ data: "json, name=EnableChapterImageExtraction" })
  enableChapterImageExtraction?: boolean;

  @Metadata({ data: "json, name=EnableEmbeddedEpisodeInfos" })
  enableEmbeddedEpisodeInfos?: boolean;

  @Metadata({ data: "json, name=EnableEmbeddedTitles" })
  enableEmbeddedTitles?: boolean;

  @Metadata({ data: "json, name=EnableInternetProviders" })
  enableInternetProviders?: boolean;

  @Metadata({ data: "json, name=EnablePhotos" })
  enablePhotos?: boolean;

  @Metadata({ data: "json, name=EnableRealtimeMonitor" })
  enableRealtimeMonitor?: boolean;

  @Metadata({ data: "json, name=ExtractChapterImagesDuringLibraryScan" })
  extractChapterImagesDuringLibraryScan?: boolean;

  @Metadata({ data: "json, name=LocalMetadataReaderOrder" })
  localMetadataReaderOrder?: string[];

  @Metadata({ data: "json, name=MetadataCountryCode" })
  metadataCountryCode?: string;

  @Metadata({ data: "json, name=MetadataSavers" })
  metadataSavers?: string[];

  @Metadata({ data: "json, name=PathInfos", elemType: shared.MediaPathInfo })
  pathInfos?: MediaPathInfo[];

  @Metadata({ data: "json, name=PreferredMetadataLanguage" })
  preferredMetadataLanguage?: string;

  @Metadata({ data: "json, name=RequirePerfectSubtitleMatch" })
  requirePerfectSubtitleMatch?: boolean;

  @Metadata({ data: "json, name=SaveLocalMetadata" })
  saveLocalMetadata?: boolean;

  @Metadata({ data: "json, name=SaveSubtitlesWithMedia" })
  saveSubtitlesWithMedia?: boolean;

  @Metadata({ data: "json, name=SeasonZeroDisplayName" })
  seasonZeroDisplayName?: string;

  @Metadata({ data: "json, name=SkipSubtitlesIfAudioTrackMatches" })
  skipSubtitlesIfAudioTrackMatches?: boolean;

  @Metadata({ data: "json, name=SkipSubtitlesIfEmbeddedSubtitlesPresent" })
  skipSubtitlesIfEmbeddedSubtitlesPresent?: boolean;

  @Metadata({ data: "json, name=SubtitleDownloadLanguages" })
  subtitleDownloadLanguages?: string[];

  @Metadata({ data: "json, name=SubtitleFetcherOrder" })
  subtitleFetcherOrder?: string[];

  @Metadata({ data: "json, name=TypeOptions", elemType: shared.TypeOptions })
  typeOptions?: TypeOptions[];
}
