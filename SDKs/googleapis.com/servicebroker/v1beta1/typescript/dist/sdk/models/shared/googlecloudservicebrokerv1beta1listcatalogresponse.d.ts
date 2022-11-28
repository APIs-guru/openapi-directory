import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudServicebrokerV1beta1Service } from "./googlecloudservicebrokerv1beta1service";
/**
 * Response message for the `ListCatalog()` method.
**/
export declare class GoogleCloudServicebrokerV1beta1ListCatalogResponse extends SpeakeasyBase {
    description?: string;
    nextPageToken?: string;
    services?: GoogleCloudServicebrokerV1beta1Service[];
}
