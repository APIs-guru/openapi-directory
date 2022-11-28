import { SpeakeasyBase } from "../../../internal/utils";
import { Meta } from "./meta";
import { MediaItem } from "./mediaitem";
export declare class MediaItemWrapped extends SpeakeasyBase {
    callback?: string;
    meta?: Meta;
    results?: MediaItem[];
}
