import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubtitlePlaybackModeEnum } from "./subtitleplaybackmodeenum";



// UserConfiguration
/** 
 * Class UserConfiguration.
**/
export class UserConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AudioLanguagePreference" })
  audioLanguagePreference?: string;

  @SpeakeasyMetadata({ data: "json, name=DisplayCollectionsView" })
  displayCollectionsView?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DisplayMissingEpisodes" })
  displayMissingEpisodes?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableLocalPassword" })
  enableLocalPassword?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableNextEpisodeAutoPlay" })
  enableNextEpisodeAutoPlay?: boolean;

  @SpeakeasyMetadata({ data: "json, name=GroupedFolders" })
  groupedFolders?: string[];

  @SpeakeasyMetadata({ data: "json, name=HidePlayedInLatest" })
  hidePlayedInLatest?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LatestItemsExcludes" })
  latestItemsExcludes?: string[];

  @SpeakeasyMetadata({ data: "json, name=MyMediaExcludes" })
  myMediaExcludes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OrderedViews" })
  orderedViews?: string[];

  @SpeakeasyMetadata({ data: "json, name=PlayDefaultAudioTrack" })
  playDefaultAudioTrack?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RememberAudioSelections" })
  rememberAudioSelections?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RememberSubtitleSelections" })
  rememberSubtitleSelections?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SubtitleLanguagePreference" })
  subtitleLanguagePreference?: string;

  @SpeakeasyMetadata({ data: "json, name=SubtitleMode" })
  subtitleMode?: SubtitlePlaybackModeEnum;
}
