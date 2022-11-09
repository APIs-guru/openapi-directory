import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudIntegrationsV1alphaEnumerateConnectorPlatformRegionsResponse
/** 
 * Response containing all provisioned regions for Connector Platform.
**/
export class GoogleCloudIntegrationsV1alphaEnumerateConnectorPlatformRegionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=regions" })
  regions?: string[];
}
