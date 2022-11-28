import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";


export enum UrlRestrictionRestrictionTypeEnum {
    RestrictionTypeUnspecified = "RESTRICTION_TYPE_UNSPECIFIED",
    Contains = "CONTAINS",
    Equals = "EQUALS",
    StartsWith = "STARTS_WITH",
    EndsWith = "ENDS_WITH",
    DoesNotEqual = "DOES_NOT_EQUAL",
    DoesNotContain = "DOES_NOT_CONTAIN",
    DoesNotStartWith = "DOES_NOT_START_WITH",
    DoesNotEndWith = "DOES_NOT_END_WITH"
}


// UrlRestriction
/** 
 * Represents the URL restriction (for the URL captured by the pixel callback) for a user list.
**/
export class UrlRestriction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=restrictionType" })
  restrictionType?: UrlRestrictionRestrictionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
