import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudEssentialcontactsV1Contact } from "./googlecloudessentialcontactsv1contact";
/**
 * Response message for the ListContacts method.
**/
export declare class GoogleCloudEssentialcontactsV1ListContactsResponse extends SpeakeasyBase {
    contacts?: GoogleCloudEssentialcontactsV1Contact[];
    nextPageToken?: string;
}
