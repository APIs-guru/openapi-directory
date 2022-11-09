import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleLongrunningOperation } from "./googlelongrunningoperation";


// GoogleLongrunningListOperationsResponse
/** 
 * The response message for Operations.ListOperations.
**/
export class GoogleLongrunningListOperationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=operations", elemType: shared.GoogleLongrunningOperation })
  operations?: GoogleLongrunningOperation[];
}
