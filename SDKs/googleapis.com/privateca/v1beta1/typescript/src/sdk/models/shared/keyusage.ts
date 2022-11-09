import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { KeyUsageOptions } from "./keyusageoptions";
import { ExtendedKeyUsageOptions } from "./extendedkeyusageoptions";
import { ObjectId } from "./objectid";


// KeyUsage
/** 
 * A KeyUsage describes key usage values that may appear in an X.509 certificate.
**/
export class KeyUsage extends SpeakeasyBase {
  @Metadata({ data: "json, name=baseKeyUsage" })
  baseKeyUsage?: KeyUsageOptions;

  @Metadata({ data: "json, name=extendedKeyUsage" })
  extendedKeyUsage?: ExtendedKeyUsageOptions;

  @Metadata({ data: "json, name=unknownExtendedKeyUsages", elemType: shared.ObjectId })
  unknownExtendedKeyUsages?: ObjectId[];
}
