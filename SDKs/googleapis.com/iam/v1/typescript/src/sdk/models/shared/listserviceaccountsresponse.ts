import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceAccount } from "./serviceaccount";



// ListServiceAccountsResponse
/** 
 * The service account list response.
**/
export class ListServiceAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accounts", elemType: ServiceAccount })
  accounts?: ServiceAccount[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
