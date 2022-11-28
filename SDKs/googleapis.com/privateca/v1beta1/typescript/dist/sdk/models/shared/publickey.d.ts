import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PublicKeyTypeEnum {
    KeyTypeUnspecified = "KEY_TYPE_UNSPECIFIED",
    PemRsaKey = "PEM_RSA_KEY",
    PemEcKey = "PEM_EC_KEY"
}
/**
 * A PublicKey describes a public key.
**/
export declare class PublicKey extends SpeakeasyBase {
    key?: string;
    type?: PublicKeyTypeEnum;
}
