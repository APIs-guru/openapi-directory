import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig } from "./googlecloudidentitytoolkitadminv2inboundsamlconfig";


// GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse
/** 
 * Response for ListInboundSamlConfigs
**/
export class GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=inboundSamlConfigs", elemType: shared.GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig })
  inboundSamlConfigs?: GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
