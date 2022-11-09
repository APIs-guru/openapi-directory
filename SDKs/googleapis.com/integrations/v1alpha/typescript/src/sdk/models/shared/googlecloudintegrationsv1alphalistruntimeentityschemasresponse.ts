import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudIntegrationsV1alphaRuntimeEntitySchema } from "./googlecloudintegrationsv1alpharuntimeentityschema";


// GoogleCloudIntegrationsV1alphaListRuntimeEntitySchemasResponse
/** 
 * Response for listing RuntimeEntitySchemas for a specific Connection.
**/
export class GoogleCloudIntegrationsV1alphaListRuntimeEntitySchemasResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=runtimeEntitySchemas", elemType: shared.GoogleCloudIntegrationsV1alphaRuntimeEntitySchema })
  runtimeEntitySchemas?: GoogleCloudIntegrationsV1alphaRuntimeEntitySchema[];
}
