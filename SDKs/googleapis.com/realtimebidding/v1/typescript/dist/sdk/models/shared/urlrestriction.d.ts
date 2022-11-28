import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
export declare enum UrlRestrictionRestrictionTypeEnum {
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
/**
 * Represents the URL restriction (for the URL captured by the pixel callback) for a user list.
**/
export declare class UrlRestriction extends SpeakeasyBase {
    endDate?: Date;
    restrictionType?: UrlRestrictionRestrictionTypeEnum;
    startDate?: Date;
    url?: string;
}
