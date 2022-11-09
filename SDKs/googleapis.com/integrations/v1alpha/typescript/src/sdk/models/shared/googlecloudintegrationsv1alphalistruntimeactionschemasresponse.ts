import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudIntegrationsV1alphaRuntimeActionSchema } from "./googlecloudintegrationsv1alpharuntimeactionschema";


// GoogleCloudIntegrationsV1alphaListRuntimeActionSchemasResponse
/** 
 * Response for listing RuntimeActionSchemas for a specific Connection.
**/
export class GoogleCloudIntegrationsV1alphaListRuntimeActionSchemasResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=runtimeActionSchemas", elemType: shared.GoogleCloudIntegrationsV1alphaRuntimeActionSchema })
  runtimeActionSchemas?: GoogleCloudIntegrationsV1alphaRuntimeActionSchema[];
}
