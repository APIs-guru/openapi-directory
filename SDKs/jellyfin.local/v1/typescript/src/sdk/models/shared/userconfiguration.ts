import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SubtitlePlaybackModeEnum } from "./subtitleplaybackmodeenum";


// UserConfiguration
/** 
 * Class UserConfiguration.
**/
export class UserConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=AudioLanguagePreference" })
  audioLanguagePreference?: string;

  @Metadata({ data: "json, name=DisplayCollectionsView" })
  displayCollectionsView?: boolean;

  @Metadata({ data: "json, name=DisplayMissingEpisodes" })
  displayMissingEpisodes?: boolean;

  @Metadata({ data: "json, name=EnableLocalPassword" })
  enableLocalPassword?: boolean;

  @Metadata({ data: "json, name=EnableNextEpisodeAutoPlay" })
  enableNextEpisodeAutoPlay?: boolean;

  @Metadata({ data: "json, name=GroupedFolders" })
  groupedFolders?: string[];

  @Metadata({ data: "json, name=HidePlayedInLatest" })
  hidePlayedInLatest?: boolean;

  @Metadata({ data: "json, name=LatestItemsExcludes" })
  latestItemsExcludes?: string[];

  @Metadata({ data: "json, name=MyMediaExcludes" })
  myMediaExcludes?: string[];

  @Metadata({ data: "json, name=OrderedViews" })
  orderedViews?: string[];

  @Metadata({ data: "json, name=PlayDefaultAudioTrack" })
  playDefaultAudioTrack?: boolean;

  @Metadata({ data: "json, name=RememberAudioSelections" })
  rememberAudioSelections?: boolean;

  @Metadata({ data: "json, name=RememberSubtitleSelections" })
  rememberSubtitleSelections?: boolean;

  @Metadata({ data: "json, name=SubtitleLanguagePreference" })
  subtitleLanguagePreference?: string;

  @Metadata({ data: "json, name=SubtitleMode" })
  subtitleMode?: SubtitlePlaybackModeEnum;
}
