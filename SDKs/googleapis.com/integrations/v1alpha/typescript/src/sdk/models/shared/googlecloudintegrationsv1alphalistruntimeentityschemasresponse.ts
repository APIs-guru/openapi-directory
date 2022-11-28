import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaRuntimeEntitySchema } from "./googlecloudintegrationsv1alpharuntimeentityschema";



// GoogleCloudIntegrationsV1alphaListRuntimeEntitySchemasResponse
/** 
 * Response for listing RuntimeEntitySchemas for a specific Connection.
**/
export class GoogleCloudIntegrationsV1alphaListRuntimeEntitySchemasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=runtimeEntitySchemas", elemType: GoogleCloudIntegrationsV1alphaRuntimeEntitySchema })
  runtimeEntitySchemas?: GoogleCloudIntegrationsV1alphaRuntimeEntitySchema[];
}
