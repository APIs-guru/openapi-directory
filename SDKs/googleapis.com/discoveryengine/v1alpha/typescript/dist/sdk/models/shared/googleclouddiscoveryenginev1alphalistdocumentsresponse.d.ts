import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDiscoveryengineV1alphaDocument } from "./googleclouddiscoveryenginev1alphadocument";
/**
 * Response message for DocumentService.ListDocuments method.
**/
export declare class GoogleCloudDiscoveryengineV1alphaListDocumentsResponse extends SpeakeasyBase {
    documents?: GoogleCloudDiscoveryengineV1alphaDocument[];
    nextPageToken?: string;
}
