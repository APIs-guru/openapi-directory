import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DateRange } from "./daterange";


// CampaignFlight
/** 
 * Settings that track the planned spend and duration of a campaign.
**/
export class CampaignFlight extends SpeakeasyBase {
  @Metadata({ data: "json, name=plannedDates" })
  plannedDates?: DateRange;

  @Metadata({ data: "json, name=plannedSpendAmountMicros" })
  plannedSpendAmountMicros?: string;
}
