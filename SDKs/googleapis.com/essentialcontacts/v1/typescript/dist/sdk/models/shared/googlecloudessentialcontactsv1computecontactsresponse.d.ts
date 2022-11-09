import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudEssentialcontactsV1Contact } from "./googlecloudessentialcontactsv1contact";
/**
 * Response message for the ComputeContacts method.
**/
export declare class GoogleCloudEssentialcontactsV1ComputeContactsResponse extends SpeakeasyBase {
    contacts?: GoogleCloudEssentialcontactsV1Contact[];
    nextPageToken?: string;
}
