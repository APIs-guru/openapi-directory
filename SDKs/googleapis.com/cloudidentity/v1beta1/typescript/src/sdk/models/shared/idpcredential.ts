import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DsaPublicKeyInfo } from "./dsapublickeyinfo";
import { RsaPublicKeyInfo } from "./rsapublickeyinfo";


// IdpCredential
/** 
 * The identity provider's credentials (for signing assertions, etc).
**/
export class IdpCredential extends SpeakeasyBase {
  @Metadata({ data: "json, name=dsaKeyInfo" })
  dsaKeyInfo?: DsaPublicKeyInfo;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=rsaKeyInfo" })
  rsaKeyInfo?: RsaPublicKeyInfo;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
