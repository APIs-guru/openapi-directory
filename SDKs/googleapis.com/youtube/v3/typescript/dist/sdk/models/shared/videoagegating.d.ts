import { SpeakeasyBase } from "../../../internal/utils";
export declare enum VideoAgeGatingVideoGameRatingEnum {
    Anyone = "anyone",
    M15Plus = "m15Plus",
    M16Plus = "m16Plus",
    M17Plus = "m17Plus"
}
export declare class VideoAgeGating extends SpeakeasyBase {
    alcoholContent?: boolean;
    restricted?: boolean;
    videoGameRating?: VideoAgeGatingVideoGameRatingEnum;
}
