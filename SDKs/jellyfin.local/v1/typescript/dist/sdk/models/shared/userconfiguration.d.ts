import { SpeakeasyBase } from "../../../internal/utils";
import { SubtitlePlaybackModeEnum } from "./subtitleplaybackmodeenum";
/**
 * Class UserConfiguration.
**/
export declare class UserConfiguration extends SpeakeasyBase {
    audioLanguagePreference?: string;
    displayCollectionsView?: boolean;
    displayMissingEpisodes?: boolean;
    enableLocalPassword?: boolean;
    enableNextEpisodeAutoPlay?: boolean;
    groupedFolders?: string[];
    hidePlayedInLatest?: boolean;
    latestItemsExcludes?: string[];
    myMediaExcludes?: string[];
    orderedViews?: string[];
    playDefaultAudioTrack?: boolean;
    rememberAudioSelections?: boolean;
    rememberSubtitleSelections?: boolean;
    subtitleLanguagePreference?: string;
    subtitleMode?: SubtitlePlaybackModeEnum;
}
