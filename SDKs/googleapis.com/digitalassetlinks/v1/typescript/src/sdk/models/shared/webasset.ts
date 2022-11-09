import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WebAsset
/** 
 * Describes a web asset.
**/
export class WebAsset extends SpeakeasyBase {
  @Metadata({ data: "json, name=site" })
  site?: string;
}
