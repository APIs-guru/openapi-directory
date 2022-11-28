import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeDate } from "./googletypedate";
import { GoogleTypeDateTime } from "./googletypedatetime";



// GoogleCloudChannelV1DateRange
/** 
 * A representation of usage or invoice date ranges.
**/
export class GoogleCloudChannelV1DateRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invoiceEndDate" })
  invoiceEndDate?: GoogleTypeDate;

  @SpeakeasyMetadata({ data: "json, name=invoiceStartDate" })
  invoiceStartDate?: GoogleTypeDate;

  @SpeakeasyMetadata({ data: "json, name=usageEndDateTime" })
  usageEndDateTime?: GoogleTypeDateTime;

  @SpeakeasyMetadata({ data: "json, name=usageStartDateTime" })
  usageStartDateTime?: GoogleTypeDateTime;
}
