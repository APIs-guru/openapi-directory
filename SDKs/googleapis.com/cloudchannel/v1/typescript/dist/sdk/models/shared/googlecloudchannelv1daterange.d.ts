import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeDate } from "./googletypedate";
import { GoogleTypeDateTime } from "./googletypedatetime";
/**
 * A representation of usage or invoice date ranges.
**/
export declare class GoogleCloudChannelV1DateRange extends SpeakeasyBase {
    invoiceEndDate?: GoogleTypeDate;
    invoiceStartDate?: GoogleTypeDate;
    usageEndDateTime?: GoogleTypeDateTime;
    usageStartDateTime?: GoogleTypeDateTime;
}
