import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleSecuritySafebrowsingV4RawIndices
/** 
 * A set of raw indices to remove from a local list.
**/
export class GoogleSecuritySafebrowsingV4RawIndices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=indices" })
  indices?: number[];
}
