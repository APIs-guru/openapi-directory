import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceId } from "./resourceid";


export enum ActivityContentDetailsSocialTypeEnum {
    Unspecified = "unspecified",
    GooglePlus = "googlePlus",
    Facebook = "facebook",
    Twitter = "twitter"
}


// ActivityContentDetailsSocial
/** 
 * Details about a social network post.
**/
export class ActivityContentDetailsSocial extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=author" })
  author?: string;

  @SpeakeasyMetadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=referenceUrl" })
  referenceUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceId" })
  resourceId?: ResourceId;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ActivityContentDetailsSocialTypeEnum;
}
