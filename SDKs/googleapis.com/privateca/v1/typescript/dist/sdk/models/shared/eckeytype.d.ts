import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EcKeyTypeSignatureAlgorithmEnum {
    EcSignatureAlgorithmUnspecified = "EC_SIGNATURE_ALGORITHM_UNSPECIFIED",
    EcdsaP256 = "ECDSA_P256",
    EcdsaP384 = "ECDSA_P384",
    Eddsa25519 = "EDDSA_25519"
}
/**
 * Describes an Elliptic Curve key that may be used in a Certificate issued from a CaPool.
**/
export declare class EcKeyType extends SpeakeasyBase {
    signatureAlgorithm?: EcKeyTypeSignatureAlgorithmEnum;
}
