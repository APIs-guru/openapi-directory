import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EndPoint
/** 
 * Container for a URL end point of the requested type.
**/
export class EndPoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=url" })
  url?: string;
}
