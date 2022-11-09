import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExistenceFilter
/** 
 * A digest of all the documents that match a given target.
**/
export class ExistenceFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=targetId" })
  targetId?: number;
}
