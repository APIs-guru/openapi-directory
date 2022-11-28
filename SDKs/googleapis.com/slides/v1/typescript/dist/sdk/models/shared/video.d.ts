import { SpeakeasyBase } from "../../../internal/utils";
import { VideoProperties } from "./videoproperties";
export declare enum VideoSourceEnum {
    SourceUnspecified = "SOURCE_UNSPECIFIED",
    Youtube = "YOUTUBE",
    Drive = "DRIVE"
}
/**
 * A PageElement kind representing a video.
**/
export declare class Video extends SpeakeasyBase {
    id?: string;
    source?: VideoSourceEnum;
    url?: string;
    videoProperties?: VideoProperties;
}
