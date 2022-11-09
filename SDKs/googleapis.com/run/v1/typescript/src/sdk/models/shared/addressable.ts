import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Addressable
/** 
 * Information for connecting over HTTP(s).
**/
export class Addressable extends SpeakeasyBase {
  @Metadata({ data: "json, name=url" })
  url?: string;
}
