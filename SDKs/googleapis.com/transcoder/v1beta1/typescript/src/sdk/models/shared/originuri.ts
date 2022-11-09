import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OriginUri
/** 
 * The origin URI.
**/
export class OriginUri extends SpeakeasyBase {
  @Metadata({ data: "json, name=dash" })
  dash?: string;

  @Metadata({ data: "json, name=hls" })
  hls?: string;
}
