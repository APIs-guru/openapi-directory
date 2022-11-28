import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An S/MIME email config.
**/
export declare class SmimeInfo extends SpeakeasyBase {
    encryptedKeyPassword?: string;
    expiration?: string;
    id?: string;
    isDefault?: boolean;
    issuerCn?: string;
    pem?: string;
    pkcs12?: string;
}
