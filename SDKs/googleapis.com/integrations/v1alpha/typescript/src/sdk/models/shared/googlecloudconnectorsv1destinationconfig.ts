import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudConnectorsV1Destination } from "./googlecloudconnectorsv1destination";



// GoogleCloudConnectorsV1DestinationConfig
/** 
 * Define the Connectors target endpoint.
**/
export class GoogleCloudConnectorsV1DestinationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinations", elemType: GoogleCloudConnectorsV1Destination })
  destinations?: GoogleCloudConnectorsV1Destination[];

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;
}
