import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExistenceFilter
/** 
 * A digest of all the documents that match a given target.
**/
export class ExistenceFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=targetId" })
  targetId?: number;
}
