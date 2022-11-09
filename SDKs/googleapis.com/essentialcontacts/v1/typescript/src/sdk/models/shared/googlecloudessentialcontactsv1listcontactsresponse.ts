import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudEssentialcontactsV1Contact } from "./googlecloudessentialcontactsv1contact";


// GoogleCloudEssentialcontactsV1ListContactsResponse
/** 
 * Response message for the ListContacts method.
**/
export class GoogleCloudEssentialcontactsV1ListContactsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=contacts", elemType: shared.GoogleCloudEssentialcontactsV1Contact })
  contacts?: GoogleCloudEssentialcontactsV1Contact[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
