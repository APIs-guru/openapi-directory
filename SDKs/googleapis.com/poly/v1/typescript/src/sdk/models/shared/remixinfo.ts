import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RemixInfo
/** 
 * Info about the sources of this asset (i.e. assets that were remixed to create this asset).
**/
export class RemixInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sourceAsset" })
  sourceAsset?: string[];
}
