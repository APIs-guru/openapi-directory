import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceId } from "./resourceid";
export declare enum ActivityContentDetailsSocialTypeEnum {
    Unspecified = "unspecified",
    GooglePlus = "googlePlus",
    Facebook = "facebook",
    Twitter = "twitter"
}
/**
 * Details about a social network post.
**/
export declare class ActivityContentDetailsSocial extends SpeakeasyBase {
    author?: string;
    imageUrl?: string;
    referenceUrl?: string;
    resourceId?: ResourceId;
    type?: ActivityContentDetailsSocialTypeEnum;
}
