import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Date } from "./date";
import { Date } from "./date";

export enum UrlRestrictionRestrictionTypeEnum {
    RestrictionTypeUnspecified = "RESTRICTION_TYPE_UNSPECIFIED"
,    Contains = "CONTAINS"
,    Equals = "EQUALS"
,    StartsWith = "STARTS_WITH"
,    EndsWith = "ENDS_WITH"
,    DoesNotEqual = "DOES_NOT_EQUAL"
,    DoesNotContain = "DOES_NOT_CONTAIN"
,    DoesNotStartWith = "DOES_NOT_START_WITH"
,    DoesNotEndWith = "DOES_NOT_END_WITH"
}


// UrlRestriction
/** 
 * Represents the URL restriction (for the URL captured by the pixel callback) for a user list.
**/
export class UrlRestriction extends SpeakeasyBase {
  @Metadata({ data: "json, name=endDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=restrictionType" })
  restrictionType?: UrlRestrictionRestrictionTypeEnum;

  @Metadata({ data: "json, name=startDate" })
  startDate?: Date;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
