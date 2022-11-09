import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudConnectorsV1Destination } from "./googlecloudconnectorsv1destination";


// GoogleCloudConnectorsV1DestinationConfig
/** 
 * Define the Connectors target endpoint.
**/
export class GoogleCloudConnectorsV1DestinationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinations", elemType: shared.GoogleCloudConnectorsV1Destination })
  destinations?: GoogleCloudConnectorsV1Destination[];

  @Metadata({ data: "json, name=key" })
  key?: string;
}
