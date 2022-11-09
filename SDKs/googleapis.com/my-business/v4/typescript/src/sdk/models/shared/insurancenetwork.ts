import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum InsuranceNetworkStateEnum {
    NetworkStateUnspecified = "NETWORK_STATE_UNSPECIFIED"
,    Accepted = "ACCEPTED"
,    PendingAdd = "PENDING_ADD"
,    PendingDelete = "PENDING_DELETE"
,    NotAccepted = "NOT_ACCEPTED"
}


// InsuranceNetwork
/** 
 * A single insurance network. Next id: 5
**/
export class InsuranceNetwork extends SpeakeasyBase {
  @Metadata({ data: "json, name=networkId" })
  networkId?: string;

  @Metadata({ data: "json, name=networkNames" })
  networkNames?: Map<string, string>;

  @Metadata({ data: "json, name=payerNames" })
  payerNames?: Map<string, string>;

  @Metadata({ data: "json, name=state" })
  state?: InsuranceNetworkStateEnum;
}
