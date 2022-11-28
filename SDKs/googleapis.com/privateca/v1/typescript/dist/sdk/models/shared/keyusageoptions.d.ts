import { SpeakeasyBase } from "../../../internal/utils";
/**
 * KeyUsage.KeyUsageOptions corresponds to the key usage values described in https://tools.ietf.org/html/rfc5280#section-4.2.1.3.
**/
export declare class KeyUsageOptions extends SpeakeasyBase {
    certSign?: boolean;
    contentCommitment?: boolean;
    crlSign?: boolean;
    dataEncipherment?: boolean;
    decipherOnly?: boolean;
    digitalSignature?: boolean;
    encipherOnly?: boolean;
    keyAgreement?: boolean;
    keyEncipherment?: boolean;
}
