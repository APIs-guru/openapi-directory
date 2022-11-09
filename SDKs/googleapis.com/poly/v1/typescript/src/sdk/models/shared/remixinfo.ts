import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RemixInfo
/** 
 * Info about the sources of this asset (i.e. assets that were remixed to create this asset).
**/
export class RemixInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=sourceAsset" })
  sourceAsset?: string[];
}
