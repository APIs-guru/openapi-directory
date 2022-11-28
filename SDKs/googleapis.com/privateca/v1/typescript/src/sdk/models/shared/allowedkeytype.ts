import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EcKeyType } from "./eckeytype";
import { RsaKeyType } from "./rsakeytype";



// AllowedKeyType
/** 
 * Describes a "type" of key that may be used in a Certificate issued from a CaPool. Note that a single AllowedKeyType may refer to either a fully-qualified key algorithm, such as RSA 4096, or a family of key algorithms, such as any RSA key.
**/
export class AllowedKeyType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ellipticCurve" })
  ellipticCurve?: EcKeyType;

  @SpeakeasyMetadata({ data: "json, name=rsa" })
  rsa?: RsaKeyType;
}
