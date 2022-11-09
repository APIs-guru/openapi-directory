import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum {
    UnitUnspecified = "UNIT_UNSPECIFIED",
    Month = "MONTH",
    Day = "DAY"
}
/**
 * Describes the length of a period of a time.
**/
export declare class GoogleCloudPaymentsResellerSubscriptionV1Duration extends SpeakeasyBase {
    count?: number;
    unit?: GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum;
}
