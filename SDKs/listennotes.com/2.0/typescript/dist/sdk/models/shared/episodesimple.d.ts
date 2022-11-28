import { SpeakeasyBase } from "../../../internal/utils";
import { PodcastMinimum } from "./podcastminimum";
export declare class EpisodeSimple extends SpeakeasyBase {
    audio?: string;
    audioLengthSec?: number;
    description?: string;
    explicitContent?: boolean;
    id?: string;
    image?: string;
    link?: string;
    listennotesEditUrl?: string;
    listennotesUrl?: string;
    maybeAudioInvalid?: boolean;
    podcast?: PodcastMinimum;
    pubDateMs?: number;
    thumbnail?: string;
    title?: string;
}
