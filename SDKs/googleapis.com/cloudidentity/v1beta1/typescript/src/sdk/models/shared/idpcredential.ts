import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DsaPublicKeyInfo } from "./dsapublickeyinfo";
import { RsaPublicKeyInfo } from "./rsapublickeyinfo";



// IdpCredential
/** 
 * Credential for verifying signatures produced by the Identity Provider.
**/
export class IdpCredential extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dsaKeyInfo" })
  dsaKeyInfo?: DsaPublicKeyInfo;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=rsaKeyInfo" })
  rsaKeyInfo?: RsaPublicKeyInfo;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
