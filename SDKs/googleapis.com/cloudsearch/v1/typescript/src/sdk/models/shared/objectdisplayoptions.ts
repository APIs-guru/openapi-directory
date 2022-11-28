import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Metaline } from "./metaline";



// ObjectDisplayOptions
/** 
 * The display options for an object.
**/
export class ObjectDisplayOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metalines", elemType: Metaline })
  metalines?: Metaline[];

  @SpeakeasyMetadata({ data: "json, name=objectDisplayLabel" })
  objectDisplayLabel?: string;
}
