import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Subaccount } from "./subaccount";


// SubaccountsListResponse
/** 
 * Subaccount List Response
**/
export class SubaccountsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=subaccounts", elemType: shared.Subaccount })
  subaccounts?: Subaccount[];
}
