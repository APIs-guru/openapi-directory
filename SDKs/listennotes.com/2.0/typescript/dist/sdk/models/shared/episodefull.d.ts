import { SpeakeasyBase } from "../../../internal/utils";
import { PodcastSimple } from "./podcastsimple";
export declare class EpisodeFull extends SpeakeasyBase {
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
    podcast?: PodcastSimple;
    pubDateMs?: number;
    thumbnail?: string;
    title?: string;
    transcript?: string;
}
