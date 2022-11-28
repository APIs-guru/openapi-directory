import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum EcKeyTypeSignatureAlgorithmEnum {
    EcSignatureAlgorithmUnspecified = "EC_SIGNATURE_ALGORITHM_UNSPECIFIED",
    EcdsaP256 = "ECDSA_P256",
    EcdsaP384 = "ECDSA_P384",
    Eddsa25519 = "EDDSA_25519"
}


// EcKeyType
/** 
 * Describes an Elliptic Curve key that may be used in a Certificate issued from a CaPool.
**/
export class EcKeyType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=signatureAlgorithm" })
  signatureAlgorithm?: EcKeyTypeSignatureAlgorithmEnum;
}
