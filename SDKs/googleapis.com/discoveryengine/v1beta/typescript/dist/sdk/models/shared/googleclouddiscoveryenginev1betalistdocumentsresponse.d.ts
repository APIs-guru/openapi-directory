import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDiscoveryengineV1betaDocument } from "./googleclouddiscoveryenginev1betadocument";
/**
 * Response message for DocumentService.ListDocuments method.
**/
export declare class GoogleCloudDiscoveryengineV1betaListDocumentsResponse extends SpeakeasyBase {
    documents?: GoogleCloudDiscoveryengineV1betaDocument[];
    nextPageToken?: string;
}
