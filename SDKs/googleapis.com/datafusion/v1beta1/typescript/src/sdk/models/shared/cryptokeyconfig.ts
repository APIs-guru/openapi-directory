import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CryptoKeyConfig
/** 
 * The crypto key configuration. This field is used by the Customer-managed encryption keys (CMEK) feature.
**/
export class CryptoKeyConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keyReference" })
  keyReference?: string;
}
