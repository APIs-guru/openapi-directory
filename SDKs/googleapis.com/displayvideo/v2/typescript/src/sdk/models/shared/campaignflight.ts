import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DateRange } from "./daterange";



// CampaignFlight
/** 
 * Settings that track the planned spend and duration of a campaign.
**/
export class CampaignFlight extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=plannedDates" })
  plannedDates?: DateRange;

  @SpeakeasyMetadata({ data: "json, name=plannedSpendAmountMicros" })
  plannedSpendAmountMicros?: string;
}
