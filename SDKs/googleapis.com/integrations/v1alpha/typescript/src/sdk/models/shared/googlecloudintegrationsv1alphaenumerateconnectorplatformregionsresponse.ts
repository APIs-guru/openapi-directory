import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudIntegrationsV1alphaEnumerateConnectorPlatformRegionsResponse
/** 
 * Response containing all provisioned regions for Connector Platform.
**/
export class GoogleCloudIntegrationsV1alphaEnumerateConnectorPlatformRegionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=regions" })
  regions?: string[];
}
