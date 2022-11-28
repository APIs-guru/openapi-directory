import { SpeakeasyBase } from "../../../internal/utils";
/**
 * KeyUsage.ExtendedKeyUsageOptions has fields that correspond to certain common OIDs that could be specified as an extended key usage value.
**/
export declare class ExtendedKeyUsageOptions extends SpeakeasyBase {
    clientAuth?: boolean;
    codeSigning?: boolean;
    emailProtection?: boolean;
    ocspSigning?: boolean;
    serverAuth?: boolean;
    timeStamping?: boolean;
}
