import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RsaKeyType
/** 
 * Describes an RSA key that may be used in a Certificate issued from a CaPool.
**/
export class RsaKeyType extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxModulusSize" })
  maxModulusSize?: string;

  @Metadata({ data: "json, name=minModulusSize" })
  minModulusSize?: string;
}
