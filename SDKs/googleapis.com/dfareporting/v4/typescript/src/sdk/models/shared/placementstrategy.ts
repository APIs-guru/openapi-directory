import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PlacementStrategy
/** 
 * Contains properties of a placement strategy.
**/
export class PlacementStrategy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
