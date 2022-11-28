import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
export declare enum OpenInfoStatusEnum {
    OpenForBusinessUnspecified = "OPEN_FOR_BUSINESS_UNSPECIFIED",
    Open = "OPEN",
    ClosedPermanently = "CLOSED_PERMANENTLY",
    ClosedTemporarily = "CLOSED_TEMPORARILY"
}
/**
 * Information related to the opening state of the business.
**/
export declare class OpenInfo extends SpeakeasyBase {
    canReopen?: boolean;
    openingDate?: Date;
    status?: OpenInfoStatusEnum;
}
/**
 * Information related to the opening state of the business.
**/
export declare class OpenInfoInput extends SpeakeasyBase {
    openingDate?: Date;
    status?: OpenInfoStatusEnum;
}
