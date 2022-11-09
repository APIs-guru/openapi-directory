import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KeyRing
/** 
 * A KeyRing is a toplevel logical grouping of CryptoKeys.
**/
export class KeyRing extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
