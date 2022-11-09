import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceId } from "./resourceid";

export enum ActivityContentDetailsSocialTypeEnum {
    Unspecified = "unspecified"
,    GooglePlus = "googlePlus"
,    Facebook = "facebook"
,    Twitter = "twitter"
}


// ActivityContentDetailsSocial
/** 
 * Details about a social network post.
**/
export class ActivityContentDetailsSocial extends SpeakeasyBase {
  @Metadata({ data: "json, name=author" })
  author?: string;

  @Metadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @Metadata({ data: "json, name=referenceUrl" })
  referenceUrl?: string;

  @Metadata({ data: "json, name=resourceId" })
  resourceId?: ResourceId;

  @Metadata({ data: "json, name=type" })
  type?: ActivityContentDetailsSocialTypeEnum;
}
