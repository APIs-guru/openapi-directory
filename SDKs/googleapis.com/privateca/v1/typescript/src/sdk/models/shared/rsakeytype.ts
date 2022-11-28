import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RsaKeyType
/** 
 * Describes an RSA key that may be used in a Certificate issued from a CaPool.
**/
export class RsaKeyType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxModulusSize" })
  maxModulusSize?: string;

  @SpeakeasyMetadata({ data: "json, name=minModulusSize" })
  minModulusSize?: string;
}
