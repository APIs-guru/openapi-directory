import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaRuntimeEntitySchema } from "./googlecloudintegrationsv1alpharuntimeentityschema";
/**
 * Response for listing RuntimeEntitySchemas for a specific Connection.
**/
export declare class GoogleCloudIntegrationsV1alphaListRuntimeEntitySchemasResponse extends SpeakeasyBase {
    nextPageToken?: string;
    runtimeEntitySchemas?: GoogleCloudIntegrationsV1alphaRuntimeEntitySchema[];
}
