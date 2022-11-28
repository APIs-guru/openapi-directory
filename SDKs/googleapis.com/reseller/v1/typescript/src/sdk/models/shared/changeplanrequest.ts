import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Seats } from "./seats";



// ChangePlanRequest
/** 
 * JSON template for the ChangePlan rpc request.
**/
export class ChangePlanRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dealCode" })
  dealCode?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=planName" })
  planName?: string;

  @SpeakeasyMetadata({ data: "json, name=purchaseOrderId" })
  purchaseOrderId?: string;

  @SpeakeasyMetadata({ data: "json, name=seats" })
  seats?: Seats;
}
