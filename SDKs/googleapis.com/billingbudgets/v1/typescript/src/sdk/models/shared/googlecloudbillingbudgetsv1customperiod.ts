import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeDate } from "./googletypedate";



// GoogleCloudBillingBudgetsV1CustomPeriod
/** 
 * All date times begin at 12 AM US and Canadian Pacific Time (UTC-8).
**/
export class GoogleCloudBillingBudgetsV1CustomPeriod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: GoogleTypeDate;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: GoogleTypeDate;
}
