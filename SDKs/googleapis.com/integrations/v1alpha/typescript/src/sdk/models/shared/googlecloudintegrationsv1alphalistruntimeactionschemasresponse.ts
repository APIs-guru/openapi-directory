import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaRuntimeActionSchema } from "./googlecloudintegrationsv1alpharuntimeactionschema";



// GoogleCloudIntegrationsV1alphaListRuntimeActionSchemasResponse
/** 
 * Response for listing RuntimeActionSchemas for a specific Connection.
**/
export class GoogleCloudIntegrationsV1alphaListRuntimeActionSchemasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=runtimeActionSchemas", elemType: GoogleCloudIntegrationsV1alphaRuntimeActionSchema })
  runtimeActionSchemas?: GoogleCloudIntegrationsV1alphaRuntimeActionSchema[];
}
