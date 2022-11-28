import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPrivatecatalogV1beta1Version } from "./googlecloudprivatecatalogv1beta1version";
/**
 * Response message for PrivateCatalog.SearchVersions.
**/
export declare class GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    versions?: GoogleCloudPrivatecatalogV1beta1Version[];
}
