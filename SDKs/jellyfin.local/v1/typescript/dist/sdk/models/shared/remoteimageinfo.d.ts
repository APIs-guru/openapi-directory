import { SpeakeasyBase } from "../../../internal/utils";
import { RatingTypeEnum } from "./ratingtypeenum";
import { ImageTypeEnum } from "./imagetypeenum";
/**
 * Class RemoteImageInfo.
**/
export declare class RemoteImageInfo extends SpeakeasyBase {
    communityRating?: number;
    height?: number;
    language?: string;
    providerName?: string;
    ratingType?: RatingTypeEnum;
    thumbnailUrl?: string;
    type?: ImageTypeEnum;
    url?: string;
    voteCount?: number;
    width?: number;
}
