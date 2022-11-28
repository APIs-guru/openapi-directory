import { SpeakeasyBase } from "../../../internal/utils";
export declare enum BuildSignatureKeyTypeEnum {
    KeyTypeUnspecified = "KEY_TYPE_UNSPECIFIED",
    PgpAsciiArmored = "PGP_ASCII_ARMORED",
    PkixPem = "PKIX_PEM"
}
/**
 * Message encapsulating the signature of the verified build.
**/
export declare class BuildSignature extends SpeakeasyBase {
    keyId?: string;
    keyType?: BuildSignatureKeyTypeEnum;
    publicKey?: string;
    signature?: string;
}
