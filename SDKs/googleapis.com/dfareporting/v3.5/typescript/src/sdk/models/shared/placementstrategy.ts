import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PlacementStrategy
/** 
 * Contains properties of a placement strategy.
**/
export class PlacementStrategy extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
