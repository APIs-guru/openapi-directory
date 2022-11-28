import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A resource id is a generic reference that points to another YouTube resource.
**/
export declare class ResourceId extends SpeakeasyBase {
    channelId?: string;
    kind?: string;
    playlistId?: string;
    videoId?: string;
}
