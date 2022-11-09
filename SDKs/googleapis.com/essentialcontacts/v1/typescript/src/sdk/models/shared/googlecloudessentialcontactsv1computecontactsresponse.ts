import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudEssentialcontactsV1Contact } from "./googlecloudessentialcontactsv1contact";


// GoogleCloudEssentialcontactsV1ComputeContactsResponse
/** 
 * Response message for the ComputeContacts method.
**/
export class GoogleCloudEssentialcontactsV1ComputeContactsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=contacts", elemType: shared.GoogleCloudEssentialcontactsV1Contact })
  contacts?: GoogleCloudEssentialcontactsV1Contact[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
