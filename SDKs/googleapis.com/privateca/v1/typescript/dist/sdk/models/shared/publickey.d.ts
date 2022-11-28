import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PublicKeyFormatEnum {
    KeyFormatUnspecified = "KEY_FORMAT_UNSPECIFIED",
    Pem = "PEM"
}
/**
 * A PublicKey describes a public key.
**/
export declare class PublicKey extends SpeakeasyBase {
    format?: PublicKeyFormatEnum;
    key?: string;
}
