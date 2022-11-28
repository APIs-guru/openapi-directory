import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum {
    UnitUnspecified = "UNIT_UNSPECIFIED",
    Month = "MONTH",
    Day = "DAY"
}


// GoogleCloudPaymentsResellerSubscriptionV1Duration
/** 
 * Describes the length of a period of a time.
**/
export class GoogleCloudPaymentsResellerSubscriptionV1Duration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum;
}
