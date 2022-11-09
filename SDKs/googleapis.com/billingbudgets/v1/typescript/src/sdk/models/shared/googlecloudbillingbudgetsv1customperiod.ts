import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleTypeDate } from "./googletypedate";
import { GoogleTypeDate } from "./googletypedate";


// GoogleCloudBillingBudgetsV1CustomPeriod
/** 
 * All date times begin at 12 AM US and Canadian Pacific Time (UTC-8).
**/
export class GoogleCloudBillingBudgetsV1CustomPeriod extends SpeakeasyBase {
  @Metadata({ data: "json, name=endDate" })
  endDate?: GoogleTypeDate;

  @Metadata({ data: "json, name=startDate" })
  startDate?: GoogleTypeDate;
}
