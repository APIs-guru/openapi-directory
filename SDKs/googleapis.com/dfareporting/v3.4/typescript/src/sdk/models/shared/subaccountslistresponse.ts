import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Subaccount } from "./subaccount";



// SubaccountsListResponse
/** 
 * Subaccount List Response
**/
export class SubaccountsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=subaccounts", elemType: Subaccount })
  subaccounts?: Subaccount[];
}
