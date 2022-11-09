import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum VideoAgeGatingVideoGameRatingEnum {
    Anyone = "anyone"
,    M15Plus = "m15Plus"
,    M16Plus = "m16Plus"
,    M17Plus = "m17Plus"
}


export class VideoAgeGating extends SpeakeasyBase {
  @Metadata({ data: "json, name=alcoholContent" })
  alcoholContent?: boolean;

  @Metadata({ data: "json, name=restricted" })
  restricted?: boolean;

  @Metadata({ data: "json, name=videoGameRating" })
  videoGameRating?: VideoAgeGatingVideoGameRatingEnum;
}
