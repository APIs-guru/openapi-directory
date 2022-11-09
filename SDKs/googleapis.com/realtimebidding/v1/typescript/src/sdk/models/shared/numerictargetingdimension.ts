import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NumericTargetingDimension
/** 
 * Generic targeting used for targeting dimensions that contain a list of included and excluded numeric IDs used in app, user list, geo, and vertical id targeting.
**/
export class NumericTargetingDimension extends SpeakeasyBase {
  @Metadata({ data: "json, name=excludedIds" })
  excludedIds?: string[];

  @Metadata({ data: "json, name=includedIds" })
  includedIds?: string[];
}
