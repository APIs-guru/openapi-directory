import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdp } from "./googlecloudidentitytoolkitadminv2defaultsupportedidp";
/**
 * Response for ListDefaultSupportedIdps
**/
export declare class GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse extends SpeakeasyBase {
    defaultSupportedIdps?: GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdp[];
    nextPageToken?: string;
}
