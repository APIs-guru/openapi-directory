import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleSecuritySafebrowsingV4RawIndices
/** 
 * A set of raw indices to remove from a local list.
**/
export class GoogleSecuritySafebrowsingV4RawIndices extends SpeakeasyBase {
  @Metadata({ data: "json, name=indices" })
  indices?: number[];
}
