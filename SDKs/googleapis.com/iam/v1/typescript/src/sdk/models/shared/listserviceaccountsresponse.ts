import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServiceAccount } from "./serviceaccount";


// ListServiceAccountsResponse
/** 
 * The service account list response.
**/
export class ListServiceAccountsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=accounts", elemType: shared.ServiceAccount })
  accounts?: ServiceAccount[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
