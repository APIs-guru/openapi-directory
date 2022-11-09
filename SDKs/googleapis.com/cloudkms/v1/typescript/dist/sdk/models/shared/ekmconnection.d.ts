import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceResolver } from "./serviceresolver";
/**
 * An EkmConnection represents an individual EKM connection. It can be used for creating CryptoKeys and CryptoKeyVersions with a ProtectionLevel of EXTERNAL_VPC, as well as performing cryptographic operations using keys created within the EkmConnection.
**/
export declare class EkmConnection extends SpeakeasyBase {
    createTime?: string;
    etag?: string;
    name?: string;
    serviceResolvers?: ServiceResolver[];
}
