import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A custom audio in a playlist, which is a type of playlist item.
**/
export declare class CustomAudio extends SpeakeasyBase {
    audio?: string;
    audioLengthSec?: number;
    image?: string;
    pubDateMs?: number;
    thumbnail?: string;
    title?: string;
}
