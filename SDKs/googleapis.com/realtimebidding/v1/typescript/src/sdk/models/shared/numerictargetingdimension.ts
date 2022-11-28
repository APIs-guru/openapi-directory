import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NumericTargetingDimension
/** 
 * Generic targeting used for targeting dimensions that contain a list of included and excluded numeric IDs used in app, user list, geo, and vertical id targeting.
**/
export class NumericTargetingDimension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=excludedIds" })
  excludedIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=includedIds" })
  includedIds?: string[];
}
