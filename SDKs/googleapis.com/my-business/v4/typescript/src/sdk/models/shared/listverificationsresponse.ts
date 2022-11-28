import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Verification } from "./verification";



// ListVerificationsResponse
/** 
 * Response message for Verifications.ListVerifications.
**/
export class ListVerificationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=verifications", elemType: Verification })
  verifications?: Verification[];
}
