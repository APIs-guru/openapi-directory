import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LabelModification } from "./labelmodification";



// ModifyLabelsRequest
/** 
 * A request to modify the set of labels on a file. This request may contain many modifications that will either all succeed or all fail transactionally.
**/
export class ModifyLabelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=labelModifications", elemType: LabelModification })
  labelModifications?: LabelModification[];
}
