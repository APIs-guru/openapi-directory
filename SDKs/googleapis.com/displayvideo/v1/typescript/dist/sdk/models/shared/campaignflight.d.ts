import { SpeakeasyBase } from "../../../internal/utils";
import { DateRange } from "./daterange";
/**
 * Settings that track the planned spend and duration of a campaign.
**/
export declare class CampaignFlight extends SpeakeasyBase {
    plannedDates?: DateRange;
    plannedSpendAmountMicros?: string;
}
