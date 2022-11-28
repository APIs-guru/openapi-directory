import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyUsageOptions } from "./keyusageoptions";
import { ExtendedKeyUsageOptions } from "./extendedkeyusageoptions";
import { ObjectId } from "./objectid";



// KeyUsage
/** 
 * A KeyUsage describes key usage values that may appear in an X.509 certificate.
**/
export class KeyUsage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseKeyUsage" })
  baseKeyUsage?: KeyUsageOptions;

  @SpeakeasyMetadata({ data: "json, name=extendedKeyUsage" })
  extendedKeyUsage?: ExtendedKeyUsageOptions;

  @SpeakeasyMetadata({ data: "json, name=unknownExtendedKeyUsages", elemType: ObjectId })
  unknownExtendedKeyUsages?: ObjectId[];
}
