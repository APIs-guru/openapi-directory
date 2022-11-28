import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig } from "./googlecloudidentitytoolkitadminv2inboundsamlconfig";
/**
 * Response for ListInboundSamlConfigs
**/
export declare class GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse extends SpeakeasyBase {
    inboundSamlConfigs?: GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig[];
    nextPageToken?: string;
}
