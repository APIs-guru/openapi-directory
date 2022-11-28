import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig } from "./googlecloudidentitytoolkitadminv2inboundsamlconfig";



// GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse
/** 
 * Response for ListInboundSamlConfigs
**/
export class GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inboundSamlConfigs", elemType: GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig })
  inboundSamlConfigs?: GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
