import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KeyRing
/** 
 * A KeyRing is a toplevel logical grouping of CryptoKeys.
**/
export class KeyRing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
