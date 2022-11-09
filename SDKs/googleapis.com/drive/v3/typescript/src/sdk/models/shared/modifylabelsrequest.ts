import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LabelModification } from "./labelmodification";


// ModifyLabelsRequest
/** 
 * A request to modify the set of labels on a file. This request may contain many modifications that will either all succeed or all fail transactionally.
**/
export class ModifyLabelsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=labelModifications", elemType: shared.LabelModification })
  labelModifications?: LabelModification[];
}
