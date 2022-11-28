import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Asset
/** 
 * A single asset.
**/
export class Asset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=mediaId" })
  mediaId?: string;
}
