import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleLongrunningOperation } from "./googlelongrunningoperation";



// GoogleLongrunningListOperationsResponse
/** 
 * The response message for Operations.ListOperations.
**/
export class GoogleLongrunningListOperationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=operations", elemType: GoogleLongrunningOperation })
  operations?: GoogleLongrunningOperation[];
}
