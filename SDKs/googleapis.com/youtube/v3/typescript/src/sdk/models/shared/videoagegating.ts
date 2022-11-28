import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum VideoAgeGatingVideoGameRatingEnum {
    Anyone = "anyone",
    M15Plus = "m15Plus",
    M16Plus = "m16Plus",
    M17Plus = "m17Plus"
}


export class VideoAgeGating extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alcoholContent" })
  alcoholContent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=restricted" })
  restricted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=videoGameRating" })
  videoGameRating?: VideoAgeGatingVideoGameRatingEnum;
}
