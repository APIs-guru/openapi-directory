import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Seats } from "./seats";


// ChangePlanRequest
/** 
 * JSON template for the ChangePlan rpc request.
**/
export class ChangePlanRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=dealCode" })
  dealCode?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=planName" })
  planName?: string;

  @Metadata({ data: "json, name=purchaseOrderId" })
  purchaseOrderId?: string;

  @Metadata({ data: "json, name=seats" })
  seats?: Seats;
}
