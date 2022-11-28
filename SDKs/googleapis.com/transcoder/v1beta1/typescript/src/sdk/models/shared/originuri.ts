import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OriginUri
/** 
 * The origin URI.
**/
export class OriginUri extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dash" })
  dash?: string;

  @SpeakeasyMetadata({ data: "json, name=hls" })
  hls?: string;
}
