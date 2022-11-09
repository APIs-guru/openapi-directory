import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Asset
/** 
 * A single asset.
**/
export class Asset extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=mediaId" })
  mediaId?: string;
}
