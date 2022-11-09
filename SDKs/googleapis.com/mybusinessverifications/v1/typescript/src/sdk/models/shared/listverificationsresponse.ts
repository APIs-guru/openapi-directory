import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Verification } from "./verification";


// ListVerificationsResponse
/** 
 * Response message for Verifications.ListVerifications.
**/
export class ListVerificationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=verifications", elemType: shared.Verification })
  verifications?: Verification[];
}
