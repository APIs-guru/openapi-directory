import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum InsuranceNetworkStateEnum {
    NetworkStateUnspecified = "NETWORK_STATE_UNSPECIFIED",
    Accepted = "ACCEPTED",
    PendingAdd = "PENDING_ADD",
    PendingDelete = "PENDING_DELETE",
    NotAccepted = "NOT_ACCEPTED"
}


// InsuranceNetwork
/** 
 * A single insurance network. Next id: 5
**/
export class InsuranceNetwork extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=networkId" })
  networkId?: string;

  @SpeakeasyMetadata({ data: "json, name=networkNames" })
  networkNames?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=payerNames" })
  payerNames?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: InsuranceNetworkStateEnum;
}
