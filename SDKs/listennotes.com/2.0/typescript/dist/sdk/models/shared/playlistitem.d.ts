import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PlaylistItemTypeEnum {
    Episode = "episode",
    CustomAudio = "custom_audio",
    Podcast = "podcast"
}
/**
 * An item in a playlist
**/
export declare class PlaylistItem extends SpeakeasyBase {
    addedAtMs?: number;
    data?: any;
    id?: number;
    notes?: string;
    type?: PlaylistItemTypeEnum;
}
