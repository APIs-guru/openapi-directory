import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleLongrunningOperation } from "./googlelongrunningoperation";



// GoogleLongrunningListOperationsResponse
/** 
 * The response message for Operations.ListOperations.
**/
export class GoogleLongrunningListOperationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextPageToken?: string;

  @SpeakeasyMetadata({ elemType: GoogleLongrunningOperation })
  operations?: GoogleLongrunningOperation[];
}
