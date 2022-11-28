import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";


export enum QueryScheduleFrequencyEnum {
    FrequencyUnspecified = "FREQUENCY_UNSPECIFIED",
    OneTime = "ONE_TIME",
    Daily = "DAILY",
    Weekly = "WEEKLY",
    SemiMonthly = "SEMI_MONTHLY",
    Monthly = "MONTHLY",
    Quarterly = "QUARTERLY",
    Yearly = "YEARLY"
}


// QuerySchedule
/** 
 * Information on when and how frequently to run a query.
**/
export class QuerySchedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=frequency" })
  frequency?: QueryScheduleFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=nextRunTimezoneCode" })
  nextRunTimezoneCode?: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;
}
