import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CryptoKeyConfig
/** 
 * The crypto key configuration. This field is used by the Customer-managed encryption keys (CMEK) feature.
**/
export class CryptoKeyConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=keyReference" })
  keyReference?: string;
}
