import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudServicebrokerV1alpha1Service } from "./googlecloudservicebrokerv1alpha1service";
/**
 * Response message for the `ListCatalog()` method.
**/
export declare class GoogleCloudServicebrokerV1alpha1ListCatalogResponse extends SpeakeasyBase {
    description?: string;
    nextPageToken?: string;
    services?: GoogleCloudServicebrokerV1alpha1Service[];
}
