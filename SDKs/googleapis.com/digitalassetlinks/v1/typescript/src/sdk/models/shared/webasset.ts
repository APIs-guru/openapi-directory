import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WebAsset
/** 
 * Describes a web asset.
**/
export class WebAsset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=site" })
  site?: string;
}
