import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EndPoint
/** 
 * Container for a URL end point of the requested type.
**/
export class EndPoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
