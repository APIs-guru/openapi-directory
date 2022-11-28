import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudEssentialcontactsV1Contact } from "./googlecloudessentialcontactsv1contact";



// GoogleCloudEssentialcontactsV1ListContactsResponse
/** 
 * Response message for the ListContacts method.
**/
export class GoogleCloudEssentialcontactsV1ListContactsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contacts", elemType: GoogleCloudEssentialcontactsV1Contact })
  contacts?: GoogleCloudEssentialcontactsV1Contact[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
