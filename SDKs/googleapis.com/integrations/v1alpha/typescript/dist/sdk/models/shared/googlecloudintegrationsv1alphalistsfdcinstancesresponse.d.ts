import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaSfdcInstance } from "./googlecloudintegrationsv1alphasfdcinstance";
/**
 * Response to list SfdcInstances.
**/
export declare class GoogleCloudIntegrationsV1alphaListSfdcInstancesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    sfdcInstances?: GoogleCloudIntegrationsV1alphaSfdcInstance[];
}
