import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Addressable
/** 
 * Information for connecting over HTTP(s).
**/
export class Addressable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
